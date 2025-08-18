// Utilitaires pour optimiser les Web Vitals

// Optimisation des images avec lazy loading et formats modernes
export const optimizeImage = (src, alt, className = "") => {
  const img = document.createElement("img");
  img.loading = "lazy";
  img.alt = alt;
  img.className = className;

  // Support des formats modernes
  if (src.endsWith(".jpg") || src.endsWith(".jpeg") || src.endsWith(".png")) {
    const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, ".webp");
    const avifSrc = src.replace(/\.(jpg|jpeg|png)$/i, ".avif");

    const picture = document.createElement("picture");

    const sourceAvif = document.createElement("source");
    sourceAvif.srcset = avifSrc;
    sourceAvif.type = "image/avif";

    const sourceWebp = document.createElement("source");
    sourceWebp.srcset = webpSrc;
    sourceWebp.type = "image/webp";

    picture.appendChild(sourceAvif);
    picture.appendChild(sourceWebp);
    picture.appendChild(img);

    img.src = src; // Fallback
    return picture;
  }

  img.src = src;
  return img;
};

// Préchargement des ressources critiques
export const preloadCriticalResources = () => {
  const criticalImages = ["/assets/images/projects/VignetteallP.webp"];

  criticalImages.forEach((src) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
  });
};

// Optimisation du rendu des polices
export const optimizeFonts = () => {
  // Précharger les polices système/web fonts si nécessaire
  const link = document.createElement("link");
  link.rel = "preconnect";
  link.href = "https://fonts.googleapis.com";
  document.head.appendChild(link);
};

// Debounce pour les événements de scroll/resize
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Intersection Observer pour lazy loading
export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: "50px",
    threshold: 0.1,
  };

  return new IntersectionObserver(callback, { ...defaultOptions, ...options });
};

// Optimisation du CLS (Cumulative Layout Shift)
export const preventLayoutShift = (element, dimensions) => {
  if (dimensions.width && dimensions.height) {
    element.style.width = dimensions.width + "px";
    element.style.height = dimensions.height + "px";
  }
};

// Mesure des Web Vitals personnalisée
export const measureWebVitals = () => {
  // Cette fonction sera utilisée avec reportWebVitals
  return {
    onCLS: (metric) => {
      console.log("CLS:", metric);
      // Envoyer vers analytics si besoin
    },
    onFID: (metric) => {
      console.log("FID:", metric);
    },
    onFCP: (metric) => {
      console.log("FCP:", metric);
    },
    onLCP: (metric) => {
      console.log("LCP:", metric);
    },
    onTTFB: (metric) => {
      console.log("TTFB:", metric);
    },
  };
};
