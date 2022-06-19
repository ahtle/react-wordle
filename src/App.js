import { useEffect, useState } from 'react';

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/solutions')
      .then(res => res.json())
      .then(json => {
        // random solution between 1 and collection length
        const randomSolution = json[Math.floor(Math.random() * json.length)]
        setSolution(randomSolution)
      });
  }, [setSolution]);

  return (
    <div className="App">
      <h1>wordle (fake)</h1>
      {solution &&
        <p>{solution.word}</p>
      }
    </div>
  );
}

export default App;
