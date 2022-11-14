import './App.css';
import log from "./img/img.png"
import {Boton,} from './componentes/Boton';
import {Contador} from './componentes/Contador';
import { useState } from 'react';



function App() {
  
  const [numClics,setNumClick] = useState(0)

  const isClic = () =>{
    setNumClick(numClics + 1)   
  }

  const restarClick = () =>{
    setNumClick(0)
  }

  return (
    <div className="App">
      <div >
        <img className='imagen' src={log} alt="logo principal" />

        <div className="contenedor" >   
        <div className='cont'>

          <Contador numClick={numClics}/>
          
        </div>
          <Boton
            texto="clic"
            botonClick={true}
            isClick={isClic}
          />

          <Boton
            texto="restar"
            botonClick={false}
            isClick={restarClick}
          />
         
        </div>
      </div>
    </div>
  );
}

export default App;
