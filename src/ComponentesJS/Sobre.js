import React from "react";
import "../EstilosComponentes/EstilosSobreMi/EstilosSobre.scss";

export default function Sobre() {
  return (
      <section className="sobreInfo" id="sobreMi">
       
       
       <section className="sobreInfo-flex">
            <article className="sobreInfoTexto">
                <h3 className="sobreInfoTexto__titulo" data-aos="fade-right" data-aos-duration="800">UN POCO DE MI!</h3>
                <p className="sobreInfoTexto__parrafo" data-aos="fade-left" data-aos-duration="1000">
                    Hola! Soy Nicolas, desde mis 17 años de edad he estado interesado
                    por el desarrollado web front-end, siendo asi, mi principal objetivo
                    estudiar todas y cada una de las tecnologias mas
                    demandadas en el mundo del desarrollo web.
                </p>
            </article>
            <article className="sobreCont-flex">
            <figure className="sobreInfoImg" data-aos="fade-right" data-aos-duration="1000">
                <img 
                    className="sobreInfoImg__img"
                    src="AboutIMG/SobreMiImagen.svg"
                    alt="Conoce sobre mi, como soy como desarrollador y como persona."
                />
            </figure>
            <div className="infoBtns" data-aos="fade-up" data-aos-duration="600">
                <a className="infoBtns__btn" href="https://www.linkedin.com/in/nicolas-elias-comba-334324196/" rel="noreferrer" target="_blank" data-content="LINKEDIN">LINKEDIN</a>
                <a className="infoBtns__btn" href="https://candidato.computrabajo.com.ar/Candidate/Home" rel="noreferrer" target="_blank" data-content="C. TRABAJO">C. TRABAJO</a>
            </div>
            </article>
        </section>
        <figure className="sobrePerfil">
            <img src="PerfiliMG/FotoPerfil.svg" alt="Imagen ilustrativa, persona con un mapa, referencia: Perdido?" />
            <img src="PerfiliMG/FotoPerfilCelular.svg" alt="Imagen ilustrativa, persona con un celular, referencia: Señal?" />
        </figure>
        <section className="sobreInfo-flex-reverse">
            <article className="sobreInfoTexto" data-aos="fade-left" data-aos-duration="1000">
            <h3 className="sobreInfoTexto__titulo" data-aos="fade-right" data-aos-duration="800">SIEMPRE ACTUALIZADO!</h3>
                <p className="sobreInfoTexto__parrafo">
                Cada vez mas, el mundo avanza y la tecnologia tambien, por eso hay que mantenerse
                siempre al pendiente de todas las actualizaciones o tecnologias nuevas que salen a la luz. Si quieres,
                puedes ver mi <abbr title="CURRICULUM VITAE">CV</abbr> / Hoja de vida o mi test de aptitudes.
                </p>
            </article>
            <article className="sobreCont-flex">
            <figure className="sobreInfoImg" data-aos="fade-right" data-aos-duration="1000">
                <img 
                    className="sobreInfoImg__img"
                    src="AboutIMG/SobreMiFinImg.svg"
                    alt="Conoce sobre mi, como soy como desarrollador y como persona."
                />
            </figure>
            <div className="infoBtns" data-aos="fade-up" data-aos-duration="1000">
                <a className="infoBtns__btn" href="Cv_Ap/Comba,Nicolas(CV).pdf" download="Comba_Nicolas_Curriculum Vitae" data-content="C. VITAE">C. VITAE</a>
                <a className="infoBtns__btn" href="Cv_Ap/Test_Competencias.pdf" download="Comba_Nicolas_Aptitudes" data-content="T. APTITUDES">T. APTITUDES</a>
            </div>
            </article>
           
        </section>
       
        
      </section>

  );
}
