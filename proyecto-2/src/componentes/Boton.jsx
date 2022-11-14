import React from 'react';
import '../estilos/boton.css';

export function Boton({ texto, botonClick, isClick }) {
    return (
        <button className={botonClick ? "click" : "restar"}
        onClick={isClick}>
            {texto}
        </button>

    )
}