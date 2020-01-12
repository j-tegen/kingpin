import React from "react";
import "./ScoreCard.css";
import FrameRolls from "./FrameRolls";
import { Frame } from "../types";

interface ScoreCardProps {
  frames: Frame[];
}

const ScoreCard = (props: ScoreCardProps) => {
  const { frames } = props;

  const frameComponents = [];

  for (let i = 0; i < frames.length; i++) {
    const rollsInFrame = frames[i];

    frameComponents.push(
      <div key={i} className="Score-card-frame">
        <FrameRolls rolls={rollsInFrame} frameNumber={i + 1} />
      </div>
    );
  }

  return <div className="Score-card">{frameComponents}</div>;
};

export default ScoreCard;
