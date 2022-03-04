import React from 'react';
import '../EstilosComponentes/EstiloFooter/EstilosFooter.scss';

export default function Footer(){
    return(
        <footer id='contacto'>
            <section className='footerCont'>
            <div className='footerInfo'>
                    <p className='footerInfo__texto'>Muchas gracias por visitarme! Aprecio que te hayas tomado el tiempo de ver cada detalle y muestra de informacion
                    que proporciona este portfolio. Que tengas una gran semana!</p>
                </div>
                <div className='redes'>
                    <figure className='redesCont'><a href="https://www.facebook.com/nico.comba.50/" rel='noreferrer' target='_blank'><img className='redesCont__red' src="RedesIMG/facebook.svg" alt="nicolas comba, en Facebook" /></a></figure>
                    <figure className='redesCont'><a href="https://www.instagram.com/webs_arg/" rel='noreferrer' target="_blank"><img className='redesCont__red' src="RedesIMG/instagram.svg" alt="nicolascomba, en Instagram" /></a></figure>
                    <figure className='redesCont'><a href="mailto:nicolaseliascomba2017@gmail.com?subject=Hola, queria felicitarte por tu portfolio...&body=Me ha encantado tu portfolio, te felicito! Queria comunicarme contigo para que podamos tener una charla, que te parece un cafe?"><img className='redesCont__red' src="RedesIMG/gmail.svg" alt="nicolaseliascomba2017@gmail.com, en Gmail" /></a></figure>
                </div>
                <strong className='copy'>Pagina creada por @Nicolascomba con React JS, todos los derechos reservados - 2022</strong>
            </section>
        </footer>
    );
}