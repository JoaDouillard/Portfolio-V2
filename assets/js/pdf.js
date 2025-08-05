// Configurer PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';

// Chemin vers le PDF
const url = '/assets/images/skills/CV.pdf';

// Fonction pour calculer le zoom approprié
function getResponsiveScale() {
  // Base zoom de 1.4 (140%) pour les grands écrans
  let baseScale = 1.2;

  // Ajustement selon la largeur de l'écran
if (window.innerWidth < 360) {
  // Très petits mobiles
  baseScale = 0.4;
}
else if (window.innerWidth < 480) {
  // Petits mobiles
  baseScale = 0.6;
}
else if (window.innerWidth < 768) {
  // Tablettes et mobiles
  baseScale = 0.8;
}
else if (window.innerWidth < 1400 && window.innerHeight > 850) {
  baseScale = 0.9;
}
else if (window.innerWidth < 1800 && window.innerHeight > 1000) {
  baseScale = 1.0;
}

return baseScale;

}

// Fonction pour rendre le PDF avec zoom adaptatif
function renderPDF() {
  const container = document.getElementById('pdf-container');
  container.innerHTML = ''; // Nettoyer le conteneur
  
  // Charger et afficher le PDF
  pdfjsLib.getDocument(url).promise.then(pdfDoc => {
    // Calculer le zoom responsive
    const scale = getResponsiveScale();
    
    // Fonction pour rendre une page
    function renderPage(pageNum) {
      pdfDoc.getPage(pageNum).then(page => {
        const canvas = document.createElement('canvas');
        container.appendChild(canvas);
        
        const context = canvas.getContext('2d');
        const viewport = page.getViewport({ scale: scale });
        
        // Ajuster le canvas
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        
        // Rendre la page
        page.render({
          canvasContext: context,
          viewport: viewport
        }).promise.then(() => {
          // Rendre la page suivante si elle existe
          if (pageNum < pdfDoc.numPages) {
            renderPage(pageNum + 1);
          }
        });
      });
    }
    
    // Commencer par la première page
    renderPage(1);
  }).catch(error => {
    console.error('Erreur lors du chargement du PDF:', error);
    container.innerHTML = '<p>Erreur lors du chargement du PDF. Veuillez réessayer.</p>';
  });
}

// Charger initialement le PDF
renderPDF();

// Recalculer le zoom lors des redimensionnements
let resizeTimeout;
window.addEventListener('resize', function() {
  // Utiliser un debounce pour éviter trop d'appels
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(renderPDF, 250);
});