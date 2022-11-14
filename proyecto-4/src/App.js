import logo from './imagen/logo.jpg';
import './App.css';
import { Lista } from './component/Lista';


function App() {
  return (
    <div className="tareas-app">
      <div>
        <img
          src={logo}
          className="logo"
        />    
      </div>
      <div className='tareas'>
        <h1 className='lista'>Tareas xd</h1>
        <div>
         <Lista >
             
         </Lista>
        </div>  
      </div>
    </div>
  )
}

export default App;
