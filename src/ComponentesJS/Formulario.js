import React from 'react';
import { useForm } from './Helpers/useForm';
import Loader from './Helpers/Loader';
import Mensaje from './Helpers/Mensaje';
import '../EstilosComponentes/EstiloFormulario/EstilosFormulario.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const initialForm={
    nombre:"",
    apellido:"",
    email: "",
    mensaje:""
}
const validations =(form)=>{
    let errores = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;

    if(!form.nombre.trim())
    {errores.nombre = "el campo 'nombre' es requerido";} 
    else if(!regexName.test(form.nombre.trim()))errores.nombre="Tu nombre es muy poco comun, vuelve a escribirlo.";

    if(!form.apellido.trim())
    {errores.apellido = "el campo 'apellido' es requerido";} 
    else if(!regexName.test(form.apellido.trim()))errores.apellido="Tu Apellido es muy poco comun, vuelve a escribirlo.";

    if(!form.email.trim())
    {errores.email = "el campo 'email' es requerido"; } 
    else if(!regexEmail.test(form.email.trim())) errores.email="El e-mail que intentas escribir no es valido, por favor vuelve a escribirlo.";
    
    if(!form.mensaje.trim())
    errores.mensaje = "el campo 'mensaje' es requerido";
    else if(!regexComments.test(form.mensaje.trim())) errores.mensaje="El mensaje ha enviar no es valido, por favor redactalo de nuevo.";   
        
    
    return errores;
}
export default function Formulario(){
    const {form,
        error,
         loading,
          response,
           handleBlur,
            handleChange, 
               handleSubmit} = useForm(initialForm, validations);
    return(
        <>
        <form className='form' id='conoceMas' onSubmit={handleSubmit} data-aos="fade-right"data-aos-duration="1000">
            <div className='formGrupo'>
            {!error.nombre && <FontAwesomeIcon style={{position: "absolute", top:"0", right:"-25%", margin:"5px 70px"}} icon={["fa","check"]}></FontAwesomeIcon>}<input   className={`formGrupo__info elementoForm ${error.nombre && "error"}`} type="text" id='nombre'  name='nombre'  onBlur={handleBlur} onChange={handleChange} value={form.nombre} required/> 
                <label   className='formGrupo__titulo' htmlFor='nombre'>Nombre</label>
                 {error.nombre && <p className='FormError'>{error.nombre}</p>}
            </div>
            <div className='formGrupo'>
                {!error.apellido && <FontAwesomeIcon style={{position: "absolute", top:"0", right:"-25%", margin:"5px 70px"}} icon={["fa","check"]}></FontAwesomeIcon>}<input   className={`formGrupo__info elementoForm ${error.apellido && "error"}`} type="text" id='apellido' name='apellido' onBlur={handleBlur} onChange={handleChange} value={form.apellido} required />
                <label   className='formGrupo__titulo' htmlFor=''>Apellido</label>
                 {error.apellido && <p className='FormError'>{error.apellido}</p>}
            </div>
            <div className='formGrupo'>
                {!error.email && <FontAwesomeIcon style={{position: "absolute", top:"0", right:"-25%", margin:"5px 70px"}} icon={["fa","check"]}></FontAwesomeIcon>}<input   className={`formGrupo__info elementoForm ${error.email && "error"}`} type="email" id='email'  name='email' onBlur={handleBlur} onChange={handleChange} value={form.email} required/>
                <label   className='formGrupo__titulo' htmlFor='email'>E-mail</label>
                 {error.email && <p className='FormError'>{error.email}</p>}
            </div>
            <div className='formGrupo'>
                <textarea  cols="30" rows="3" name='mensaje' className={`formGrupo__texto elementoForm ${error.mensaje && "error"}`} id='mensaje' onBlur={handleBlur} onChange={handleChange} value={form.mensaje} required></textarea>
                <label   className='formGrupo__titulo' htmlFor='mensaje'>Mensaje</label>
                 {error.mensaje && <p className='FormError'>{error.mensaje}</p>}
            </div>

                <input type="submit"  className='btnSubmit' value={"ENVIAR"}/>
                {loading && <Loader></Loader>}
                {response && <Mensaje mensaje={`los datos fueron enviados`} bgColor="#198754"></Mensaje>}
        </form>
       
         
        </>
        
    );
}