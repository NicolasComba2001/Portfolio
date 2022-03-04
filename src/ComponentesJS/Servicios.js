import React from "react";
import "../EstilosComponentes/EstiloServicio/EstilosServicios.scss";
function CardServicios({ tarea, descripcion, img }) {
  return (
    <article className="tarjeta" data-aos="zoom-in" data-aos-duration="600">
      <figure className="tarjetaIMG">
        <img className="tarjetaIMG__img" src={img} alt={descripcion} />
      </figure>
      <figcaption className="tarjetaINFO">
        <strong className="tarjetaINFO__titulo">{tarea}</strong>
        <p className="tarjetaINFO__parrafo">{descripcion}</p>
      </figcaption>
    </article>
  );
}

export default function Servicios() {
  return (
    <section className="Servicios" id="servicios">
        <h3 className="Servicios__titulo" data-aos="zoom-out-down" data-aos-duration="800">SERVICIOS BRINDADOS</h3>
        <article className="servicios-grid">
        <CardServicios
        tarea="Desarrollo Web"
        descripcion="¡Si puedes pensarlo, puedes crearlo! Desarrollo con entusiasmo y alegría páginas de todo tipo, con los diseños de tus sueños."
        img={
          "ServiciosIMG/DesarrolloWeb.svg"
        }
      ></CardServicios>
      <CardServicios
        tarea="Mantenimiento"
        descripcion="Cada sitio web, necesita de un mantenimiento y cuidado semanal o mensual, ya sea para actualizaciones mínimas o grandes. Por eso contamos
        con atención al cliente las 24 horas del día."
        img={
          "ServiciosIMG/MantenimientoWeb.svg"
        }
      ></CardServicios>
      <CardServicios
        tarea="Diseño Responsive"
        descripcion="Todos los sitios webs, contaran con este 'Diseño Responsive', el cual consta de hacer que cada sitio web, 
        se adapte a resoluciones desde un Smartphone hasta una computadora de escritorio"
        img={
          "ServiciosIMG/DisenoResponsive.svg"
        }
      ></CardServicios>
      <CardServicios
        tarea="Tecnicas S.E.O"
        descripcion="Lo más importante para un sitio web, es contar con un gran tráfico de personas que estén interesadas en tu página. Por eso
        aplicamos las mejores y más limpias técnicas para que tu sitio sea increíble."
        img={
          "ServiciosIMG/Seo.svg"
        }
      ></CardServicios>
        </article>
    </section>
  );
}
