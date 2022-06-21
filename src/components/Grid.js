import { useContext } from 'react';
import TestContext from '../contexts/testContext';
import Row from './Row';

export default function Grid(props) {
  const test = useContext(TestContext);

  return (
    <div>
      <p>context: {test.count}</p>
      <button onClick={props.incrementCount}>Click</button>

      {props.guesses.map((g, i) => {
        if (props.turn === i) {
          return <Row key={i} currentGuess={props.currentGuess} />;
        }
        return <Row key={i} guess={g} />;
      })}
    </div>
  );
}
