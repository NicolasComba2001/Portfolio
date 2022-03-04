import { useState } from 'react';
import {helpHtpp} from './helpHttp';

export const useForm=(initialForm, validations)=>{
    
    const[form, setForm] = useState(initialForm);
    const[error, setError] = useState({});
    const[loading, setLoading] = useState(false);
    const[response, setResponse] = useState(null);


    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    const handleBlur = (e)=>{
        handleChange(e);
        setError(validations(form));
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        setError(validations(form));
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
        if(Object.keys(error).length === 0){
            alert("Enviado!");
            setLoading(true);
            
        } else return;
    }


    return {
        form, error, loading, response, handleBlur, handleChange, handleSubmit
    }
}