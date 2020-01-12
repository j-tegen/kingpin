import React, { useState } from "react";
import "./ActiveFrame.css";
import FrameRolls from "./FrameRolls";
import { Roll, Pins } from "../types";

interface ActiveFrameProps {
  currentFrame: number;
  onFrameFinished: (rolls: Roll[]) => void;
}

const ActiveFrame = (props: ActiveFrameProps) => {
  const { currentFrame, onFrameFinished } = props;
  const [pins, setPins] = useState<Pins>(10);
  const [rolls, setRolls] = useState<Roll[]>([]);
  const resetFrame = () => {
    setPins(10);
    setRolls([]);
  };
  const isStrike = (numberOfPinsKnockedDown: Roll) =>
    numberOfPinsKnockedDown === 10 && rolls.length === 0;
  const handleRoll = (numberOfPinsKnockedDown: Roll) => {
    if (currentFrame !== 10) {
      if (isStrike(numberOfPinsKnockedDown)) {
        onFrameFinished([10]);
        resetFrame();
      } else {
        setPins((pins - numberOfPinsKnockedDown) as Pins);
        setRolls(rolls => [...rolls, numberOfPinsKnockedDown]);
      }
    } else {
      if (isStrike(numberOfPinsKnockedDown)) {
        setPins(10);
        setRolls(rolls => [...rolls, numberOfPinsKnockedDown]);
      } else {
        const pinsLeft = pins - numberOfPinsKnockedDown;
        setPins(!pinsLeft ? 10 : (pinsLeft as Pins));
        setRolls(rolls => [...rolls, numberOfPinsKnockedDown]);
      }
    }
  };

  if (currentFrame !== 10) {
    if (rolls.length === 2) {
      onFrameFinished(rolls);
      resetFrame();
    }
  } else {
    if (rolls[0] === 10 || rolls[0] + rolls[1] === 10) {
      if (rolls.length === 3) {
        onFrameFinished(rolls);
        resetFrame();
      }
    } else if (rolls.length === 2) {
      onFrameFinished(rolls);
      resetFrame();
    }
  }

  const pinsButtons = [];

  for (let i = 0; i <= pins; i++) {
    pinsButtons.push(
      <button
        key={i}
        onClick={() => handleRoll(i as Roll)}
        className={"Pin-button"}
      >
        {i}
      </button>
    );
  }

  return (
    <div>
      <FrameRolls rolls={rolls} frameNumber={currentFrame} />
      {pinsButtons}
    </div>
  );
};

export default ActiveFrame;
