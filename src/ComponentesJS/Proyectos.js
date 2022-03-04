import React, { useState } from 'react';
import '../EstilosComponentes/EstiloProyecto/EstiloProyecto.scss';

function ContenedorProyectos(){
    return(
        <section className='proyectos-flex'>
        <ListadoProyectos
        img={"ProyectoIMG/TakkarIndumentaria.png"}
        titulo="Takkar - Indumentaria 2022"
        descripcion="Takkar indumentaria muestra con orgullo la nueva colección de prendas otoño
        - invierno."
        git="https://nicolascomba2001.github.io/Takkar2022/"
        direction="left"

        ></ListadoProyectos>
        <ListadoProyectos
        img={"ProyectoIMG/SportFinesClub.png"}
        titulo="Sport Fitness Club"
        descripcion="Sport Club, uno de los mejores gimnasios de San Francisco, con una calificación
        de 4.3/5 estrellas de satisfacción por parte de nuestros clientes."
        git="https://nicolascomba2001.github.io/Gimnasio/"
        direction="right"

        ></ListadoProyectos>
        <ListadoProyectos
        img={"ProyectoIMG/MaterMuebles.png"}
        titulo="Mater - Muebles"
        descripcion="Mater, mueblería de calidad y confianza para ambientar de la mejor manera y de la mejor madera, tu hogar. Sillones,
        camas, estantes, roperos, alacenas, y MAS..."
        git="https://nicolascomba2001.github.io/MaterMuebles/"
        direction="left"

        ></ListadoProyectos>
        <ListadoProyectos
        img={"ProyectoIMG/publicidad-emprendimientos.png"}
        titulo="Mic-Emprendimiento"
        descripcion="Sube tus microemprendimientos / emprendimiento con el fin de crecer tus visitas orgánicas y aumentar tu negocio!"
        git=""
        direction="right"

        ></ListadoProyectos>
        </section>
    );
}

function ListadoProyectos({titulo, descripcion, img, git, direction}){
    return(
        <article>
            <div className='proyecto'>
                <div className='proyectoCaja'data-aos={`fade-${direction}`} data-aos-duration="1000">
                    <div className='proyectoCajaContenido' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                    <figure className='muestraProyecto'><img className='muestraProyecto__img' src={img} alt={descripcion} />
                    <figure className='proyectoImg'>
                            <a href={git} rel="noreferrer" target="_blank"><img className='proyectoImg__img' src="ProyectoIMG/githubLogo.png" alt="Accede a mi perfil de github, es donde se guardan todos los codigos!" /></a>
                        </figure>
                    </figure>
                    <div className='proyectoContenidoFlex'>
                        <div className='proyectoInfo'>
                            <h3 className='proyectoInfo__titulo'>{titulo}</h3>
                            <p>{descripcion}</p>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>
        </article>
    );
}

const BotonCambiante = ({bandera,funcion})=>{
    return(
        <button className='proyectosInfo__btn' onClick={funcion}data-aos="fade-up" data-aos-duration="700">{bandera ? "CERRAR!":"VER MAS!"}</button>
    );
}

export default function Proyectos(){
    const[abrirProyectos, setAbrirProyectos] = useState(false);
    const abrir=()=>{
        setAbrirProyectos(!abrirProyectos);
    }
    return(
        <section className='proyectos' id='proyectos' style={{width: '100%', overflow: 'hidden'}}>
            <figure className='proyectosImg'>
                <img className='proyectosImg__img' src="ProyectoIMG/ProyectosImg.jpg" alt="Proyectos hechos por Nicolas, contamos con landings, portfolios, venta de tickets, y MAS!" />
                <div className='proyectosInfo'>
                    <p className='proyectosInfo__titulo' data-aos="fade-right" data-aos-duration="700">MIS PROYECTOS</p>
                    <p className='proyectosInfo__parrafo' data-aos="fade-left" data-aos-duration="700">Los proyectos son una muestra gráfica, practica de todo lo que los desarrolladores front, piensan
                                y pueden mostrar de diferentes formas y estilos.
                    </p>
                   <BotonCambiante funcion={abrir} bandera={abrirProyectos}></BotonCambiante>
                </div>
            </figure>
                {abrirProyectos && <section><ContenedorProyectos/></section>}
        </section>
    );
}