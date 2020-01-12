import React from "react";
import { render } from "@testing-library/react";
import TotalScore from "./TotalScore";

test("shows final score when frame 10 is finished", () => {
  const frames = new Array(10).fill([1, 1]);
  const { getByText } = render(<TotalScore frames={frames} />);
  const finalScoreElement = getByText(/Final score/i);
  expect(finalScoreElement).toBeInTheDocument();
});
