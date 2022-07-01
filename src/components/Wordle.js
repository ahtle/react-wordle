import { useEffect, useState } from 'react';
import useWorlde from '../hooks/use-wordle';
import TestContext from '../contexts/testContext';
import Grid from './Grid';
import './Wordle.css';

export default function Wordle({ solution }) {
  const { currentGuess, guesses, turn, handleKeyup } =
    useWorlde(solution);

  const [count, setCount] = useState({ count: 0 });

  const incrementCount = () => {
    setCount((prev) => {
      return { count: prev.count + 1 };
    });
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);
    return () => window.removeEventListener('keyup', handleKeyup);
  }, [handleKeyup]);

  return (
    <div id="Wordle">
      <div>
        <p>solution - {solution}</p>

        <TestContext.Provider value={count}>
          <Grid
            currentGuess={currentGuess}
            guesses={guesses}
            incrementCount={incrementCount}
            turn={turn}
          />
        </TestContext.Provider>
      </div>
    </div>
  );
}
