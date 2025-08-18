import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Projects() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1000 && window.innerHeight <= 1200);
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

  const projects = [
    {
      id: 1,
      title: "Projet Symfony",
      description:
        "Symfony est un gestionnaire d'événements musicaux creé à l'aide du Framework Symfony (php)",
      technologies: ["Symfony", "Composer", "PHP", "Twig", "SQLite"],
      image: "/assets/images/projects/project1/VignetteP1.webp",
      github: "https://github.com/JoaDouillard/SymfonyProject.git",
      demo: "#",
      featured: true,
    },
    {
      id: 2,
      title: "QuadTree",
      description:
        "Découvrez comment j'ai implémenté une structure de données QuadTree en C++ qui permet d'optimiser certaine de vos applications !",
      technologies: ["C++", "Visual Studio", "QT"],
      image: "/assets/images/projects/project2/DetailsP2.svg",
      github: "https://github.com/JoaDouillard",
      demo: "#",
      featured: true,
    },
    {
      id: 3,
      title: "The Verdant Sentinel",
      description:
        "The Verdant Sentinel est un jeu d'action-aventure en low poly.",
      technologies: ["Unity", "C#", "Blender", "3DS Max", "Jira"],
      image: "/assets/images/projects/project3/VignetteP3.webp",
      github:
        "https://drive.google.com/file/d/1oqaX_V7OgIHJ3jqKby8K9ECvfV17MzMz/view?usp=sharing",
      demo: "#",
      featured: true,
    },
    {
      id: 4,
      title: "Event Manager Client",
      description:
        "Interface React dynamique pour gérer artistes et événements - Filtrage, tri et navigation intuitive avec une architecture moderne communicant avec une API Symfony.",
      technologies: ["React", "Vite.js", "Fetch API"],
      image: "/assets/images/projects/project4/VignetteP4.webp",
      github: "https://github.com/GUIGUEAxel/React-SymfonyProject",
      demo: "#",
      featured: true,
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(15deg, #1a2332 0%,rgb(26, 42, 65) 25%,rgb(37, 55, 94) 50%,rgb(20, 45, 83) 100%)",
        color: "#8892b0",
        fontFamily: "Consolas, monospace",
        padding: "0",
        overflow: isSmallScreen ? "auto" : "hidden",
        position: "relative",
      }}
    >
      {/* Background Cosmos bleu marine très foncé */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
          radial-gradient(ellipse at 25% 85%, rgba(8, 16, 35, 0.006) 0%, transparent 50%),
          radial-gradient(ellipse at 75% 15%, rgba(82, 53, 147, 0.01) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(12, 20, 45, 0.004) 0%, transparent 60%),
          radial-gradient(circle at 15% 25%, rgba(40, 35, 110, 0) 0%, transparent 40%),
          linear-gradient(20deg, rgba(34, 197, 94, 0.002) 0%, transparent 30%),
          radial-gradient(ellipse at 90% 70%, rgba(90, 55, 123, 0) 0%, transparent 45%)
        `,
          animation: "cosmos-shine 18s ease-in-out infinite",
          pointerEvents: "none",
          zIndex: -1,
        }}
      ></div>

      {/* Header */}
      <header
        style={{
          position: isSmallScreen ? "relative" : "fixed",
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

      {/* Main Content */}
      <main
        style={{
          height: isSmallScreen ? "auto" : "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: isSmallScreen ? "20px 20px" : "70px 50px 0",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Page Title */}
        <div
          style={{
            textAlign: "center",
            marginBottom: isSmallScreen ? "25px" : "35px",
          }}
        >
          <h1
            style={{
              fontSize: window.innerWidth <= 768 ? "1.8rem" : "2.5rem",
              color: "#ccd6f6",
              margin: "0 0 15px 0",
              fontWeight: "600",
            }}
          >
            Mes Projets
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "#8892b0",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.5",
            }}
          >
            Découvrez mes réalisations techniques et créatives
          </p>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              window.innerWidth <= 768
                ? "1fr"
                : window.innerWidth <= 1024
                ? "repeat(2, 1fr)"
                : "repeat(2, 1fr)",
            gap: window.innerWidth <= 768 ? "30px" : "40px",
            width: "100%",
            maxWidth: "1000px",
          }}
        >
          {projects.map((project) => (
            <Link
              to={`/project/${project.id}`}
              key={project.id}
              style={{
                display: "block",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(23, 42, 69, 0.8)",
                  border: "1px solid rgba(100, 255, 218, 0.1)",
                  borderRadius: "8px",
                  padding: "0",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  height: "350px",
                  display: "flex",
                  flexDirection: "column",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.borderColor =
                    "rgba(100, 255, 218, 0.3)";
                  e.currentTarget.style.backgroundColor = "rgba(23, 42, 69, 1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor =
                    "rgba(100, 255, 218, 0.1)";
                  e.currentTarget.style.backgroundColor =
                    "rgba(23, 42, 69, 0.8)";
                }}
              >
                {/* Project Image */}
                <div
                  style={{
                    width: "100%",
                    height: "160px",
                    backgroundImage: `url('${project.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "8px 8px 0 0",
                    marginBottom: "20px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* GitHub Link Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      top: "15px",
                      right: "15px",
                    }}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: "35px",
                        height: "35px",
                        backgroundColor: "rgba(10, 25, 47, 0.8)",
                        borderRadius: "4px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#8892b0",
                        textDecoration: "none",
                        fontSize: "1.1rem",
                        transition: "all 0.3s ease",
                        backdropFilter: "blur(10px)",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = "#64ffda";
                        e.target.style.backgroundColor =
                          "rgba(100, 255, 218, 0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "#8892b0";
                        e.target.style.backgroundColor =
                          "rgba(10, 25, 47, 0.8)";
                      }}
                    >
                      🔗
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div
                  style={{
                    padding: "0 20px 20px 20px",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: "1.2rem",
                        color: "#ccd6f6",
                        marginBottom: "10px",
                        fontWeight: "600",
                      }}
                    >
                      {project.title}
                    </h3>

                    <p
                      style={{
                        color: "#8892b0",
                        lineHeight: "1.4",
                        marginBottom: "10px",
                        fontSize: "0.9rem",
                      }}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "10px",
                    }}
                  >
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        style={{
                          fontSize: "0.8rem",
                          color: "#64ffda",
                          backgroundColor: "rgba(100, 255, 218, 0.1)",
                          padding: "4px 8px",
                          borderRadius: "4px",
                          border: "1px solid rgba(100, 255, 218, 0.2)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Back to Home Button */}
        <div
          style={{
            marginTop: isSmallScreen ? "30px" : "40px",
            marginBottom: isSmallScreen ? "20px" : "0",
            textAlign: "center",
          }}
        >
          <Link
            to="/"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              border: "1px solid #64ffda",
              color: "#64ffda",
              textDecoration: "none",
              borderRadius: "4px",
              transition: "all 0.3s ease",
              fontSize: "0.9rem",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "rgba(100, 255, 218, 0.1)";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.transform = "translateY(0)";
            }}
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          width: "100%",
          position: isSmallScreen ? "relative" : "fixed",
          bottom: 0,
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

export default Projects;
