import React, { useState, useEffect } from "react";

// Composant TypingText avec effet machine à écrire
function TypingText({ texts, prefix = "> " }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[currentTextIndex];

      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, prev.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentText((prev) => fullText.slice(0, prev.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, texts, typingSpeed]);

  return (
    <p
      style={{
        color: "#8892b0",
        whiteSpace: "normal",
        margin: "0 auto",
        fontFamily: "Consolas, monospace",
        lineHeight: "1.4",
        textAlign: "center",
        wordBreak: "break-word",
        hyphens: "auto",
        maxWidth: "100%",
      }}
    >
      {prefix}
      {currentText}
      <span
        style={{
          borderRight: "2px solid #64ffda",
          marginLeft: "2px",
          animation: "blink-caret 1.2s ease-in-out infinite",
        }}
      ></span>
    </p>
  );
}

// Composant MainProjectBanner avec animation hover
function MainProjectBanner({ onHover }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHover(false);
  };

  return (
    <article
      style={{
        height: isHovered ? "50%" : "30%",
        backgroundImage: 'url("/assets/images/projects/VignetteallP.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "8px",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        transition: "height 0.6s ease",
        flexShrink: 0,
      }}
      onClick={() => (window.location.href = "/projects")}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: isHovered
            ? "rgba(2, 12, 27, 0.2)"
            : "rgba(2, 12, 27, 0.3)",
          zIndex: 1,
          transition: "all 0.6s ease",
        }}
      ></div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <h3
          style={{
            color: "#64ffda",
            fontSize: "1.5em",
            marginBottom: "10px",
            fontWeight: "medium",
            position: "relative",
          }}
        >
          Aller voir tous mes projets !!
        </h3>
        <p
          style={{
            color: "#64ffda",
            maxWidth: "80%",
            margin: "15px 0",
          }}
        >
          Ici vous retrouverez une sélection de plusieurs de mes projets
          professionnels et personnels !
        </p>
      </div>
    </article>
  );
}

// Composant ProjectCard avec animations
function ProjectCard({
  title,
  description,
  link,
  linkText,
  backgroundImage,
  backgroundPosition = "center",
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      style={{
        flex: window.innerWidth <= 768 ? "1 0 auto" : isHovered ? 2.5 : 1,
        backgroundImage: backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: backgroundPosition,
        borderRadius: "8px",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        transition: "flex 0.6s ease",
        minHeight: window.innerWidth <= 768 ? "200px" : "auto",
      }}
      onClick={() => (window.location.href = link)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(2, 12, 27, 0.3)",
          zIndex: 1,
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          padding: window.innerWidth <= 768 ? "15px" : "20px",
          zIndex: 2,
          transform:
            window.innerWidth <= 768
              ? "translateY(0)"
              : isHovered
              ? "translateY(0)"
              : "translateY(100px)",
          transition: "transform 0.6s ease",
        }}
      >
        <h3
          style={{
            color: "#64ffda",
            fontSize: "1.5em",
            marginBottom: "10px",
            fontWeight: "medium",
            position: "relative",
          }}
        >
          {title}
          <span
            style={{
              position: "absolute",
              bottom: "-5px",
              left: 0,
              width: isHovered ? "50px" : "0",
              height: "2px",
              backgroundColor: "#64ffda",
              transition: "width 0.6s ease",
            }}
          ></span>
        </h3>
        <p
          style={{
            opacity: window.innerWidth <= 768 ? 1 : isHovered ? 1 : 0,
            color: "#64ffda",
            transform:
              window.innerWidth <= 768
                ? "translateY(0)"
                : isHovered
                ? "translateY(0)"
                : "translateY(20px)",
            transition: "all 0.3s ease 0.2s",
            fontSize: window.innerWidth <= 768 ? "0.8rem" : "0.9rem",
            marginBottom: "15px",
            lineHeight: "1.4",
          }}
        >
          {description}
        </p>
        <a
          href={link}
          style={{
            display: "inline-block",
            marginTop: "15px",
            padding: window.innerWidth <= 768 ? "6px 12px" : "8px 15px",
            border: "1px solid #64ffda",
            borderRadius: "4px",
            color: "#64ffda",
            textDecoration: "none",
            opacity: window.innerWidth <= 768 ? 1 : isHovered ? 1 : 0,
            transform:
              window.innerWidth <= 768
                ? "translateY(0)"
                : isHovered
                ? "translateY(0)"
                : "translateY(20px)",
            transition: "all 0.3s ease 0.3s",
            fontSize: window.innerWidth <= 768 ? "0.8rem" : "0.9rem",
            backgroundColor: "transparent",
          }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = "rgba(100, 255, 218, 0.1)")
          }
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          {linkText}
        </a>
      </div>
    </article>
  );
}

function Home() {
  const [projectBannerHovered, setProjectBannerHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scaleRatio, setScaleRatio] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const calculateScale = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      // Résolution de référence (votre écran QHD 27")
      const referenceWidth = 2560;
      const referenceHeight = 1440;

      // Calculer le ratio de mise à l'échelle
      if (
        screenWidth <= 1920 &&
        screenWidth >= 1500 &&
        screenHeight <= 1080 &&
        screenHeight >= 900
      ) {
        // Pour 1080p et moins, réduire de 15%
        setScaleRatio(0.85);
      } else if (screenWidth <= 2560 && screenHeight <= 1440) {
        // Pour QHD, garder taille normale
        setScaleRatio(1);
      } else {
        // Pour plus grand que QHD, agrandir légèrement
        setScaleRatio(1.1);
      }
    };

    calculateScale();
    window.addEventListener("resize", calculateScale);
    return () => window.removeEventListener("resize", calculateScale);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          minHeight: "100vh",
          height:
            window.innerWidth <= 1000 && window.innerHeight <= 1200
              ? "auto"
              : "100vh",
          background:
            "linear-gradient(135deg, #0a1a2d 0%,rgb(42, 62, 112) 25%,rgb(19, 48, 72) 50%, #0a192f 100%)",
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
        {/* Background bleu profond assombri avec animation */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
          radial-gradient(circle at 30% 70%, rgba(49, 151, 195, 0.06) 0%, transparent 50%),
          radial-gradient(circle at 70% 30%, rgba(139, 92, 246, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(100, 255, 218, 0.03) 0%, transparent 60%)
        `,
            animation: "wave-gradient 12s ease-in-out infinite",
            pointerEvents: "none",
            zIndex: -1,
          }}
        ></div>

        {/* Animation CSS pour le background bleu */}
        <style>{`
        @keyframes wave-gradient {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(0.5deg);
          }
          50% {
            transform: translateY(5px) rotate(-0.3deg);
          }
          75% {
            transform: translateY(-5px) rotate(0.2deg);
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
            minHeight:
              window.innerWidth <= 1000 && window.innerHeight <= 1200
                ? "calc(100vh - 130px)"
                : "100vh",
            height:
              window.innerWidth <= 1000 && window.innerHeight <= 1200
                ? "auto"
                : "100vh",
            flex: 1,
            padding:
              window.innerWidth <= 768
                ? "70px 0 60px 0"
                : window.innerWidth <= 1000 && window.innerHeight <= 1200
                ? "70px 0 60px 0"
                : "0px",
            display: "flex",
            alignItems:
              window.innerWidth <= 1000 && window.innerHeight <= 1200
                ? "flex-start"
                : "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 1,
            transform: `scale(${scaleRatio})`,
            transformOrigin: "center center",
          }}
        >
          <div
            style={{
              width:
                window.innerWidth <= 768
                  ? "95%"
                  : window.innerWidth <= 1000 && window.innerHeight <= 1200
                  ? "90%"
                  : "85%",
              height:
                window.innerWidth <= 1000 && window.innerHeight <= 1200
                  ? "auto"
                  : "calc(90vh - 70px - 60px)",
              padding:
                window.innerWidth <= 768
                  ? "20px 10px"
                  : window.innerWidth <= 1000 && window.innerHeight <= 1200
                  ? "20px 15px"
                  : "20px",
              minHeight: window.innerWidth <= 1200 ? "auto" : "auto",
            }}
          >
            {/* Grid Container */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  window.innerWidth <= 768
                    ? "1fr"
                    : window.innerWidth <= 1000 && window.innerHeight <= 1200
                    ? "1fr 1fr"
                    : "minmax(0, 1.2fr) minmax(0, 1fr) minmax(0, 0.5fr)",
                gridTemplateRows:
                  window.innerWidth <= 768
                    ? "auto auto auto auto"
                    : window.innerWidth <= 1000 && window.innerHeight <= 1200
                    ? "auto auto auto"
                    : "1fr 2fr",
                gap:
                  window.innerWidth <= 768
                    ? "20px"
                    : window.innerWidth <= 1000 && window.innerHeight <= 1200
                    ? "25px"
                    : "15px",
                width: "100%",
                height:
                  window.innerWidth <= 1000 && window.innerHeight <= 1200
                    ? "auto"
                    : "100%",
                paddingBottom:
                  window.innerWidth <= 1000 && window.innerHeight <= 1200
                    ? "20px"
                    : "0",
              }}
            >
              {/* Section Introduction - Takes 2 rows, 1 column */}
              <section
                style={{
                  gridRow:
                    window.innerWidth <= 768
                      ? "1"
                      : window.innerWidth <= 1000 && window.innerHeight <= 1200
                      ? "1"
                      : "1 / 3",
                  gridColumn:
                    window.innerWidth <= 768
                      ? "1"
                      : window.innerWidth <= 1000 && window.innerHeight <= 1200
                      ? "1 / 3"
                      : "1",
                  background: "rgba(2, 12, 27, 0.9)",
                  borderRadius: "12px",
                  padding: window.innerWidth <= 768 ? "20px" : "30px",
                  border: "1px solid rgba(100, 255, 218, 0.1)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  marginRight:
                    window.innerWidth <= 1000 && window.innerHeight <= 1200
                      ? "0"
                      : "10px",
                  position: "relative",
                  overflow: "hidden",
                  minHeight:
                    window.innerWidth <= 768
                      ? "300px"
                      : window.innerWidth <= 1000 && window.innerHeight <= 1200
                      ? "450px"
                      : "auto",
                }}
                onClick={() => (window.location.href = "/about")}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(100, 255, 218, 0.3)";
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(100, 255, 218, 0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: "1rem",
                        marginBottom: "15px",
                        color: "#8892b0",
                      }}
                    >
                      Hi all. I am
                    </p>

                    <h1
                      style={{
                        color: "#fff",
                        fontSize: "2.5rem",
                        lineHeight: "1.2",
                        marginBottom: "30px",
                        fontWeight: "normal",
                      }}
                    >
                      Joachim
                      <br />
                      Douillard
                    </h1>

                    <div style={{ marginBottom: "30px" }}>
                      <p
                        style={{
                          fontSize: "1.1rem",
                          margin: "8px 0",
                          color: "#8892b0",
                        }}
                      >
                        &gt;{" "}
                        <span style={{ color: "#64ffda" }}>IT technician</span>
                      </p>
                      <p
                        style={{
                          fontSize: "1.1rem",
                          margin: "8px 0",
                          color: "#8892b0",
                        }}
                      >
                        &gt;{" "}
                        <span style={{ color: "#818cf8" }}>Web developer</span>
                      </p>
                      <p
                        style={{
                          fontSize: "1.1rem",
                          margin: "8px 0",
                          color: "#8892b0",
                        }}
                      >
                        &gt;{" "}
                        <span style={{ color: "#ff6b6b" }}>
                          Software developer
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Status Card */}
                  <div
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(22, 28, 41, 0.95) 0%, rgba(18, 24, 38, 0.98) 100%)",
                      borderRadius: "12px",
                      padding: "20px",
                      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      margin: "15px 0",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "16px",
                      }}
                    >
                      <div
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          marginRight: "10px",
                          backgroundColor: "#4ade80",
                          boxShadow: "0 0 10px rgba(74, 222, 128, 0.5)",
                          animation: "pulse 2s infinite",
                        }}
                      ></div>
                      <span
                        style={{
                          fontWeight: "500",
                          color: "white",
                          fontSize: "1.1em",
                        }}
                      >
                        Currently Available
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "12px",
                        marginBottom: "20px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          color: "#94a3b8",
                        }}
                      >
                        <svg
                          style={{
                            color: "#64ffda",
                            marginRight: "10px",
                            width: "16px",
                            height: "16px",
                          }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span>Quick response time: &lt; 24h</span>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          color: "#94a3b8",
                        }}
                      >
                        <svg
                          style={{
                            color: "#64ffda",
                            marginRight: "10px",
                            width: "16px",
                            height: "16px",
                          }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <span>Open to freelance projects</span>
                      </div>
                    </div>

                    <a
                      href="/contact"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        width: "100%",
                        backgroundColor: "rgba(100, 255, 218, 0.1)",
                        border: "1px solid rgba(100, 255, 218, 0.3)",
                        padding: "10px",
                        borderRadius: "8px",
                        color: "#64ffda",
                        fontWeight: "500",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                        marginTop: "5px",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor =
                          "rgba(100, 255, 218, 0.2)";
                        e.target.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor =
                          "rgba(100, 255, 218, 0.1)";
                        e.target.style.transform = "translateY(0)";
                      }}
                    >
                      <span>Let's Connect</span>
                      <svg
                        style={{ width: "16px", height: "16px" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7 17l9.2-9.2M17 17V7H7"></path>
                      </svg>
                    </a>
                  </div>

                  {/* GitHub Info */}
                  <div style={{ marginTop: "40px" }}>
                    <p
                      style={{
                        color: "#8892b0",
                        fontSize:
                          window.innerWidth <= 480 ? "0.8rem" : "0.9rem",
                        margin: "5px 10px",
                        wordBreak:
                          window.innerWidth <= 480 ? "break-all" : "normal",
                        lineHeight: window.innerWidth <= 480 ? "1.4" : "normal",
                      }}
                    >
                      <span style={{ color: "#64ffda" }}>const</span> githubLink
                      = "
                      <a
                        href="https://github.com/JoaDouillard?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "#ff6b6b",
                          textDecoration: "none",
                          wordBreak:
                            window.innerWidth <= 480 ? "break-all" : "normal",
                        }}
                      >
                        {window.innerWidth <= 480
                          ? "github.com/JoaDouillard"
                          : "https://github.com/JoaDouillard?tab=repositories"}
                      </a>
                      "
                    </p>
                    <p
                      style={{
                        color: "#4a5568",
                        fontSize:
                          window.innerWidth <= 480 ? "0.8rem" : "0.9rem",
                        margin: "5px 10px",
                        lineHeight: window.innerWidth <= 480 ? "1.3" : "normal",
                      }}
                    >
                      // discover my open-source contributions and personal
                      projects
                    </p>
                    <p
                      style={{
                        color: "#4a5568",
                        fontSize:
                          window.innerWidth <= 480 ? "0.8rem" : "0.9rem",
                        margin: "5px 10px",
                        lineHeight: window.innerWidth <= 480 ? "1.3" : "normal",
                      }}
                    >
                      // click the GitHub link{" "}
                      {window.innerWidth <= 480 ? "above" : "below"} to explore
                      my repositories
                    </p>
                  </div>
                </div>
              </section>

              {/* Skills Section */}
              <section
                style={{
                  gridRow:
                    window.innerWidth <= 768
                      ? "2"
                      : window.innerWidth <= 1000 && window.innerHeight <= 1200
                      ? "2"
                      : "1",
                  gridColumn:
                    window.innerWidth <= 768
                      ? "1"
                      : window.innerWidth <= 1000 && window.innerHeight <= 1200
                      ? "2"
                      : "2",
                  background: "rgba(2, 12, 27, 0.9)",
                  borderRadius: "12px",
                  padding: window.innerWidth <= 768 ? "20px" : "30px",
                  border: "1px solid rgba(100, 255, 218, 0.1)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  position: "relative",
                  minHeight:
                    window.innerWidth <= 768
                      ? "200px"
                      : window.innerWidth <= 1000 && window.innerHeight <= 1200
                      ? "350px"
                      : "auto",
                }}
                onClick={() => (window.location.href = "/skills")}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(100, 255, 218, 0.3)";
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(100, 255, 218, 0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <h2
                  style={{
                    color: "#fff",
                    fontSize: "1.8rem",
                    position: "absolute",
                    top: "30px",
                    left: "30px",
                    margin: 0,
                  }}
                >
                  My skills
                </h2>

                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                      marginTop: "30px",
                    }}
                  >
                    <TypingText
                      texts={[
                        "Click here to see my skills_",
                        "Découvrez mes compétences techniques_",
                        "Tech stack & expertise_",
                        "Languages • Frameworks • Tools_",
                      ]}
                    />
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section
                style={{
                  gridRow:
                    window.innerWidth <= 768
                      ? "3"
                      : window.innerWidth <= 1000 && window.innerHeight <= 1200
                      ? "2"
                      : "1",
                  gridColumn:
                    window.innerWidth <= 768
                      ? "1"
                      : window.innerWidth <= 1000 && window.innerHeight <= 1200
                      ? "1"
                      : "3",
                  background: "rgba(2, 12, 27, 0.9)",
                  borderRadius: "12px",
                  padding: window.innerWidth <= 768 ? "20px" : "30px",
                  border: "1px solid rgba(100, 255, 218, 0.1)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  position: "relative",
                  minHeight:
                    window.innerWidth <= 768
                      ? "200px"
                      : window.innerWidth <= 1000 && window.innerHeight <= 1200
                      ? "300px"
                      : "auto",
                }}
                onClick={() => (window.location.href = "/contact")}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(100, 255, 218, 0.3)";
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(100, 255, 218, 0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <h2
                  style={{
                    color: "#fff",
                    fontSize: window.innerWidth <= 768 ? "1.5rem" : "1.8rem",
                    position: "absolute",
                    top: window.innerWidth <= 768 ? "20px" : "30px",
                    left: window.innerWidth <= 768 ? "20px" : "30px",
                    margin: 0,
                  }}
                >
                  Contact
                </h2>

                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                      marginTop: window.innerWidth <= 768 ? "20px" : "30px",
                    }}
                  >
                    <TypingText
                      texts={[
                        "Send me a message_",
                        "Let's work together_",
                        "Discutons de vos projets_",
                        "Available for freelance_",
                        "Contactez-moi directement_",
                      ]}
                    />
                  </div>
                </div>
              </section>

              {/* Projects Section - Takes 1 row, 2 columns */}
              <section
                style={{
                  gridRow:
                    window.innerWidth <= 768
                      ? "4"
                      : window.innerWidth <= 1000 && window.innerHeight <= 1200
                      ? "3"
                      : "2",
                  gridColumn:
                    window.innerWidth <= 768
                      ? "1"
                      : window.innerWidth <= 1000 && window.innerHeight <= 1200
                      ? "1 / 3"
                      : "2 / 4",
                  background: "rgba(2, 12, 27, 0.9)",
                  borderRadius: "12px",
                  padding: window.innerWidth <= 768 ? "15px" : "20px",
                  border: "1px solid rgba(100, 255, 218, 0.1)",
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  gap: window.innerWidth <= 768 ? "15px" : "20px",
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                  minHeight:
                    window.innerWidth <= 768
                      ? "400px"
                      : window.innerWidth <= 1000 && window.innerHeight <= 1200
                      ? "600px"
                      : "auto",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(100, 255, 218, 0.3)";
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(100, 255, 218, 0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Main Project Banner */}
                <MainProjectBanner onHover={setProjectBannerHovered} />

                {/* Projects Grid */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: window.innerWidth <= 768 ? "column" : "row",
                    height:
                      window.innerWidth <= 768
                        ? "auto"
                        : projectBannerHovered
                        ? "50%"
                        : "70%",
                    gap: window.innerWidth <= 768 ? "15px" : "20px",
                    transition: "all 0.6s ease",
                    flexShrink: 1,
                    minHeight:
                      window.innerWidth <= 768
                        ? "300px"
                        : window.innerWidth <= 1000 &&
                          window.innerHeight <= 1200
                        ? "400px"
                        : "auto",
                  }}
                >
                  <ProjectCard
                    title="Projet Symfony"
                    description="Symfony est une plateforme permettant aux utilisateurs de consulter, gérer et s'inscrire à des événements musicaux."
                    link="/project/1"
                    linkText="Voir mon travail >"
                    backgroundImage="url('/assets/images/projects/project1/VignetteP1.webp')"
                    backgroundPosition="top"
                  />

                  <ProjectCard
                    title="QuadTree"
                    description="Structure de données spatiale en C++ pour optimiser les requêtes spatiales et la recherche de proximité."
                    link="/project/2"
                    linkText="Regardez le résultat >"
                    backgroundImage="url('/assets/images/projects/project2/DetailsP2.svg')"
                    backgroundPosition="center"
                  />
                </div>
              </section>
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
              justifyContent:
                window.innerWidth <= 768 ? "center" : "flex-start",
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
    </div>
  );
}

export default Home;
