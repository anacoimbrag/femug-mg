import React from "react"
import Button from "./button"
import SEO from "./seo"

const Speakers = () => (
  <section id="speakers" className="container speaker overlay">
    <div
      className="texts"
      style={{
        color: "white",
        textAlign: "center",
        margin: "auto",
        width: "40%",
      }}
    >
      <h1
        style={{
          textTransform: "uppercase",
          marginLeft: "3rem",
        }}
      >
        Venha palestrar
      </h1>

      <h3>
        Estamos sempre buscando pessoas para palestrar nos nossos encontros.
        Você tem algo interessante pra compartilhar com a gente?
      </h3>

      <p style={{ fontWeight: 300 }}>
        Assuntos mais comuns: Frameworks (Angular, React, Vue), JavaScript, UX,
        Programação funcional, e vários outros!
      </p>
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
        color="red"
        text="Quero Palestrar"
        action={() => console.log("perfomed action")}
      />
    </div>
  </section>
)

export default Speakers
