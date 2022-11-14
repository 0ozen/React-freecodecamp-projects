import React, { PureComponent, useState } from "react";
import { Formulario } from "./Formulario";
import { Tarea } from "./tarea";
import '../css/lista.css';


export function Lista() {

    const [tareas, setTareas] = useState([]);

    const agregar = nuevo => {
        if (nuevo.texto.trim());
        nuevo.texto = nuevo.texto.trim();
        setTareas([nuevo, ...tareas])
    };
    const eliminar = id => {
        const actual = tareas.filter(tarea => tarea.id !== id)
        setTareas([...actual])
    };
    const hecho = id => {
        const nnuevo = tareas.filter(tarea => {
            if (tarea.id === id) {
                tarea.completa = !tarea.completa
            }
            return tarea
        })
        setTareas([...nnuevo])
    };
    return (
        <>
            <Formulario onSubmit={agregar} />
            <div className="regla">
                {
                    tareas.map((tarea) => {
                        return (
                            <Tarea
                                key={tarea.id}
                                id={tarea.id}
                                texto={tarea.texto}
                                completa={tarea.completa}
                                eliminar={eliminar}
                                hecho={hecho}
                            />
                        )
                    })
                }
            </div>

        </>
    )
}
