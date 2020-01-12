import React from 'react'
import "./ScoreCard.css"

interface ScoreCardProps {
  rolls: number[];
  currentFrame: number;
}

const ScoreCard = (props: ScoreCardProps) => {
  const { rolls, currentFrame } = props;
  const frames = [];
  for (let i = 0; i <= rolls.length; i++) {
    if (rolls[i] !== 10) {
      frames.push([rolls[i], rolls[i + 1]])
      i++;
    } else {
      frames.push([rolls[i]]);
    }
    /* frames.push(
      <div key={i} className="Score-card-frame">
        <p className={"Score-card-frame-title"}>Frame {i+1}</p>
        <span>Roll 1: {rolls[i - 1]}</span>
        <span>Roll 2: {rolls[i]}</span>
      </div>
    ); */
  }

  const frameComponents = [];

  for (let i = 0; i < frames.length; i++) {
    const currentFrame = frames[i];
    const firstRoll = currentFrame[0];
    const secondRoll = currentFrame[1];
    const thirdRoll = currentFrame[2];
    frameComponents.push(
      <div key={i} className="Score-card-frame">
        <p className={"Score-card-frame-title"}>Frame {i + 1}</p>
        {firstRoll && <p>Roll 1: {firstRoll}</p>}
        {secondRoll && <p>Roll 2: {secondRoll}</p>}
        {thirdRoll && <p>Roll 3: {thirdRoll}</p>}
      </div>
    );
  }

  return (
    <div className="Score-card">
      {frameComponents}
    </div>
  )
}

export default ScoreCard
