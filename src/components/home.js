import React from "react"
import Button from "./button";

const Home = () => (
  <div className="container code orverlay">
    <div
      className="texts"
      style={{
        color: "white",
        textAlign: "center",
        margin: "auto",
        width: "50%",
      }}
    >
      <h4>Front End Meetup Group de Minas Gerais</h4>
      <p>
        Trata-se de um evento para pessoas interessadas em aprender, evoluir e
        dividir conhecimentos relacionados ao front-end e tecnologias
        periféricas relacionadas.
      </p>
    </div>
    <div className="nextEvent" style={{
        color: 'white',
        textAlign: 'center',
        margin: '5% auto'
    }}>
      <h6>Próximo evento</h6>
      <p>Meetup Abril - Edição especial XXX</p>
      <Button color='purple' text='Fazer inscrição' action={() => console.log('perfomed action')} />
    </div>
  </div>
)

export default Home
