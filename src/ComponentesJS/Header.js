import React, { useState } from 'react';
import '../EstilosComponentes/EstiloHeaderMenu/EstilosHeaderMenu.scss';

export default function Header(){
    const[menuOpen, setMenuOpen] = useState(false);
    return(
        <header className='contMenu' data-aos="fade-down" data-aos-duration="1200">
                <section className='header'>
                    <div className='headerLogo'><span className={`headerLogo__logo ${menuOpen && 'colorlogo'}`}>FRONT</span></div>
                    <div className={`headerMenuBox ${menuOpen && 'open'}`} onClick={()=>setMenuOpen(!menuOpen)}><div className={`headerMenuBox__icono`}></div></div>
                </section>
                <nav className={`menu ${menuOpen && 'MenuOpen'}`}>
                    <ul className='menuList'>
                        <li className='menuListBox'><a className='menuListBox__ancla' href="#inicio" data-text="&nbsp;INICIO">&nbsp;INICIO</a></li>
                        <li className='menuListBox'><a className='menuListBox__ancla' href="#sobreMi" data-text="&nbsp;SOBRE">&nbsp;SOBRE</a></li>
                        <li className='menuListBox'><a className='menuListBox__ancla' href="#proyectos" data-text="&nbsp;PROYECTOS">&nbsp;PROYECTOS</a></li>
                        <li className='menuListBox'><a className='menuListBox__ancla' href="#herramientas" data-text="&nbsp;HERRAMIENTAS">&nbsp;HERRAMIENTAS</a></li>
                        <li className='menuListBox'><a className='menuListBox__ancla' href="#servicios" data-text="&nbsp;SERVICIOS">&nbsp;SERVICIOS</a></li>
                        <li className='menuListBox'><a className='menuListBox__ancla' href="#contacto" data-text="&nbsp;CONTACTO">&nbsp;CONTACTO</a></li>
                    </ul>
                </nav>
        </header>
    );
}