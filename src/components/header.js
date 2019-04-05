import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "./image"

library.add(faBars)

typeof window != "undefined" &&
  window.addEventListener("scroll", event => {
    const navLinks = document.getElementsByClassName("nav-link")
    const home = document.getElementById("home")
    const header = document.querySelector("header")
    const force =
      (document.documentElement.scrollTop >=
        home.offsetHeight - header.offsetHeight / 2 &&
        document.documentElement.scrollTop <=
          home.offsetHeight * 2 - header.offsetHeight / 2) ||
      document.documentElement.scrollTop >=
        home.offsetHeight * 3 - header.offsetHeight / 2
    document.getElementById("menu-icon").classList.toggle("opaque", force)
    for (const link of navLinks) {
      link.classList.toggle("opaque", force)
    }
  })

const Header = ({ siteTitle }) => (
  <header
    id="topnav"
    style={{
      position: "fixed",
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row-reverse",
      flexWrap: "wrap",
    }}
  >
    <nav
      className="navbar"
      style={{
        alignSelf: "center",
        paddingRight: "1.0875rem",
      }}
    >
      <Link to="/#moderators" className="nav-link">
        Moderadores
      </Link>
      <Link to="/#speakers" className="nav-link">
        Venha Palestrar
      </Link>
      <Link to="/#hosts" className="nav-link">
        Seja um anfitrião
      </Link>
      <a
        href="http://bit.ly/FEMUGCodConduta"
        target="_blank"
        className="nav-link"
        rel="noopener noreferrer"
      >
        Código de Conduta
      </a>
    </nav>
    <Link to="/" style={{ padding: `1.45rem 1.0875rem` }}>
      <Image />
    </Link>
    <button
      style={{ backgroundColor: "transparent", border: "none" }}
      className="icon"
      onClick={event => {
        document.getElementById("topnav").classList.toggle("responsive")
      }}
    >
      <FontAwesomeIcon icon="bars" id="menu-icon" color="white" />
    </button>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
