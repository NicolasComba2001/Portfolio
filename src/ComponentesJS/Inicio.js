import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../EstilosComponentes/EstiloInicio/EstiloInicio.scss';

export default function Inicio() {
  return (
    <section className="inicio" id="inicio">
      <figure className="infoInicio">
        <img className="infoInicio__img" src="InicioIMG/frontend-dev.jpg" alt="Ilustracion de desarrollo frontend, notebook, codigo y libreta de notas" />
        <div className="infoIniciotexto">
          <em className="infoIniciotexto__sub" data-aos="fade-down" data-aos-duration="800" data-aos-delay="50">Hola! Soy NICOLAS,</em>
          <h1 className="infoIniciotexto__titulo" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">FRONT END DEVELOPER</h1>
          <p className="infoIniciotexto__parrafo" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="150">
            Encantado por el desarrollo web Front-End y todos los desafios que trae consigo
            esta increible carrera.
          </p>
          <a className="infoIniciotexto__btn" href="#conoceMas" data-aos="fade-up">CONOCE MAS!</a>
        </div>
      </figure>
        <span className="sigSeccion"><FontAwesomeIcon icon={["fa","angle-down"]}></FontAwesomeIcon></span>
    </section>
  );
}
