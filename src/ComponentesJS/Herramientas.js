import React from "react";
import "../EstilosComponentes/EstiloHerramientas/EstilosHerramientas.scss";

export default function Herramientas() {
  
  return (
    <>
      <h3 className="herramientas__titulo" id="herramientas" data-aos="fade-right" data-aos-duration="1000">HERRAMIENTAS DE DESARROLLO</h3>
      <section className="HerramientasDesarrollo">
        <figure className="herramientas">
          <img
            className="herramientas__img"
            src="HerramientasIMG/html5.png"
            alt="Herramienta de desarrollo front end, HTML5"
          />
          <figcaption>HTML5</figcaption>
        </figure>
        <figure className="herramientas">
          <img
            className="herramientas__img"
            src="HerramientasIMG/css3.png"
            alt="Herramienta de desarrollo front end, CSS3"
          />
          <figcaption>CSS</figcaption>
        </figure>
        <figure className="herramientas">
          <img
            className="herramientas__img"
            src="HerramientasIMG/javascript.png"
            alt="Herramienta de desarrollo front end, JAVASCRIPT"
          />
          <figcaption>JAVASCRIPT</figcaption>
        </figure>
        <figure className="herramientas">
          <img
            className="herramientas__img"
            src="HerramientasIMG/react.png"
            alt="Herramienta de desarrollo front end, REACT"
          />
          <figcaption>REACT</figcaption>
        </figure>
        <figure className="herramientas">
          <img
            className="herramientas__img"
            src="HerramientasIMG/git.png"
            alt="Herramienta de desarrollo front end, GIT  - GITHUB"
          />
          <figcaption>GIT/GITHUB</figcaption>
        </figure>
        <figure className="herramientas">
          <img
            className="herramientas__img"
            src="HerramientasIMG/materialize.png"
            alt="Herramienta de desarrollo front end, MATERIALIZE"
          />
          <figcaption>MATERIALIZE</figcaption>
        </figure>
        <figure className="herramientas">
          <img
            className="herramientas__img"
            src="HerramientasIMG/sass.png"
            alt="Herramienta de desarrollo front end, SASS"
          />
          <figcaption>SASS</figcaption>
        </figure>
        <figure className="herramientas">
          <img
            className="herramientas__img"
            src="HerramientasIMG/Vs.png"
            alt="Herramienta de desarrollo, Visual Studio Code"
          />
          <figcaption>Visual S. Code</figcaption>
        </figure>
      </section>
    </>
  );
}
