import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0a192f',
      color: '#8892b0',
      fontFamily: 'Consolas, monospace',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px'
    }}>
      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '70px',
        padding: '0 50px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        backgroundColor: 'rgba(10, 25, 47, 0.95)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000
      }}>
        <Link to="/" style={{
          color: '#64ffda',
          fontSize: '1.2rem',
          textDecoration: 'none',
          fontWeight: 'medium'
        }}>
          Joachim_Douillard_
        </Link>
        <nav>
          <Link to="/contact" style={{
            color: '#8892b0',
            textDecoration: 'none',
            fontSize: '1rem',
            transition: 'color 0.3s ease',
            padding: '5px 10px'
          }}
          onMouseEnter={(e) => e.target.style.color = '#64ffda'}
          onMouseLeave={(e) => e.target.style.color = '#8892b0'}
          >
            contact_me_
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '20px'
      }}>
        <div style={{
          marginBottom: '40px'
        }}>
          <h1 style={{
            fontSize: '8rem',
            color: '#64ffda',
            margin: '0',
            fontWeight: '600',
            lineHeight: '1'
          }}>
            404
          </h1>
        </div>

        <div style={{
          marginBottom: '40px'
        }}>
          <h2 style={{
            fontSize: '2rem',
            color: '#ccd6f6',
            margin: '0 0 20px 0',
            fontWeight: '400'
          }}>
            Page non trouvée
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#8892b0',
            maxWidth: '500px',
            lineHeight: '1.6',
            margin: '0'
          }}>
            La page que vous cherchez n'existe pas ou a été déplacée.
          </p>
        </div>

        <Link 
          to="/"
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            border: '1px solid #64ffda',
            color: '#64ffda',
            textDecoration: 'none',
            borderRadius: '4px',
            transition: 'all 0.3s ease',
            fontSize: '1rem',
            backgroundColor: 'transparent'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(100, 255, 218, 0.1)';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          ← Retour à l'accueil
        </Link>
      </main>

      {/* Footer */}
      <footer style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        padding: '20px 50px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        zIndex: 1000,
        backgroundColor: 'rgba(10, 25, 47, 0.95)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'flex-start',
          gap: '20px'
        }}>
          <span style={{
            fontSize: '0.8rem',
            marginRight: '20px'
          }}>
            find me in:
          </span>
          <a href="https://github.com/JoaDouillard?tab=repositories" target="_blank" rel="noopener noreferrer" style={{
            color: '#8892b0',
            textDecoration: 'none',
            fontSize: '0.9rem',
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = '#64ffda'}
          onMouseLeave={(e) => e.target.style.color = '#8892b0'}
          >
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/joachim-douillard" target="_blank" rel="noopener noreferrer" style={{
            color: '#8892b0',
            textDecoration: 'none',
            fontSize: '0.9rem',
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = '#64ffda'}
          onMouseLeave={(e) => e.target.style.color = '#8892b0'}
          >
            LinkedIn
          </a>
        </div>
      </footer>

      {/* Gradient Overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at top right, rgba(100, 255, 218, 0.1), transparent 50%)',
        pointerEvents: 'none',
        zIndex: -1
      }}></div>
    </div>
  );
}

export default NotFound;