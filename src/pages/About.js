import React, { useState, useEffect } from "react";

function About() {
  const [scrolled, setScrolled] = useState(false);

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
        height: window.innerWidth <= 1200 ? "auto" : "100vh",
        background:
          "linear-gradient(178deg, #0a0a1a 0%, #1a2332 30%,rgb(36, 54, 82) 60%, #0a192f 100%)",
        color: "#8892b0",
        fontFamily:
          'Consolas, "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace',
        overflow: window.innerWidth <= 1200 ? "visible" : "hidden",
        position: "relative",
      }}
    >
      {/* Background Aurore Boréale - Nouveau thème créatif */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
          radial-gradient(ellipse at 20% 10%, rgba(16, 185, 129, 0.04) 0%, transparent 70%),
          radial-gradient(ellipse at 80% 90%, rgba(99, 102, 241, 0.05) 0%, transparent 60%),
          radial-gradient(ellipse at 60% 20%, rgba(34, 197, 94, 0.03) 0%, transparent 50%),
          linear-gradient(135deg, rgba(59, 130, 246, 0.02) 0%, transparent 40%),
          radial-gradient(circle at 10% 80%, rgba(167, 243, 208, 0.03) 0%, transparent 50%)
        `,
          animation: "aurora-dance 20s ease-in-out infinite",
          pointerEvents: "none",
          zIndex: -1,
        }}
      ></div>

      {/* Animation CSS pour l'aurore boréale */}
      <style>{`
        @keyframes aurora-dance {
          0%, 100% {
            transform: translateX(0) translateY(0) scale(1) rotate(0deg);
            opacity: 0.6;
          }
          25% {
            transform: translateX(-20px) translateY(-10px) scale(1.05) rotate(1deg);
            opacity: 0.8;
          }
          50% {
            transform: translateX(15px) translateY(5px) scale(0.95) rotate(-0.5deg);
            opacity: 0.7;
          }
          75% {
            transform: translateX(-10px) translateY(-15px) scale(1.02) rotate(0.8deg);
            opacity: 0.9;
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
            window.innerWidth <= 1200 || scrolled
              ? "rgba(10, 25, 47, 0.95)"
              : "transparent",
          backdropFilter:
            window.innerWidth <= 1200 || scrolled ? "blur(10px)" : "none",
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
            window.innerWidth <= 1200 ? "calc(100vh - 130px)" : "100vh",
          height: window.innerWidth <= 1200 ? "auto" : "100vh",
          display: "flex",
          alignItems: window.innerWidth <= 1200 ? "flex-start" : "center",
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
                : "85%",
            maxWidth: "1200px",
            display: "flex",
            flexDirection: window.innerWidth <= 768 ? "column" : "row",
            gap:
              window.innerWidth <= 768
                ? "40px"
                : window.innerWidth <= 1200
                ? "50px"
                : "60px",
            alignItems: window.innerWidth <= 768 ? "center" : "center",
            height: window.innerWidth <= 1200 ? "auto" : "calc(100vh - 130px)",
            padding: window.innerWidth <= 1200 ? "20px 0" : "0",
          }}
        >
          {/* Partie gauche - Bio */}
          <div
            style={{
              flex: 1,
              paddingRight:
                window.innerWidth <= 768
                  ? "0"
                  : window.innerWidth <= 1200
                  ? "20px"
                  : "40px",
              textAlign: window.innerWidth <= 768 ? "center" : "left",
            }}
          >
            <h1
              style={{
                color: "#fff",
                fontSize:
                  window.innerWidth <= 480
                    ? "2rem"
                    : window.innerWidth <= 768
                    ? "2.5rem"
                    : "3rem",
                marginBottom: window.innerWidth <= 768 ? "30px" : "40px",
                position: "relative",
                background: "linear-gradient(45deg, #64ffda, #ff6b6b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              About Me_
            </h1>

            <div
              style={{
                marginBottom: "50px",
              }}
            >
              <p
                style={{
                  fontSize: window.innerWidth <= 480 ? "1rem" : "1.1rem",
                  lineHeight: "1.6",
                  color: "#8892b0",
                  marginBottom: "20px",
                  textAlign: window.innerWidth <= 768 ? "center" : "left",
                }}
              >
                Bonjour ! Je suis{" "}
                <span style={{ color: "#64ffda", fontWeight: "bold" }}>
                  Joachim
                </span>
                , technicien, développeur Web et logiciel. Je suis passionné par
                mon métier et les enjeux du numérique de demain. Après ma
                formation en BUT (Bachelor universitaire de technologie)
                informatique graphique j'ai décidé de m'inscrire dans le monde
                de l'informatique pour relever les défis !
              </p>
            </div>

            <div>
              <h2
                style={{
                  color: "#fff",
                  fontSize: window.innerWidth <= 480 ? "1.5rem" : "1.8rem",
                  marginBottom: window.innerWidth <= 768 ? "25px" : "30px",
                }}
              >
                En Dehors du Code_
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: window.innerWidth <= 768 ? "15px" : "20px",
                  alignItems:
                    window.innerWidth <= 768 ? "center" : "flex-start",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "15px",
                    padding: window.innerWidth <= 768 ? "12px 20px" : "15px",
                    background: "rgba(2, 12, 27, 0.8)",
                    borderRadius: "8px",
                    border: "1px solid rgba(100, 255, 218, 0.1)",
                    transition: "all 0.3s ease",
                    width: window.innerWidth <= 768 ? "280px" : "100%",
                    minHeight: "50px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(100, 255, 218, 0.3)";
                    e.currentTarget.style.transform = "translateX(10px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(100, 255, 218, 0.1)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>🎮</span>
                  <span
                    style={{
                      color: "#8892b0",
                      fontSize: window.innerWidth <= 480 ? "0.9rem" : "1rem",
                    }}
                  >
                    Amateur de jeux vidéo
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "15px",
                    padding: window.innerWidth <= 768 ? "12px 20px" : "15px",
                    background: "rgba(2, 12, 27, 0.8)",
                    borderRadius: "8px",
                    border: "1px solid rgba(100, 255, 218, 0.1)",
                    transition: "all 0.3s ease",
                    width: window.innerWidth <= 768 ? "280px" : "100%",
                    minHeight: "50px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(100, 255, 218, 0.3)";
                    e.currentTarget.style.transform = "translateX(10px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(100, 255, 218, 0.1)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>🚴</span>
                  <span
                    style={{
                      color: "#8892b0",
                      fontSize: window.innerWidth <= 480 ? "0.9rem" : "1rem",
                    }}
                  >
                    Cycliste passionné
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "15px",
                    padding: window.innerWidth <= 768 ? "12px 20px" : "15px",
                    background: "rgba(2, 12, 27, 0.8)",
                    borderRadius: "8px",
                    border: "1px solid rgba(100, 255, 218, 0.1)",
                    transition: "all 0.3s ease",
                    width: window.innerWidth <= 768 ? "280px" : "100%",
                    minHeight: "50px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(100, 255, 218, 0.3)";
                    e.currentTarget.style.transform = "translateX(10px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(100, 255, 218, 0.1)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>📱</span>
                  <span
                    style={{
                      color: "#8892b0",
                      fontSize: window.innerWidth <= 480 ? "0.9rem" : "1rem",
                    }}
                  >
                    Féru de nouvelles technologies
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "15px",
                    padding: window.innerWidth <= 768 ? "12px 20px" : "15px",
                    background: "rgba(2, 12, 27, 0.8)",
                    borderRadius: "8px",
                    border: "1px solid rgba(100, 255, 218, 0.1)",
                    transition: "all 0.3s ease",
                    width: window.innerWidth <= 768 ? "280px" : "100%",
                    minHeight: "50px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(100, 255, 218, 0.3)";
                    e.currentTarget.style.transform = "translateX(10px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(100, 255, 218, 0.1)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>🎥</span>
                  <span
                    style={{
                      color: "#8892b0",
                      fontSize: window.innerWidth <= 480 ? "0.9rem" : "1rem",
                    }}
                  >
                    Cinéphile, explorateur passionné du 7e art
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Partie droite - Photo et CTA */}
          <div
            style={{
              flex: window.innerWidth <= 768 ? "0 0 auto" : 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: window.innerWidth <= 768 ? "30px" : "40px",
              order: window.innerWidth <= 768 ? -1 : 0,
            }}
          >
            <div
              style={{
                position: "relative",
                width:
                  window.innerWidth <= 480
                    ? "250px"
                    : window.innerWidth <= 768
                    ? "300px"
                    : "350px",
                height:
                  window.innerWidth <= 480
                    ? "250px"
                    : window.innerWidth <= 768
                    ? "300px"
                    : "350px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "3px solid #64ffda",
                  position: "relative",
                  background: "rgba(2, 12, 27, 0.8)",
                }}
              >
                <img
                  src="/assets/images/about/me.jpeg"
                  alt="Joachim Douillard"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "filter 0.3s ease",
                  }}
                />
              </div>

              {/* Effet de cadre décoratif */}
              <div
                style={{
                  position: "absolute",
                  top: "-15px",
                  left: "-15px",
                  width: "100%",
                  height: "100%",
                  border: "2px solid rgba(100, 255, 218, 0.3)",
                  borderRadius: "12px",
                  zIndex: -1,
                }}
              ></div>

              {/* Bloc décoratif d'arrière-plan */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "-20px",
                  width: "80px",
                  height: "80px",
                  background:
                    "linear-gradient(135deg, rgba(100, 255, 218, 0.2), rgba(100, 255, 218, 0.05))",
                  borderRadius: "8px",
                  zIndex: -2,
                  transform: "rotate(15deg)",
                }}
              ></div>

              <div
                style={{
                  position: "absolute",
                  bottom: "-10px",
                  left: "-25px",
                  width: "60px",
                  height: "60px",
                  background:
                    "linear-gradient(45deg, rgba(255, 107, 107, 0.15), rgba(255, 107, 107, 0.05))",
                  borderRadius: "50%",
                  zIndex: -2,
                }}
              ></div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                alignItems: "center",
                width: "100%",
              }}
            >
              <a
                href="/contact"
                style={{
                  display: "inline-block",
                  padding: window.innerWidth <= 480 ? "12px 20px" : "15px 30px",
                  background: "rgba(100, 255, 218, 0.1)",
                  border: "2px solid #64ffda",
                  borderRadius: "8px",
                  color: "#64ffda",
                  textDecoration: "none",
                  fontSize: window.innerWidth <= 480 ? "1rem" : "1.1rem",
                  fontWeight: "bold",
                  transition: "all 0.3s ease",
                  textAlign: "center",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(100, 255, 218, 0.2)";
                  e.target.style.transform = "translateY(-3px)";
                  e.target.style.boxShadow =
                    "0 10px 30px rgba(100, 255, 218, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "rgba(100, 255, 218, 0.1)";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }}
              >
                Discutons de vos projets →
              </a>

              <a
                href="/skills"
                style={{
                  color: "#8892b0",
                  textDecoration: "none",
                  fontSize: "1rem",
                  transition: "color 0.3s ease",
                  borderBottom: "1px solid transparent",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#64ffda";
                  const underline = e.target.querySelector(
                    ".underline-animation"
                  );
                  if (underline) {
                    underline.style.width = "100%";
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#8892b0";
                  const underline = e.target.querySelector(
                    ".underline-animation"
                  );
                  if (underline) {
                    underline.style.width = "0%";
                  }
                }}
              >
                Voir mes compétences
                <span
                  className="underline-animation"
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    width: "0%",
                    height: "2px",
                    backgroundColor: "#64ffda",
                    transition: "width 0.3s ease",
                    transformOrigin: "left",
                  }}
                ></span>
              </a>
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
            window.innerWidth <= 1200 || scrolled
              ? "rgba(10, 25, 47, 0.95)"
              : "transparent",
          backdropFilter:
            window.innerWidth <= 1200 || scrolled ? "blur(10px)" : "none",
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

export default About;
