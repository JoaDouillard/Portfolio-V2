import { useEffect } from "react";

const SEOHelmet = ({
  title = "Joachim Douillard - Développeur Web & Logiciel",
  description = "Portfolio de Joachim Douillard - Développeur Web & Logiciel, Technicien IT.",
  keywords = "Joachim, joachim, Douillard, douillard, développeur web, développeur logiciel, portfolio, technicien IT, développement web, développement logiciel",
  image = "/assets/images/favicon/favicon.ico",
  url = "https://www.douillardjoachim.fr",
}) => {
  useEffect(() => {
    // Mettre à jour le titre
    document.title = title;

    // Mettre à jour ou créer les meta tags
    const updateMetaTag = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    const updatePropertyTag = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    // Meta tags de base
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", "Joachim Douillard");
    updateMetaTag("robots", "index, follow");

    // Open Graph tags pour les réseaux sociaux
    updatePropertyTag("og:title", title);
    updatePropertyTag("og:description", description);
    updatePropertyTag("og:image", url + image);
    updatePropertyTag("og:url", url);
    updatePropertyTag("og:type", "website");
    updatePropertyTag("og:site_name", "Portfolio Joachim Douillard");

    // Twitter Cards
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", url + image);

    // JSON-LD Schema pour les moteurs de recherche
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Joachim Douillard",
      jobTitle: "Développeur Web & Logiciel",
      description: description,
      url: url,
      image: url + image,
      email: "joachim.douillard@example.com",
      sameAs: [
        "https://github.com/JoaDouillard",
        "https://www.linkedin.com/in/joachim-douillard",
      ],
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "IUT Clermont Auvergne",
      },
      knowsAbout: [
        "React",
        "Symfony",
        "C++",
        "JavaScript",
        "PHP",
        "Web Development",
      ],
    };

    // Supprimer l'ancien script JSON-LD s'il existe
    const oldScript = document.querySelector(
      'script[type="application/ld+json"]'
    );
    if (oldScript) {
      oldScript.remove();
    }

    // Ajouter le nouveau script JSON-LD
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    // Canonical URL
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", url);
  }, [title, description, keywords, image, url]);

  return null; // Ce composant n'affiche rien
};

export default SEOHelmet;
