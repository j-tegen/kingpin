import React, { useState } from "react";
import "./App.css";
import ActiveFrame from "./components/ActiveFrame";
import TotalScore from "./components/TotalScore";
import ScoreCard from "./components/ScoreCard";
import { checkIfFinished } from "./util";
import { Frame, Roll } from "./types";

const App: React.FC = () => {
  const [frames, setFrames] = useState<Frame[]>([]);
  const isGameFinished = checkIfFinished(frames);

  const handleFrameFinished = (rolls: Roll[]) => setFrames([...frames, rolls]);
  const resetGame = () => {
    setFrames([]);
  };

  return (
    <div className="App">
      <h1>Kingpin</h1>
      <ScoreCard frames={frames} />
      {!isGameFinished && (
        <ActiveFrame
          currentFrame={frames.length + 1}
          onFrameFinished={handleFrameFinished}
        />
      )}

      <TotalScore frames={frames} />
      <button onClick={resetGame}>Reset game</button>
    </div>
  );
};

export default App;
