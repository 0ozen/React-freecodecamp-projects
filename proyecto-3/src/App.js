import "./App.css";
import { Boton } from "./component/Boton";
import { Pantalla } from "./component/Pantalla";
import { Clear } from "./component/Clear";
import { Logo } from "./component/Logo";
import {useState} from 'react';
import {evaluate} from 'mathjs';


function App() {

  const [val,setVal] = useState("")

  const addInput = input => {
    setVal(val+input)
  }
  const calcular = () => {
    if(val){
       setVal(  evaluate(val) )
    }
   
  }

  return (
    <div className="App">

      <div className="div-logo">
        <Logo img={"log"}/>
      </div>

      <div className="contenedor-calc">
        <Pantalla val={val}/>

        <div className="fila">
          <Boton clicl={addInput}>1</Boton>
          <Boton clicl={addInput}>2</Boton>
          <Boton clicl={addInput}>3</Boton>
          <Boton clicl={addInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton clicl={addInput}>4</Boton>
          <Boton  clicl={addInput}>5</Boton>
          <Boton clicl={addInput}>6</Boton>
          <Boton clicl={addInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton>7</Boton>
          <Boton clicl={addInput}>8</Boton>
          <Boton clicl={addInput}>9</Boton>
          <Boton clicl={addInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton clicl={calcular}>=</Boton>
          <Boton clicl={addInput}>0</Boton>
          <Boton clicl={addInput}>.</Boton>
          <Boton clicl={addInput}>/</Boton>
        </div>
        <div className="fila">
          <Clear clicClear={()=> setVal("")}></Clear>
        </div>
      </div>
    </div>
  );
}

export default App;
