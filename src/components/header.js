import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"

window.addEventListener("scroll", event => {
  const navLinks = document.getElementsByClassName("nav-link")
  const home = document.getElementById("home")
  const header = document.querySelector("header")
  for (const link of navLinks) {
    link.classList.toggle(
      "opaque",
      (document.documentElement.scrollTop >=
        home.offsetHeight - header.offsetHeight / 2 &&
        document.documentElement.scrollTop <=
          home.offsetHeight * 2 - header.offsetHeight / 2) ||
        document.documentElement.scrollTop >=
          home.offsetHeight * 3 - header.offsetHeight / 2
    )
  }
})

const Header = ({ siteTitle }) => (
  <header
    style={{
      position: "fixed",
      width: "100%",
      padding: `1.45rem 1.0875rem`,
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <Link to="/">
      <Image />
    </Link>
    <nav
      style={{
        alignSelf: "center",
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
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
