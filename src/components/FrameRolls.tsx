import React from "react";
import { Roll } from "../types";

interface FrameProps {
  frameNumber: number;
  rolls: Roll[];
}

const FrameRolls = (props: FrameProps) => {
  const { frameNumber, rolls } = props;
  return (
    <>
      <p>Frame {frameNumber}</p>
      {rolls.map((roll, index) => (
        <p key={index}>
          Roll {index + 1}: {roll}
        </p>
      ))}
    </>
  );
};

export default FrameRolls;
