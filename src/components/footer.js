import React from "react"

const Footer = () => (
  <footer
    style={{
      textAlign: "center",
      backgroundColor: "#1E1D1E",
      color: "white",
      padding: "2rem",
      fontSize: "0.65",
    }}
  >
    <nav style={{ marginBottom: "1.5rem" }}>
      <a
        href="http://bit.ly/FEMUGCodConduta"
        target="_blank"
        className="footer-link"
        rel="noopener noreferrer"
      >
        Código de Conduta
      </a>
      <a
        href="https://github.com/femug/femug"
        target="_blank"
        className="footer-link"
        rel="noopener noreferrer"
      >
        Movimento FEMUG
      </a>
      <a
        href="https://www.meetup.com/FEMUG-MG"
        target="_blank"
        className="footer-link"
        rel="noopener noreferrer"
      >
        Eventos FEMUG-MG
      </a>
    </nav>
    FEMUG-MG © {new Date().getFullYear()}, Built with
    {` `}
    <a
      style={{ color: "white" }}
      target="_blank"
      href="https://www.gatsbyjs.org"
      rel="noopener noreferrer"
    >
      Gatsby
    </a>
  </footer>
)

export default Footer
