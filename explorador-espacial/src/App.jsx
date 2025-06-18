// App.jsx
import React, { useState, useEffect, useMemo } from 'react';
import Planeta from './Planeta';

function App() {
  // Estado
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState("En órbita");
  const [planetasVisitados, setPlanetasVisitados] = useState([]);

  useEffect(() => {
    console.log("¡El panel está listo!"); // Montaje

    const intervalo = setInterval(() => {
      setCombustible((prev) => (prev > 0 ? prev - 1 : 0));
      setDistancia((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalo); // Desmontaje
      console.log("El panel se ha apagado.");
    };
  }, []);

  useEffect(() => {
    console.log("¡Combustible actualizado!"); // Actualización
  }, [combustible]);

  const mensajeEstado = useMemo(() => {
    return `Estado: ${estadoNave}`;
  }, [estadoNave]);

  const aterrizar = () => {
    setEstadoNave("Aterrizando");
    setPlanetasVisitados((prev) => [...prev, `Planeta ${planetasVisitados.length + 1}`]);
  };

  return (
    <div className='container'>
      <h1>Panel de Control</h1>
      <p>Distancia: {distancia} km</p>
      <p>Combustible: {combustible}%</p>
      <p>{mensajeEstado}</p>
      <button onClick={aterrizar}>Aterrizar</button>
      <div>
        {planetasVisitados.map((planeta, index) => (
          <Planeta key={index} nombre={planeta} />
        ))}
      </div>
    </div>
  );
}

export default App;
