const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Mesurer toutes les métriques Web Vitals
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Fonction pour analyser et optimiser les performances
export const analyzePerformance = () => {
  const logMetric = (metric) => {
    console.group(`📊 Web Vital: ${metric.name}`);
    console.log(`Valeur: ${Math.round(metric.value)}ms`);
    console.log(`Évaluation: ${getPerformanceRating(metric.name, metric.value)}`);
    console.log(`ID: ${metric.id}`);
    console.groupEnd();
    
    // Envoyer vers analytics si configuré
    if (window.gtag) {
      window.gtag('event', metric.name, {
        event_category: 'Web Vitals',
        value: Math.round(metric.value),
        non_interaction: true,
      });
    }
  };

  return logMetric;
};

// Fonction pour évaluer les performances
const getPerformanceRating = (metricName, value) => {
  const thresholds = {
    FCP: { good: 1800, needsImprovement: 3000 },
    LCP: { good: 2500, needsImprovement: 4000 },
    FID: { good: 100, needsImprovement: 300 },
    CLS: { good: 0.1, needsImprovement: 0.25 },
    TTFB: { good: 800, needsImprovement: 1800 }
  };

  const threshold = thresholds[metricName];
  if (!threshold) return 'Inconnue';

  if (value <= threshold.good) return '🟢 Bon';
  if (value <= threshold.needsImprovement) return '🟡 À améliorer';
  return '🔴 Mauvais';
};

export default reportWebVitals;
