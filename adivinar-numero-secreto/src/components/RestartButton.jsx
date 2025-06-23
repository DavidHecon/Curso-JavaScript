import React from 'react';

const RestartButton = ({ onRestart }) => {
  return (
    <button 
      onClick={onRestart} 
      style={{ marginTop: 20, padding: '8px 16px', fontSize: 16 }}
    >
      Reiniciar Juego
    </button>
  );
};

export default RestartButton;
