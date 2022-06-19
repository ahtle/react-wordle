import { useEffect } from 'react';
import useWorlde from '../hooks/useWordle';
import Grid from './Grid';
import './Wordle.css';

export default function Wordle({ solution }) {
  const { currentGuess, guesses, isCorrect, turn, handleKeyup } =
    useWorlde(solution);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);
    return () => window.removeEventListener('keyup', handleKeyup);
  }, [handleKeyup]);

  useEffect(() => {
    console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]);

  return (
    <div id="Wordle">
      <div>
        <p>solution - {solution}</p>
        <Grid
          currentGuess={currentGuess}
          guesses={guesses}
          turn={turn}
        />
      </div>
    </div>
  );
}
