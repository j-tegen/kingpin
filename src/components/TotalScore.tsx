import React from 'react'
import { calculate } from '../ScoreCalculator/ScoreCalculator';
import { checkIfFinished } from '../util';

interface TotalScoreProps {
  frames: number[][];
}

const TotalScore = (props: TotalScoreProps) => {
  const { frames } = props;
  const currentScore = calculate(frames.flat());
  const isGameFinished = checkIfFinished(frames);
  return (
    <p>
      {!isGameFinished ? "Current score: " : "Final score: "}
      {currentScore}
    </p>
  )
}

export default TotalScore
