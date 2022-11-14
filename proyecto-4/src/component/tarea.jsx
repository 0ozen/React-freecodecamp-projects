import React from "react";
import "../css/tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";


export function Tarea({ id, texto, completa, eliminar, hecho }) {

  return (
    <div className={completa ? "tarea-contenedor hecha" : "tarea-contenedor"}>
      <div className="tarea-texto" onClick={() => hecho(id)} >
        {texto}
      </div>
      <div className="iconos" onClick={() => eliminar(id)}>
        <AiOutlineCloseCircle className="icono" />
      </div>
    </div>
  );
}
