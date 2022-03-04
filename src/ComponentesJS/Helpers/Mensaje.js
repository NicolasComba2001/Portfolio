import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Mensaje({mensaje, bgColor}){

    let styles = {
        padding: "5px",
        margin: "10px",
        textAling: "center",
        color: "white",
        fontWeight: "bold",
        backgroundColor: bgColor
    }

    return(
        <div style={styles}>
            <p>{<FontAwesomeIcon icon={["fa","check"]}></FontAwesomeIcon>} {mensaje} {<FontAwesomeIcon icon={["fa","check"]}></FontAwesomeIcon>}</p>
        </div>
    );
}