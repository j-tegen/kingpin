import React from "react";
import PropTypes from "prop-types";

interface FrameProps {
  frameNumber: number;
  rolls: number[];
}

const Frame = (props: FrameProps) => {
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

Frame.propTypes = {};

export default Frame;
