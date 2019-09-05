import React, { useState } from 'react';
import Dashboard from "./components/Dashboard.js"
import Display from "./components/Display.js"
import './App.css';

function App() {

  const [ballCount, setBallCount] = useState(0);
  const [strikeCount, setStrikeCount] = useState(0);

  function addBall() {
    if (ballCount < 3) {
    return setBallCount(ballCount + 1)
    }
    else if (ballCount === 3) {
      return setBallCount(ballCount - 3)
    }
  }

  function addStrike() {
    if (strikeCount < 2) {
    return setStrikeCount(strikeCount + 1)
    }
    else if (strikeCount === 2) {
      return setStrikeCount(strikeCount - 2)
    }
  }

  return (
    <div className="App">
     <h1>BaseBall App</h1>
     <Display
      ballCount={ballCount}
      strikeCount={strikeCount} />
     <Dashboard
      addBall={addBall}
      addStrike={addStrike} />
    </div>
  );
}

export default App;
