import { useState } from 'react';

const useWorlde = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState([...Array(6)]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  // format a guess into an array of letter objects
  const formatGuess = () => {
    const solutionArr = [...solution];
    let formattedGuess = [...currentGuess].map((l) => {
      return { key: l, color: 'grey' };
    });

    // find green letters
    formattedGuess.forEach((l, i) => {
      if (l.key === solutionArr[i]) {
        formattedGuess[i].color = 'green';
        solutionArr[i] = null;
      } else if (solutionArr.includes(l.key)) {
        // find yellow
        formattedGuess[i].color = 'yellow';
        solutionArr[i] = null;
      }
    });

    return formattedGuess;
  };

  // add a new guess to the guesses state
  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }
    setGuesses((preGuesses) => {
      let newGuess = [...preGuesses];
      newGuess[turn] = formattedGuess;
      return newGuess;
    });
    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess];
    });
    setTurn((prevTurn) => {
      return prevTurn + 1;
    });
    setCurrentGuess('');
  };

  const handleKeyup = ({ key }) => {
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    } else if (key === 'Backspace') {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
    } else if (key === 'Enter') {
      if (turn > 5) {
        console.log('You used all your guesses');
      } else if (history.includes(currentGuess)) {
        console.log('you already tried that word');
      } else if (currentGuess.length < 5) {
        console.log('word must be 5 chars long');
      } else {
        const formatted = formatGuess();
        addNewGuess(formatted);
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWorlde;
