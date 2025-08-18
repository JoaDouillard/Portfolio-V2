import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Composant pour gérer la numérotation dynamique des lignes
function DynamicCodePreview({ isSmallScreen }) {
  const [lineCount, setLineCount] = useState(20);
  const codeRef = useRef(null);

  const codeLines = [
    { content: "class PolitiqueConfidentialite {", indent: 0 },
    { content: "constructor() {", indent: 1 },
    { content: 'this.objectif = "Contact uniquement";', indent: 2 },
    { content: 'this.conservationDonnees = "Durée nécessaire";', indent: 2 },
    { content: 'this.tiersParties = "Aucune";', indent: 2 },
    { content: "}", indent: 1 },
    { content: "}", indent: 0 },
    { content: "", indent: 0 },
    { content: "const infoConfidentialite = {", indent: 0 },
    {
      content:
        'donneesPersonnelles: "Toutes les informations personnelles collectées via ce formulaire sont utilisées exclusivement pour établir une communication à but professionnel.",',
      indent: 1,
    },
    { content: "", indent: 1 },
    {
      content:
        'stockage: "Vos données ne sont pas partagées et seront supprimées",',
      indent: 1,
    },
    { content: "", indent: 1 },
    {
      content:
        'consentement: "En soumettant ce formulaire, vous acceptez ces conditions.",',
      indent: 1,
    },
    { content: "}", indent: 0 },
    { content: "", indent: 0 },
    { content: "// Merci de votre confiance !", indent: 0 },
  ];

  useEffect(() => {
    const updateLineNumbers = () => {
      if (!codeRef.current) return;

      // Forcer un reflow pour recalculer les dimensions réelles
      codeRef.current.style.height = "auto";
      const lineHeight = parseFloat(
        window.getComputedStyle(codeRef.current).lineHeight
      );
      const totalHeight = codeRef.current.scrollHeight;
      const calculatedLines = Math.ceil(totalHeight / lineHeight);

      // Minimum 20 lignes, maximum calculé
      const finalLineCount = Math.max(20, calculatedLines);

      // Forcer la mise à jour même si c'est la même valeur pour déclencher un re-render
      setLineCount((prevCount) => {
        // Toujours mettre à jour pour forcer le recalcul
        return finalLineCount;
      });
    };

    // Délais multiples pour être sûr que le DOM s'est bien mis à jour
    const timer1 = setTimeout(updateLineNumbers, 50);
    const timer2 = setTimeout(updateLineNumbers, 200);

    const handleResize = () => {
      // Reset immédiat puis recalcul
      setLineCount(20); // Reset au minimum
      setTimeout(updateLineNumbers, 10);
      setTimeout(updateLineNumbers, 100);
      setTimeout(updateLineNumbers, 250);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener("resize", handleResize);
    };
  }, [isSmallScreen]);

  const getIndentPadding = (indent) => {
    const baseIndent = isSmallScreen ? 15 : 20;
    return baseIndent * indent;
  };

  const renderCodeContent = (content) => {
    if (!content) return <span>&nbsp;</span>;

    // Coloration syntaxique avec JSX
    if (content.includes("class ")) {
      return (
        <>
          <span style={{ color: "#64ffda" }}>class</span>{" "}
          <span style={{ color: "#ff6b6b" }}>PolitiqueConfidentialite</span>{" "}
          {"{"}
        </>
      );
    }
    if (content.includes("constructor")) {
      return (
        <>
          <span style={{ color: "#64ffda" }}>constructor</span>() {"{"}
        </>
      );
    }
    if (content.includes("const ")) {
      return (
        <>
          <span style={{ color: "#64ffda" }}>const</span>{" "}
          <span style={{ color: "#ff6b6b" }}>infoConfidentialite</span> = {"{"}
        </>
      );
    }
    if (content.includes("this.")) {
      const parts = content.split("=");
      return (
        <>
          <span style={{ color: "#64ffda" }}>{parts[0].trim()}</span>
          {parts[1] && (
            <>
              {" = "}
              <span style={{ color: "#ff6b6b" }}>{parts[1].trim()}</span>
            </>
          )}
        </>
      );
    }
    if (content.includes(":")) {
      const parts = content.split(":");
      return (
        <>
          <span style={{ color: "#64ffda" }}>{parts[0].trim()}</span>:
          <span style={{ color: "#ff6b6b" }}>{parts.slice(1).join(":")}</span>
        </>
      );
    }
    if (content.startsWith("//")) {
      return <span style={{ color: "#4a5568" }}>{content}</span>;
    }
    if (content.startsWith('"') || content.includes('"')) {
      return <span style={{ color: "#ff6b6b" }}>{content}</span>;
    }

    return <span>{content}</span>;
  };

  return (
    <div
      style={{
        fontFamily: "Consolas, monospace",
        fontSize: isSmallScreen ? "0.7rem" : "0.85rem",
        lineHeight: "1.6",
        color: "#8892b0",
        display: "flex",
      }}
    >
      {/* Numéros de ligne */}
      <div
        style={{
          width: isSmallScreen ? "20px" : "25px",
          marginRight: "15px",
          color: "#4a5568",
          textAlign: "right",
          flexShrink: 0,
        }}
      >
        {Array.from({ length: lineCount }, (_, i) => (
          <div key={i} style={{ lineHeight: "1.6" }}>
            {i + 1}
          </div>
        ))}
      </div>

      {/* Code */}
      <div
        ref={codeRef}
        style={{
          flex: 1,
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          lineHeight: "1.6",
        }}
      >
        {codeLines.map((line, index) => (
          <div
            key={index}
            style={{ paddingLeft: `${getIndentPadding(line.indent)}px` }}
          >
            {renderCodeContent(line.content)}
          </div>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const form = e.target;
    const formData = new FormData(form);
    
    // Ajouter le nom du formulaire pour Netlify
    formData.append("form-name", "contact");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus(""), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus(""), 4000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus(""), 4000);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0a0a23 0%, #1a1a3e 25%,rgb(42, 26, 94) 50%, #0a192f 100%)",
        color: "#8892b0",
        fontFamily: "Consolas, monospace",
        padding: window.innerWidth <= 768 ? "70px 0px " : "70px 50px ",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Background violet tech assombri avec animation */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
          radial-gradient(circle at 20% 80%, rgba(147, 51, 234, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(219, 39, 119, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(100, 255, 218, 0.04) 0%, transparent 50%)
        `,
          animation: "pulse-gradient 8s ease-in-out infinite",
          pointerEvents: "none",
          zIndex: -1,
        }}
      ></div>

      {/* Animations CSS */}
      <style>{`
        @keyframes pulse-gradient {
          0%, 100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05) rotate(1deg);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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
            isSmallScreen || scrolled
              ? "rgba(10, 25, 47, 0.95)"
              : "transparent",
          backdropFilter: isSmallScreen || scrolled ? "blur(10px)" : "none",
          zIndex: 1000,
        }}
      >
        <Link
          to="/"
          style={{
            color: "#64ffda",
            fontSize: "1.2rem",
            textDecoration: "none",
            fontWeight: "medium",
          }}
        >
          Joachim_Douillard_
        </Link>
        <nav>
          <Link
            to="/contact"
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
          </Link>
        </nav>
      </header>

      {/* Main Container */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isSmallScreen ? "1fr" : "300px 1fr 650px",
          width: "100%",
          maxWidth: isSmallScreen ? "100%" : "2000px",
          minHeight: isSmallScreen ? "auto" : "65vh",
          padding: isSmallScreen ? "0 5px" : "0",
        }}
      >
        {/* Sidebar - Pourquoi me contacter */}
        <div
          style={{
            background: "rgba(2, 12, 27, 0.9)",
            borderRadius: "8px",
            padding: isSmallScreen ? "20px 15px" : "30px 25px",
            border: "1px solid rgba(100, 255, 218, 0.1)",
            height: "fit-content",
            alignSelf: isSmallScreen ? "center" : "start",
            width: isSmallScreen ? "fit-content" : "auto",
            maxWidth: isSmallScreen ? "300px" : "none",
            margin: isSmallScreen ? "0 auto" : "0",
            marginTop: isSmallScreen ? "50px" : "0",
          }}
        >
          <h3
            style={{
              color: "#64ffda",
              fontSize: "1rem",
              marginBottom: "25px",
              fontWeight: "normal",
              fontFamily: "Consolas, monospace",
              textAlign: isSmallScreen ? "center" : "left",
            }}
          >
            ▼ pourquoi_me_contacter ?
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              alignItems: isSmallScreen ? "center" : "flex-start",
              textAlign: isSmallScreen ? "center" : "left",
            }}
          >
            {[
              { icon: "💼", text: "Collaboration sur projet" },
              { icon: "🚀", text: "Services développement web" },
              { icon: "💡", text: "Besoin d'un conseil" },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "8px 0",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.paddingLeft = "10px";
                  e.currentTarget.style.backgroundColor =
                    "rgba(100, 255, 218, 0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.paddingLeft = "0px";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <span style={{ fontSize: "1.1rem" }}>{item.icon}</span>
                <span
                  style={{
                    color: "#8892b0",
                    fontSize: "0.85rem",
                    lineHeight: "1.4",
                    fontFamily: "Consolas, monospace",
                  }}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Formulaire de contact */}
        <div
          style={{
            borderRadius: "8px",
            padding: isSmallScreen ? "25px 20px" : "40px 25px",
            alignSelf: isSmallScreen ? "start" : "center",
            marginTop: isSmallScreen ? "0" : "60px",
          }}
        >

          <form
            name="contact"
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <input type="hidden" name="form-name" value="contact" />

            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <label
                style={{
                  color: "#64ffda",
                  fontSize: "0.9rem",
                  fontFamily: "Consolas, monospace",
                  fontWeight: "normal",
                }}
              >
                _nom:
              </label>
              <input
                type="text"
                name="name"
                required
                style={{
                  width: "100%",
                  padding: "14px 18px",
                  background: "rgba(2, 12, 27, 0.8)",
                  border: "1px solid rgba(100, 255, 218, 0.2)",
                  borderRadius: "4px",
                  color: "#8892b0",
                  fontSize: "0.9rem",
                  fontFamily: "Consolas, monospace",
                  transition: "all 0.3s ease",
                  outline: "none",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#64ffda";
                  e.target.style.boxShadow =
                    "0 0 0 2px rgba(100, 255, 218, 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(100, 255, 218, 0.2)";
                  e.target.style.boxShadow = "none";
                }}
                placeholder="Jonathan Davis"
              />
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <label
                style={{
                  color: "#64ffda",
                  fontSize: "0.9rem",
                  fontFamily: "Consolas, monospace",
                  fontWeight: "normal",
                }}
              >
                _email:
              </label>
              <input
                type="email"
                name="email"
                required
                style={{
                  width: "100%",
                  padding: "14px 18px",
                  background: "rgba(2, 12, 27, 0.8)",
                  border: "1px solid rgba(100, 255, 218, 0.2)",
                  borderRadius: "4px",
                  color: "#8892b0",
                  fontSize: "0.9rem",
                  fontFamily: "Consolas, monospace",
                  transition: "all 0.3s ease",
                  outline: "none",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#64ffda";
                  e.target.style.boxShadow =
                    "0 0 0 2px rgba(100, 255, 218, 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(100, 255, 218, 0.2)";
                  e.target.style.boxShadow = "none";
                }}
                placeholder="jonathan-davis@email.com"
              />
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <label
                style={{
                  color: "#64ffda",
                  fontSize: "0.9rem",
                  fontFamily: "Consolas, monospace",
                  fontWeight: "normal",
                }}
              >
                _objet:
              </label>
              <input
                type="text"
                name="subject"
                required
                style={{
                  width: "100%",
                  padding: "14px 18px",
                  background: "rgba(2, 12, 27, 0.8)",
                  border: "1px solid rgba(100, 255, 218, 0.2)",
                  borderRadius: "4px",
                  color: "#8892b0",
                  fontSize: "0.9rem",
                  fontFamily: "Consolas, monospace",
                  transition: "all 0.3s ease",
                  outline: "none",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#64ffda";
                  e.target.style.boxShadow =
                    "0 0 0 2px rgba(100, 255, 218, 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(100, 255, 218, 0.2)";
                  e.target.style.boxShadow = "none";
                }}
                placeholder="Demande de projet / Collaboration / Question..."
              />
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <label
                style={{
                  color: "#64ffda",
                  fontSize: "0.9rem",
                  fontFamily: "Consolas, monospace",
                  fontWeight: "normal",
                }}
              >
                _message:
              </label>
              <textarea
                name="message"
                required
                rows="8"
                style={{
                  width: "100%",
                  padding: "14px 18px",
                  background: "rgba(2, 12, 27, 0.8)",
                  border: "1px solid rgba(100, 255, 218, 0.2)",
                  borderRadius: "4px",
                  color: "#8892b0",
                  fontSize: "0.9rem",
                  fontFamily: "Consolas, monospace",
                  transition: "all 0.3s ease",
                  outline: "none",
                  resize: "vertical",
                  minHeight: "120px",
                  maxHeight: "300px",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#64ffda";
                  e.target.style.boxShadow =
                    "0 0 0 2px rgba(100, 255, 218, 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(100, 255, 218, 0.2)";
                  e.target.style.boxShadow = "none";
                }}
                placeholder="Hey! Écrivez votre message ici..."
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                alignItems: "center",
              }}
            >
              <button
                type="submit"
                style={{
                  padding: "12px 30px",
                  background: "transparent",
                  color: "#64ffda",
                  border: "1px solid #64ffda",
                  borderRadius: "4px",
                  fontSize: "0.9rem",
                  fontFamily: "Consolas, monospace",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  fontWeight: "normal",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#0a192f";
                  e.target.style.backgroundColor = "#64ffda";
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow =
                    "0 4px 15px rgba(100, 255, 218, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#64ffda";
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }}
              >
                envoyer-message
              </button>

              {/* Notification sous le bouton */}
              {status && (
                <div
                  style={{
                    marginTop: "15px",
                    padding: "10px 15px",
                    borderRadius: "6px",
                    backgroundColor: status === "success"
                      ? "rgba(76, 175, 80, 0.1)"
                      : "rgba(244, 67, 54, 0.1)",
                    border: status === "success"
                      ? "1px solid rgba(76, 175, 80, 0.3)"
                      : "1px solid rgba(244, 67, 54, 0.3)",
                    color: status === "success" ? "#4CAF50" : "#F44336",
                    fontSize: "0.85rem",
                    fontFamily: "Consolas, monospace",
                    textAlign: "center",
                    animation: "fadeInUp 0.4s ease-out",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px"
                  }}
                >
                  <span style={{ fontSize: "1rem" }}>
                    {status === "success" ? "✅" : "❌"}
                  </span>
                  <span>
                    {status === "success"
                      ? "Message envoyé avec succès !"
                      : "Erreur lors de l'envoi du message."}
                  </span>
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Code Preview - Politique de confidentialité */}
        <div
          style={{
            background: "rgba(2, 12, 27, 0.9)",
            borderRadius: "8px",
            padding: isSmallScreen ? "20px 15px" : "30px 25px",
            border: "1px solid rgba(100, 255, 218, 0.1)",
            height: "fit-content",
            width: isSmallScreen ? "fit-content" : "auto",
            minWidth: isSmallScreen ? "auto" : "650px",
            maxWidth: isSmallScreen ? "90vw" : "none",
            alignSelf: isSmallScreen ? "center" : "start",
            margin: isSmallScreen ? "0 auto" : "0",
            justifySelf: isSmallScreen ? "center" : "auto",
            marginBottom: isSmallScreen ? "50px" : "0",
          }}
        >
          <DynamicCodePreview isSmallScreen={isSmallScreen} />
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          padding: "20px 50px",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          zIndex: 1000,
          backgroundColor:
            isSmallScreen || scrolled
              ? "rgba(10, 25, 47, 0.95)"
              : "transparent",
          backdropFilter: isSmallScreen || scrolled ? "blur(10px)" : "none",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            gap: "20px",
          }}
        >
          <span
            style={{
              fontSize: "0.8rem",
              marginRight: "20px",
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

export default Contact;
