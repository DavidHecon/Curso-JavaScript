import React, { useState, useEffect } from 'react';
import InputNumber from './InputNumber';
import Message from './Message';
import RestartButton from './RestartButton';

const Game = () => {
  // Estado para el número aleatorio generado
  const [secretNumber, setSecretNumber] = useState(0);
  const [userNumber, setUserNumber] = useState('');
  const [message, setMessage] = useState('Adivina un número entre 1 y 100');
  const [gameOver, setGameOver] = useState(false);
  //Contador de intentos
  const [attempts, setAttempts] = useState(0);

  // Generar el número aleatorio al iniciar el juego o reiniciar
  useEffect(() => {
    resetGame();
  }, []);

  // Función para evaluar el número ingresado
  const checkNumber = () => {
    const guess = Number(userNumber);
    if (!guess || guess < 1 || guess > 100) {
      setMessage('Por favor, ingresa un número válido entre 1 y 100');
      return;
    }
    setAttempts(prev => prev + 1);
    if (guess === secretNumber) {
      setMessage('¡Correcto! Ganaste.');
      setGameOver(true);
    } else if (guess < secretNumber) {
      setMessage('El número es mayor');
    } else {
      setMessage('El número es menor');
    }
  };

  // Reiniciar el juego
  const resetGame = () => {
    setSecretNumber(Math.floor(Math.random() * 100) + 1);
    setUserNumber('');
    setMessage('Adivina un número entre 1 y 100');
    setGameOver(false);
    setAttempts(0);
  };

  return (
    <div style={{ maxWidth: 300, margin: 'auto', textAlign: 'center', padding: 20 }}>
      <Message text={message} />
      <InputNumber
        value={userNumber}
        onChange={e => setUserNumber(e.target.value)}
        disabled={gameOver}
      />
      <button
        onClick={checkNumber}
        disabled={gameOver || userNumber === ''}
        style={{ marginTop: 10 }}
      >
        Adivinar
      </button>

      {gameOver && <RestartButton onRestart={resetGame} />}
      
      <p>Intentos: {attempts}</p>
    </div>
  );
};

export default Game;
