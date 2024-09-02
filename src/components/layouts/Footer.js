import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer({ light }) {
  return (
    <footer className={light ? "footer light" : "footer"}>
      <div className="container">
        <div className="social-icons light" style={{ marginTop: '10px' }}>
          <a href="https://www.linkedin.com/in/arafrahman" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: 'black', margin: '0 10px' }} />
          </a>
          <a href="https://github.com/araf-rahman" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" style={{color: 'black', margin: '0 10px' }} />
          </a>
        </div>
        <span className="copyright">
          &copy; {new Date().getFullYear()} Araf Rahman.
        </span>
      </div>
    </footer>
  );
}

export default Footer;