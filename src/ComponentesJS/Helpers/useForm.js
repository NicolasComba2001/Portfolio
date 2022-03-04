import {useState } from 'react';
import {helpHtpp} from './helpHttp';


export const useForm=(initialForm, validations)=>{
    

    function elementosForm(){
        const elem = document.querySelectorAll(".elementoForm");
            const arrayElem = Array.from(elem);
            console.log(arrayElem);
            return arrayElem;
    }
    
  
    const[form, setForm] = useState(initialForm);
    const[error, setError] = useState({});
    const[loading, setLoading] = useState(false);
    const[response, setResponse] = useState(null);


    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }
    
    const handleBlur = (e)=>{
        handleChange(e);
        setError(validations(form));
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const arrayP=elementosForm();
        for(let i = 0; i < arrayP.length; i++){
            console.log(arrayP[i].value);
            if(arrayP[i].value === ""){
                setForm(
                    {...form,
                    [arrayP[i].name]: arrayP[i].value
                    }
                );
                console.log(arrayP[i].value)
            }
        }
    
          setError(validations(form));
          if(Object.keys(error).length === 0){
            alert("Enviado!");
            setLoading(true);
            helpHtpp()
            .post("https://formsubmit.co/ajax/nicolaseliascomba_2001@hotmail.com", {
                body: form,
                headers: {
                    "Content-type":"application/json",
                    "Accept": "application/json"
                }
            })
            .then((res)=>{
                setLoading(false);
                setResponse(true);
                setForm(initialForm);
                setTimeout(() => {
                    setResponse(false);
                }, 5000);
            })
        } else {
            alert("Por favor, completa correctamente todo el formulario...")
            setTimeout(()=>{
                setForm(initialForm);
            },3000)
        };
          
          
    }


    return {
        form, error, loading, response, handleBlur, handleChange, handleSubmit
    }
}