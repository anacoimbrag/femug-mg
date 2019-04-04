import React from "react"
import Button from "./button"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome"

library.add(faHome)

const Hosts = () => (
  <section
    id="hosts"
    className="container"
    style={{
      justifyContent: "space-evenly",
    }}
  >
    <h2
      style={{
        textTransform: "uppercase",
        marginLeft: "3rem",
        marginTop: "8rem",
      }}
    >
      Seja um anfitrião
    </h2>
    <div
      className="texts"
      style={{
        textAlign: "center",
        margin: "auto",
        width: "40%",
      }}
    >
      <FontAwesomeIcon icon="home" size="4x" color="#54BFA1" />
      <h3 style={{ fontWeight: 300, marginTop: "2rem" }}>
        Estamos sempre precisando de locais para nos receber e queremos estar
        presente no maior número de empresas possíveis para aumentar sempre o
        alcance da nossa comunidade!
      </h3>
    </div>
    <div
      className="nextEvent"
      style={{
        color: "white",
        textAlign: "center",
        margin: "5% auto",
      }}
    >
      <Button
        color="green"
        text="Quero Receber o FEMUG"
        action={() => console.log("perfomed action")}
      />
    </div>
  </section>
)

export default Hosts
