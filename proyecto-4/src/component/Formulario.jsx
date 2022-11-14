import React, { PureComponent, useState } from "react";
import "../css/form.css";
import { v4 as uuid } from 'uuid';

export function Formulario(props) {
  const [input, setinput] = useState("");
  const cambio = (e) => {
    setinput(e.target.value);
  };
  const recibir = (e) => {
    e.preventDefault();
    const nuevo = {
      id: uuid(),
      texto: input,
      completa: false,
    };
    props.onSubmit(nuevo)
  };
  return (
    <form className="form" onSubmit={recibir}>
      <input
        className="input"
        type="text"
        placeholder="Escribe una tarea"
        onChange={cambio}
      ></input>
      <button className="boton">Agregar Tarea</button>
    </form>
  );
}
