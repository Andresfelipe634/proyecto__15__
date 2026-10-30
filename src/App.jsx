import { useState } from "react";
import Flashcard from "./componentes/Flazhcard";  
import './index.css';

function App() {
const listaTarjetas = [
{id:1, pregunta: "¿Que es ract?", respuesta : "Una biblioteca de javascript para construir interfaces"},
{id:2, pregunta: "¿Que es un componente?", respuesta : "UN bloque de cogigo reutilizable en react"},
{id:3, pregunta: "¿Que es el estado?", respuesta : "la memoria interna de uun componente"}

];
const [currentIndex, setCurrentIndex] = useState(0);
const siguienteTarjeta = () => {
  setCurrentIndex((prevIndex) =>  (prevIndex + 1) % listaTarjetas.length);
};

const anteriorTarjeta = () => {
  setCurrentIndex((prevIndex) => (prevIndex - 1 + listaTarjetas.length) % listaTarjetas.length);
};

  return (
    
    <div>
      <h1>Mis tarjetas Flash</h1>
      <p>Targeta {currentIndex + 1} de {listaTarjetas.length}</p>
<div style={{width: '100%', backgroundColor: '#e0e0e0', borderRadius: '8px', marginBottom: '20px'}}>
  <div style={{
    width: `${((currentIndex + 1 ) / listaTarjetas.length) *100}`,
    backgroundColor: '#4CAF50',
    height: '12px',
    borderRadius: '8px',
    transition: 'width 0.3s ease'
  }}></div>
</div>
     
<Flashcard 
key={listaTarjetas[currentIndex].id}
pregunta = {listaTarjetas[currentIndex].pregunta} 
respuesta = {listaTarjetas[currentIndex].respuesta}

/>

 <div className="botones-contenedor"> 
  <button onClick={anteriorTarjeta}>Anterior</button>
  <button onClick={siguienteTarjeta}>Siguiente</button>
 </div>
    </div>
  );
}
export default App;