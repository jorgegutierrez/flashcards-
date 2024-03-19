import React, { useState } from 'react';
import Card from './components/Card';
import AnswerInput from './components/AnswerInput';
import './components/index.css';
import phrases from './components/phrases';

function App() {
  const [currentColor, setCurrentColor] = useState('');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const nextCard = () => {
    setCurrentCardIndex((currentCardIndex + 1) % phrases.length);
    setCurrentColor(getRandomColor());
  };

  const previosCard = () => {
    const newIndex = (currentCardIndex - 1 + phrases.length) % phrases.length;
    setCurrentCardIndex(newIndex);
    setCurrentColor(getRandomColor());
  };

  const handleAnswerSubmit = (answer) => {
    const correctAnswer = phrases[currentCardIndex].backText.toLowerCase();
    
    if (answer.trim().toLowerCase() === correctAnswer) {
      console.log("¡Respuesta correcta!");
      nextCard(); // Avanzar a la siguiente tarjeta
      return true; // Indicar que la respuesta es correcta
    } else {
      console.log("Respuesta incorrecta. Inténtalo de nuevo.");
      return false; // Indicar que la respuesta es incorrecta
    }
  };

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
        <button className="previos-arrow-button" onClick={previosCard}>{'Previos'}</button>
        <button className="arrow-button" onClick={nextCard}>{'Next'}</button>
      </div>
      <AnswerInput onAnswerSubmit={handleAnswerSubmit} />
    </div>
  );
}

export default App;