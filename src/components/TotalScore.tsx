import React from 'react'
import { calculate } from '../ScoreCalculator/ScoreCalculator';


interface TotalScoreProps {
  rolls: number[];
  currentFrame: number;
}

const TotalScore = (props: TotalScoreProps) => {
  const { rolls, currentFrame } = props;
  const currentScore = calculate(rolls);
  return (
    <p>
      {currentFrame <= 10 ? "Current score: " : "Final score: "}
      {currentScore}
    </p>
  )
}

export default TotalScore
