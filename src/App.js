import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Header from "./ComponentesJS/Header";
import Inicio from "./ComponentesJS/Inicio";
import Proyectos from "./ComponentesJS/Proyectos";
import Sobre from "./ComponentesJS/Sobre";
import Servicios from "./ComponentesJS/Servicios";
import Herramientas from './ComponentesJS/Herramientas';
import Formulario from './ComponentesJS/Formulario';
import Footer from './ComponentesJS/Footer';
import './EstilosComponentes/Medias/Medias.scss';


AOS.init();

library.add(fas);
function App() {
  return (
    <>
    <Header></Header>
    <Inicio></Inicio>
    <Sobre></Sobre>
    <Proyectos></Proyectos>
    <Servicios></Servicios>
    <Herramientas></Herramientas>
    <Formulario></Formulario>
    <Footer></Footer>
    </>
  );
}

export default App;
