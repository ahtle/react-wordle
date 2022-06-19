import { useState } from 'react';

const useWorlde = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  // format a guess into an array of letter objects
  const formatGuess = () => {};

  // add a new guess to the guesses state
  const addNewGuess = () => {};

  const handleKeyup = () => {};

  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWorlde;
