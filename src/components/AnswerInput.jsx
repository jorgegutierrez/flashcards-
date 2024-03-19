// AnswerInput.jsx
import React, { useState } from 'react';

const AnswerInput = ({ onAnswerSubmit }) => {
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null); // Nuevo estado para rastrear si la respuesta es correcta

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
    setIsCorrect(null); // Reiniciar el estado de la corrección cuando el usuario comience a escribir una nueva respuesta
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (answer.trim() !== '') {
      const isAnswerCorrect = onAnswerSubmit(answer.trim()); // Verificar si la respuesta es correcta
      setIsCorrect(isAnswerCorrect); // Actualizar el estado de isCorrect
    }
  };

  // Determinar la clase CSS del input según si la respuesta fue correcta o no
  const inputClassName = isCorrect === true ? 'correct' : (isCorrect === false ? 'incorrect' : '');

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={answer} 
        onChange={handleInputChange} 
        className={inputClassName} // Aplicar la clase CSS dinámicamente
        placeholder="Ingresa tu respuesta..." 
        required 
      /><div className='submit-container'>
      <button type="submit">Enviar</button>
      </div>
    </form>
  );
};

export default AnswerInput;
