import React, { useState } from "react";
import "./Frame.css";

interface FrameProps {
  currentFrame: number;
  onFrameFinished: (rolls: number[]) => void;
}

const Frame = (props: FrameProps) => {
  const { currentFrame, onFrameFinished } = props;
  const [pins, setPins] = useState<number>(10);
  const [rolls, setRolls] = useState<number[]>([]);
  const resetFrame = () => {
    setPins(10);
    setRolls([]);
  };
  const isStrike = (numberOfPinsKnockedDown: number) => numberOfPinsKnockedDown === 10 && rolls.length === 0;
  const handleRoll = (numberOfPinsKnockedDown: number) => {
    if (currentFrame !== 10) {
      if (isStrike(numberOfPinsKnockedDown)) {
        onFrameFinished([10]);
        resetFrame();
      } else {
        setPins(pins - numberOfPinsKnockedDown);
        setRolls(rolls => [...rolls, numberOfPinsKnockedDown]);
      }
    } else {
      if (isStrike(numberOfPinsKnockedDown)) {
        setPins(10);
        setRolls(rolls => [...rolls, numberOfPinsKnockedDown]);
      } else {
        const pinsLeft = pins - numberOfPinsKnockedDown;
        setPins(!pinsLeft ? 10 : pinsLeft);
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
      <button key={i} onClick={() => handleRoll(i)} className={"Pin-button"}>
        {i}
      </button>
    );
  }

  return (
    <div>
      <p>Frame {currentFrame}</p>
      {pinsButtons}
    </div>
  );
};

export default Frame;
