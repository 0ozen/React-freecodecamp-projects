import React from "react";
import "../css edit/cuadros.css"

export function Cuadro(props) {
  return (
    <div className="cuadros">
      <img className="imagen-cuadro" 
        src={require(`../imagenes/${props.img}.png`)} 
        alt="emaa foto"/>
      <div className="texto-cuadro">
        <p className="nombre" >{props.nombre}</p>
        <p className="cargo" >{props.cargo} </p>
        <p className="testimonio" >{props.test}</p>
      </div>
    </div>
  );
}

