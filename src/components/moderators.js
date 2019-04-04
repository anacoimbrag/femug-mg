import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

library.add(faGithub, faLinkedin, faTwitter)

const Moderators = () => (
  <section
    id="moderators"
    className="container"
    style={
      {
        // justifyContent: "space-evenly",
      }
    }
  >
    <h2
      style={{
        textTransform: "uppercase",
        marginLeft: "3rem",
        marginTop: "8rem",
      }}
    >
      Moderadores
    </h2>

    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        marginTop: "4rem",
        marginBottom: "5%",
      }}
    >
      <Moderator
        name="Ana Coimbra"
        picture="https://pbs.twimg.com/profile_images/1102658491284639744/pL7ZiykJ_400x400.jpg"
        job="Dev Lead"
        company="Kobe"
        social={{
          github: "https://github.com/anacoimbrag",
          twitter: "https://twitter.com/anacoimbrag",
          linkedin: "https://www.linkedin.com/in/anacoimbrag/",
        }}
      />

      <Moderator
        name="Juan Villaso"
        picture="https://pbs.twimg.com/profile_images/1103946004070653952/m7NVOG04_400x400.png"
        job="Cargo"
        company="Empresa"
        social={{
          github: "https://github.com/anacoimbrag",
          twitter: "https://twitter.com/anacoimbrag",
          linkedin: "https://www.linkedin.com/in/anacoimbrag/",
        }}
      />

      <Moderator
        name="Juliana Helena"
        picture="https://pbs.twimg.com/profile_images/1094299828979421184/r_g_qZ7T_400x400.jpg"
        job="Cargo"
        company="Empresa"
        social={{
          github: "https://github.com/anacoimbrag",
          twitter: "https://twitter.com/anacoimbrag",
          linkedin: "https://www.linkedin.com/in/anacoimbrag/",
        }}
      />
    </div>
  </section>
)

const Moderator = ({ name, picture, company, job, social }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "33.3333%",
    }}
    className="card"
  >
    <img
      src={picture}
      style={{
        borderRadius: "50%",
        width: "8rem",
      }}
      alt={name}
    />
    <h4>{name}</h4>
    <p>
      {job} @ {company}
    </p>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "30%",
      }}
    >
      <a href={social.github}>
        <FontAwesomeIcon icon={["fab", "github"]} />
      </a>
      <FontAwesomeIcon icon={["fab", "twitter"]} />
      <FontAwesomeIcon icon={["fab", "linkedin"]} />
    </div>
  </div>
)

export default Moderators
