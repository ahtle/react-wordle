import { useEffect, useState } from 'react';
// import Wordle from './components/Wordle';
import Countries from './components/Countries';
import './App.css';

function App() {
  const [solution, setSolution] = useState(null);

  // useEffect(() => {
  //   fetch('http://localhost:3001/solutions')
  //     .then((res) => res.json())
  //     .then((json) => {
  //       // random solution between 1 and collection length
  //       const randomSolution =
  //         json[Math.floor(Math.random() * json.length)];
  //       setSolution(randomSolution);
  //     });
  // }, [setSolution]);

  return (
    <div id="App">
      {/* <header>
        <h1>wordle (fake)</h1>
      </header>
      <div className="main-content">
        {solution && <Wordle solution={solution.word} />}
      </div> */}
      <Countries />
    </div>
  );
}

export default App;
