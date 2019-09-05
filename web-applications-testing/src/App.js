import React, { useState } from 'react';
import Dashboard from "./components/Dashboard.js"
import Display from "./components/Display.js"
import './App.css';

export function addStrike2 (strikeCount, setStrikeCount) {
  if (strikeCount < 2) {
    return strikeCount + 1
    }
    else if (strikeCount === 2) {
      return setStrikeCount(strikeCount - 2)
    }
}

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

  function addFoul() {
  if (strikeCount < 2) {
    return setStrikeCount(strikeCount + 1)
    }
  }

  function addHit() {
    return (setStrikeCount(0) || setBallCount(0))
  }

  return (
    <div className="App">
     <h1>BaseBall App</h1>
     <Display
      ballCount={ballCount}
      strikeCount={strikeCount} />
     <Dashboard
      addBall={addBall}
      addStrike={addStrike}
      addFoul={addFoul}
      addHit={addHit} />
    </div>
  );
}

export default App;
