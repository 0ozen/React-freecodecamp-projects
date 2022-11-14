import "./App.css";
import {Cuadro} from "./components/cuadro.js"

function App() {
  return (
    <div className="App">
      <div className="cuak">
        <h1 >Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Cuadro 
          nombre="Emma Bost XD"
          cargo="ingeniera de sofware"
          test="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
          img="o" />
        <Cuadro 
          nombre="Emma Bost XD"
          cargo="ingeniera de sofware"
          test="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
          img="o" />
        <Cuadro 
          nombre="Emma Bost XD"
          cargo="ingeniera de sofware"
          test="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
          img="o" />

      </div>
    </div>
  );
}

export default App;
