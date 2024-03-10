import React, { useState } from 'react';
import Card from './components/Card';
import './components/index.css';
import phrases from './components/phrases';

function App() {
  const [currentColor, setCurrentColor] = useState(''); // Color inicial
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const nextCard = () => {
    setCurrentCardIndex((currentCardIndex + 1) % phrases.length); // Avanzar al siguiente índice de forma circular
    setCurrentColor(getRandomColor()); // Cambiar el color de forma aleatoria
  };

  // Función para generar un color aleatorio
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="App">
      <h1>React concepts</h1>
      <div>
        <h2>Number of Cards: {phrases.length} </h2>
      </div>
      <Card frontText={phrases[currentCardIndex].frontText} backText={phrases[currentCardIndex].backText} color={currentColor} />
      <div className="button-container">
        <button className="arrow-button" onClick={nextCard}>{'Next'}</button>
      </div>
    </div>
  );
}

export default App;
