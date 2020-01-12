import React, { useState } from "react";
import "./Frame.css";

interface FrameProps {
  onFrameIncrease: () => void;
  onRoll: (roll: number) => void;
  currentFrame: number;
}

const Frame = (props: FrameProps) => {
  const { onFrameIncrease, onRoll, currentFrame } = props;
  const [pins, setPins] = useState<number>(10);
  const [roll, setRoll] = useState<number>(1);
  const resetFrame = () => {
    setPins(10);
    setRoll(1);
  };
  const handleRoll = (numberOfPinsKnockedDown: number) => {
    if (numberOfPinsKnockedDown === 10 && roll === 1) {
      resetFrame();
      onFrameIncrease();
    } else {
      setPins(pins - numberOfPinsKnockedDown);
      setRoll(roll + 1);
    }

    onRoll(numberOfPinsKnockedDown);
  };

  if (roll > 2) {
    resetFrame();
    onFrameIncrease();
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
