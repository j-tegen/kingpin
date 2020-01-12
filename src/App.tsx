import React, { useState } from 'react';
import './App.css';
import Frame from './components/Frame';
import TotalScore from './components/TotalScore'
import ScoreCard from "./components/ScoreCard";

const App: React.FC = () => {
  const [currentFrame, setCurrentFrame] = useState<number>(1);
  const [rolls, setRolls] = useState<number[]>([]);
  const handleFrameIncrease = () => setCurrentFrame(currentFrame + 1);
  const handleRoll = (roll: number) => setRolls(rolls.concat([roll]));
  const resetGame = () => {
    setCurrentFrame(1);
    setRolls([]);
  }

  return (
    <div className="App">
      <h1>
        Kingpin
      </h1>
      <ScoreCard rolls={rolls} currentFrame={currentFrame} />
      {currentFrame <= 10 ? <Frame onFrameIncrease={handleFrameIncrease} onRoll={handleRoll} currentFrame={currentFrame} /> : null}

      <TotalScore currentFrame={currentFrame} rolls={rolls} />
      <button onClick={resetGame}>Reset game</button>
    </div>
  );
}

export default App;
