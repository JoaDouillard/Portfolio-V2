import React, { useState, useEffect } from "react";

function Skills() {
  const [animateProgress, setAnimateProgress] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Déclenche l'animation des barres de progression après un court délai
    const timer = setTimeout(() => setAnimateProgress(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        height:
          window.innerWidth <= 1000 && window.innerHeight <= 1200
            ? "auto"
            : "100vh",
        background:
          "linear-gradient(45deg, #0a0a23 0%, #1a1a3e 25%, #2d1b69 50%, #0a192f 100%)",
        color: "#8892b0",
        fontFamily:
          'Consolas, "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace',
        overflow:
          window.innerWidth <= 1000 && window.innerHeight <= 1200
            ? "visible"
            : "hidden",
        position: "relative",
      }}
    >
      {/* Background violet doux assombri avec diagonale inversée */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
          radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.06) 0%, transparent 50%),
          radial-gradient(circle at 20% 80%, rgba(219, 39, 119, 0.04) 0%, transparent 50%),
          radial-gradient(circle at 60% 60%, rgba(100, 255, 218, 0.03) 0%, transparent 50%)
        `,
          animation: "pulse-gradient-soft 10s ease-in-out infinite",
          pointerEvents: "none",
          zIndex: -1,
        }}
      ></div>

      {/* Animation CSS pour le background violet doux */}
      <style>{`
        @keyframes pulse-gradient-soft {
          0%, 100% {
            opacity: 0.8;
            transform: scale(1) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.02) rotate(0.5deg);
          }
        }
      `}</style>

      {/* Header */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "70px",
          padding: window.innerWidth <= 768 ? "0 20px" : "0 50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          backgroundColor:
            (window.innerWidth <= 1000 && window.innerHeight <= 1200) ||
            scrolled
              ? "rgba(10, 25, 47, 0.95)"
              : "transparent",
          backdropFilter:
            (window.innerWidth <= 1000 && window.innerHeight <= 1200) ||
            scrolled
              ? "blur(10px)"
              : "none",
          zIndex: 1000,
        }}
      >
        <a
          href="/"
          style={{
            color: "#64ffda",
            fontSize: "1.2rem",
            textDecoration: "none",
            fontWeight: "medium",
          }}
        >
          Joachim_Douillard_
        </a>
        <nav>
          <a
            href="/contact"
            style={{
              color: "#8892b0",
              textDecoration: "none",
              fontSize: "1rem",
              transition: "color 0.3s ease",
              padding: "5px 10px",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#64ffda")}
            onMouseLeave={(e) => (e.target.style.color = "#8892b0")}
          >
            contact_me_
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main
        style={{
          paddingTop: "70px",
          paddingBottom: "60px",
          minHeight:
            window.innerWidth <= 1000 && window.innerHeight <= 1200
              ? "calc(100vh - 130px)"
              : "100vh",
          height:
            window.innerWidth <= 1000 && window.innerHeight <= 1200
              ? "auto"
              : "100vh",
          display: "flex",
          alignItems:
            window.innerWidth <= 1000 && window.innerHeight <= 1200
              ? "flex-start"
              : "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width:
              window.innerWidth <= 768
                ? "95%"
                : window.innerWidth <= 1200
                ? "90%"
                : "90%",
            maxWidth: "1400px",
            height:
              window.innerWidth <= 1000 && window.innerHeight <= 1200
                ? "auto"
                : "calc(80vh - 100px)",
            display: "flex",
            flexDirection: window.innerWidth <= 768 ? "column" : "row",
            gap: window.innerWidth <= 768 ? "20px" : "30px",
            padding:
              window.innerWidth <= 1000 && window.innerHeight <= 1200
                ? "20px 0"
                : "0",
          }}
        >
          {/* Partie gauche - CV PDF (65%) */}
          <div
            style={{
              flex: window.innerWidth <= 768 ? "1 0 auto" : "0 0 65%",
              borderRadius: "12px",
              overflow: "hidden",
              position: "relative",
              background: "#0a192f",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
              height:
                window.innerWidth <= 768
                  ? "400px"
                  : window.innerWidth <= 1200
                  ? "500px"
                  : "auto",
              order: window.innerWidth <= 768 ? 0 : 0,
            }}
          >
            <iframe
              src="/assets/images/skills/CV-joachimdouillard.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: "12px",
              }}
              title="CV Joachim Douillard"
            />
          </div>

          {/* Partie droite - Compétences et Infos (35%) */}
          <div
            style={{
              flex: window.innerWidth <= 768 ? "1 0 auto" : "0 0 35%",
              display: "flex",
              flexDirection: "column",
              gap: window.innerWidth <= 768 ? "15px" : "20px",
              justifyContent:
                window.innerWidth <= 768 ? "flex-start" : "center",
              alignItems: "stretch",
              order: window.innerWidth <= 768 ? 1 : 1,
            }}
          >
            {/* Soft Skills */}
            <div
              style={{
                background: "rgba(2, 12, 27, 0.9)",
                borderRadius: "12px",
                padding: window.innerWidth <= 768 ? "20px" : "25px",
                border: "1px solid rgba(100, 255, 218, 0.1)",
                transition: "all 0.3s ease",
                width: "100%",
                minHeight:
                  window.innerWidth <= 1000 && window.innerHeight <= 1200
                    ? "300px"
                    : "auto",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(100, 255, 218, 0.3)";
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(100, 255, 218, 0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <h3
                style={{
                  color: "#fff",
                  fontSize: window.innerWidth <= 480 ? "1.2rem" : "1.3rem",
                  marginBottom: window.innerWidth <= 768 ? "15px" : "20px",
                }}
              >
                Soft Skills
              </h3>

              {[
                { name: "Curieux", percent: 85 },
                { name: "Persévérant", percent: 70 },
                { name: "Rigoureux", percent: 75 },
                { name: "Patient", percent: 65 },
              ].map((skill, index) => (
                <div key={index} style={{ marginBottom: "15px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "5px",
                    }}
                  >
                    <span style={{ color: "#8892b0", fontSize: "0.9rem" }}>
                      {skill.name}
                    </span>
                    <span style={{ color: "#64ffda", fontSize: "0.8rem" }}>
                      {skill.percent}%
                    </span>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "6px",
                      background: "rgba(100, 255, 218, 0.1)",
                      borderRadius: "3px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: animateProgress ? `${skill.percent}%` : "0%",
                        height: "100%",
                        background: "linear-gradient(90deg, #64ffda, #4ade80)",
                        borderRadius: "3px",
                        transition: "width 2s ease-in-out",
                        transitionDelay: `${index * 0.2}s`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Parcours */}
            <div
              style={{
                background: "rgba(2, 12, 27, 0.9)",
                borderRadius: "12px",
                padding: window.innerWidth <= 768 ? "20px" : "25px",
                border: "1px solid rgba(100, 255, 218, 0.1)",
                transition: "all 0.3s ease",
                width: "100%",
                minHeight:
                  window.innerWidth <= 1000 && window.innerHeight <= 1200
                    ? "250px"
                    : "auto",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(100, 255, 218, 0.3)";
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(100, 255, 218, 0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <h3
                style={{
                  color: "#fff",
                  fontSize: window.innerWidth <= 480 ? "1.2rem" : "1.3rem",
                  marginBottom: window.innerWidth <= 768 ? "15px" : "20px",
                }}
              >
                Parcours
              </h3>

              <div style={{ position: "relative" }}>
                {/* Timeline line */}
                <div
                  style={{
                    position: "absolute",
                    left: "10px",
                    top: "20px",
                    bottom: "20px",
                    width: "2px",
                    background:
                      "linear-gradient(180deg, #64ffda, rgba(100, 255, 218, 0.3))",
                  }}
                ></div>

                {/* Timeline items */}
                <div
                  style={{
                    marginBottom: "25px",
                    paddingLeft: "35px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "6px",
                      top: "5px",
                      width: "10px",
                      height: "10px",
                      background: "#64ffda",
                      borderRadius: "50%",
                      boxShadow: "0 0 10px rgba(100, 255, 218, 0.5)",
                    }}
                  ></div>
                  <div
                    style={{
                      color: "#64ffda",
                      fontSize: "0.8rem",
                      marginBottom: "5px",
                    }}
                  >
                    2023-2026
                  </div>
                  <div
                    style={{
                      color: "#fff",
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    BUT Informatique
                  </div>
                  <div style={{ color: "#8892b0", fontSize: "0.9rem" }}>
                    IUT Clermont Auvergne
                  </div>
                  <div
                    style={{
                      color: "#8892b0",
                      fontSize: "0.8rem",
                      marginTop: "5px",
                    }}
                  >
                    Spécialité en développement d'applications
                  </div>
                </div>

                <div style={{ paddingLeft: "35px", position: "relative" }}>
                  <div
                    style={{
                      position: "absolute",
                      left: "6px",
                      top: "5px",
                      width: "10px",
                      height: "10px",
                      background: "#64ffda",
                      borderRadius: "50%",
                      opacity: 1,
                    }}
                  ></div>
                  <div
                    style={{
                      color: "#64ffda",
                      fontSize: "0.8rem",
                      marginBottom: "5px",
                    }}
                  >
                    2022
                  </div>
                  <div
                    style={{
                      color: "#fff",
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    BAC STI2D
                  </div>
                  <div style={{ color: "#8892b0", fontSize: "0.9rem" }}>
                    Pôle La Chartreuse Paradies
                  </div>
                  <div
                    style={{
                      color: "#8892b0",
                      fontSize: "0.8rem",
                      marginTop: "5px",
                    }}
                  >
                    Option SIN - Systèmes d'Information et Numérique
                  </div>
                </div>
              </div>
            </div>

            {/* Langues et Certifications */}
            <div
              style={{
                background: "rgba(2, 12, 27, 0.9)",
                borderRadius: "12px",
                padding: window.innerWidth <= 768 ? "20px" : "25px",
                border: "1px solid rgba(100, 255, 218, 0.1)",
                transition: "all 0.3s ease",
                width: "100%",
                minHeight:
                  window.innerWidth <= 1000 && window.innerHeight <= 1200
                    ? "200px"
                    : "auto",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(100, 255, 218, 0.3)";
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(100, 255, 218, 0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <h3
                style={{
                  color: "#fff",
                  fontSize: window.innerWidth <= 480 ? "1.2rem" : "1.3rem",
                  marginBottom: window.innerWidth <= 768 ? "15px" : "20px",
                }}
              >
                Langues & Certifications
              </h3>

              <div style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ color: "#8892b0" }}>Français</span>
                  <span style={{ color: "#64ffda", fontSize: "0.8rem" }}>
                    Natif
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <span style={{ color: "#8892b0" }}>Anglais</span>
                  <span style={{ color: "#64ffda", fontSize: "0.8rem" }}>
                    B2 - Avancé
                  </span>
                </div>

                <div
                  style={{
                    padding: "6px 12px",
                    background: "rgba(100, 255, 218, 0.1)",
                    border: "1px solid rgba(100, 255, 218, 0.3)",
                    borderRadius: "4px",
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    fontSize: "0.8rem",
                    display: "inline-block",
                  }}
                  onClick={() => window.open("https://pix.fr/", "_blank")}
                  onMouseEnter={(e) => {
                    e.target.style.background = "rgba(100, 255, 218, 0.2)";
                    e.target.style.borderColor = "rgba(100, 255, 218, 0.5)";
                    e.target.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(100, 255, 218, 0.1)";
                    e.target.style.borderColor = "rgba(100, 255, 218, 0.3)";
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  <span style={{ color: "#64ffda", fontWeight: "bold" }}>
                    PIX
                  </span>
                </div>
              </div>
            </div>

            {/* Liens rapides */}
            <div
              style={{
                background: "rgba(2, 12, 27, 0.9)",
                borderRadius: "12px",
                padding: window.innerWidth <= 768 ? "20px" : "25px",
                border: "1px solid rgba(100, 255, 218, 0.1)",
                transition: "all 0.3s ease",
                width: "100%",
                height: "auto",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(100, 255, 218, 0.3)";
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(100, 255, 218, 0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "8px",
                  flexWrap: "wrap",
                  justifyContent: "stretch",
                  alignItems: "stretch",
                }}
              >
                <a
                  href="https://github.com/JoaDouillard"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding:
                      window.innerWidth <= 480 ? "10px 15px" : "8px 10px",
                    background: "rgba(100, 255, 218, 0.05)",
                    border: "1px solid rgba(100, 255, 218, 0.2)",
                    borderRadius: "6px",
                    color: "#64ffda",
                    textDecoration: "none",
                    fontSize: window.innerWidth <= 480 ? "0.8rem" : "0.75rem",
                    transition: "all 0.3s ease",
                    flex:
                      window.innerWidth <= 550
                        ? "1 1 100%"
                        : window.innerWidth <= 900
                        ? "1 1 calc(50% - 4px)"
                        : "1 1 auto",
                    justifyContent: "center",
                    minWidth: "fit-content",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "rgba(100, 255, 218, 0.1)";
                    e.target.style.borderColor = "rgba(100, 255, 218, 0.4)";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(100, 255, 218, 0.05)";
                    e.target.style.borderColor = "rgba(100, 255, 218, 0.2)";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/joachim-douillard"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding:
                      window.innerWidth <= 480 ? "10px 15px" : "8px 10px",
                    background: "rgba(100, 255, 218, 0.05)",
                    border: "1px solid rgba(100, 255, 218, 0.2)",
                    borderRadius: "6px",
                    color: "#64ffda",
                    textDecoration: "none",
                    fontSize: window.innerWidth <= 480 ? "0.8rem" : "0.75rem",
                    transition: "all 0.3s ease",
                    flex:
                      window.innerWidth <= 550
                        ? "1 1 100%"
                        : window.innerWidth <= 900
                        ? "1 1 calc(50% - 4px)"
                        : "1 1 auto",
                    minWidth: "fit-content",
                    justifyContent: "center",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "rgba(100, 255, 218, 0.1)";
                    e.target.style.borderColor = "rgba(100, 255, 218, 0.4)";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(100, 255, 218, 0.05)";
                    e.target.style.borderColor = "rgba(100, 255, 218, 0.2)";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  LinkedIn
                </a>

                <a
                  href="/assets/images/skills/CV-joachimdouillard.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding:
                      window.innerWidth <= 480 ? "10px 15px" : "8px 15px",
                    background: "rgba(100, 255, 218, 0.05)",
                    border: "1px solid rgba(100, 255, 218, 0.2)",
                    borderRadius: "6px",
                    color: "#64ffda",
                    textDecoration: "none",
                    fontSize: window.innerWidth <= 480 ? "0.8rem" : "0.8rem",
                    transition: "all 0.3s ease",
                    flex:
                      window.innerWidth <= 550
                        ? "1 1 100%"
                        : window.innerWidth <= 900
                        ? "1 1 100%"
                        : "1 1 auto",
                    justifyContent: "center",
                    minWidth: "fit-content",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "rgba(100, 255, 218, 0.1)";
                    e.target.style.borderColor = "rgba(100, 255, 218, 0.4)";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(100, 255, 218, 0.05)";
                    e.target.style.borderColor = "rgba(100, 255, 218, 0.2)";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                  </svg>
                  Télécharger CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          padding: window.innerWidth <= 768 ? "15px 20px" : "20px 50px",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          backgroundColor:
            (window.innerWidth <= 1000 && window.innerHeight <= 1200) ||
            scrolled
              ? "rgba(10, 25, 47, 0.95)"
              : "transparent",
          backdropFilter:
            (window.innerWidth <= 1000 && window.innerHeight <= 1200) ||
            scrolled
              ? "blur(10px)"
              : "none",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: window.innerWidth <= 768 ? "center" : "flex-start",
            gap: window.innerWidth <= 768 ? "15px" : "20px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: "0.8rem",
              marginRight: window.innerWidth <= 768 ? "10px" : "20px",
              color: "#8892b0",
            }}
          >
            find me in:
          </span>

          <a
            href="https://github.com/JoaDouillard?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#8892b0",
              textDecoration: "none",
              fontSize: "0.9rem",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#64ffda")}
            onMouseLeave={(e) => (e.target.style.color = "#8892b0")}
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/joachim-douillard"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#8892b0",
              textDecoration: "none",
              fontSize: "0.9rem",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#64ffda")}
            onMouseLeave={(e) => (e.target.style.color = "#8892b0")}
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Skills;
