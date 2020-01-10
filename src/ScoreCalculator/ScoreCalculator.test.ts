import { calculate } from "./ScoreCalculator";

it("Calculates the score of a frame without strike or spare to equal the number of pins knocked down", () => {
  const historicRolls = [4];
  expect(calculate(4, historicRolls)).toEqual(8);
});

it("Calculates the score of a spare to equal 10 plus the number of pins in the next roll", () => {
  const historicRolls = [4, 6];
  expect(calculate(4, historicRolls)).toEqual(14);
});

it("Calculates the score of a strike to equal 10 plus the number of pins in the next two rolls", () => {
  const historicRolls = [10, 5];
  expect(calculate(3, historicRolls)).toEqual(19);
});

it("Calculates the score of a strike, spare, 4|0 to be 38", () => {
  const historicRolls = [10, 4, 6, 4];
  expect(calculate(0, historicRolls)).toEqual(38);
});

it("Calculates the score of a 12 strikes to 300", () => {
  const historicRolls = new Array(11).fill(10);
  expect(calculate(10, historicRolls)).toEqual(300);
});
