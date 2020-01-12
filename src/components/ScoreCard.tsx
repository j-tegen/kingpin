import React from "react";
import "./ScoreCard.css";
import Frame from "./Frame";

interface ScoreCardProps {
  frames: number[][];
}

const ScoreCard = (props: ScoreCardProps) => {
  const { frames } = props;

  const frameComponents = [];

  for (let i = 0; i < frames.length; i++) {
    const rollsInFrame = frames[i];

    frameComponents.push(
      <div key={i} className="Score-card-frame">
        <Frame rolls={rollsInFrame} frameNumber={i + 1} />
      </div>
    );
  }

  return <div className="Score-card">{frameComponents}</div>;
};

export default ScoreCard;
