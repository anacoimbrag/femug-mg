import React from "react"
import Button from "./button"
import SEO from "./seo"

const Home = () => (
  <section id="home" className="container code overlay">
    <SEO title="Home" keywords={[`femug`, `minas gerais`, `front end`]} />
    <div
      className="texts"
      style={{
        color: "white",
        textAlign: "center",
        margin: "auto",
        width: "40%",
      }}
    >
      <h2>Front End Meetup Group de Minas Gerais</h2>
      <p>
        Trata-se de um evento para pessoas interessadas em aprender, evoluir e
        dividir conhecimentos relacionados ao front-end e tecnologias
        periféricas relacionadas.
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
      <h3>Próximo evento</h3>
      <p>Meetup Abril - Edição especial XXX</p>
      <Button
        color="purple"
        text="Fazer inscrição"
        action={() => console.log("perfomed action")}
      />
    </div>
  </section>
)

export default Home
