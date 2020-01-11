import { calculate } from "./ScoreCalculator";

it("Calculates the score of a frame without strike or spare to equal the number of pins knocked down", () => {
  const rolls = [4, 4];
  expect(calculate(rolls)).toEqual(8);
});

it("Calculates the score of two frames with the second frame with only one roll", () => {
  const rolls = [4, 4, 4];
  expect(calculate(rolls)).toEqual(8);
});

it("Calculates the score of a spare to equal 10 plus the number of pins in the next roll", () => {
  const rolls = [4, 6, 4];
  expect(calculate(rolls)).toEqual(14);
});

it("Calculates the score of a strike to equal 10 plus the number of pins in the next two rolls", () => {
  const rolls = [10, 5, 3];
  expect(calculate(rolls)).toEqual(26);
});

it("Calculates the score of a strike, spare, 4|0 to be 38", () => {
  const rolls = [10, 4, 6, 4, 0];
  expect(calculate(rolls)).toEqual(38);
});

it("Calculates the score when you get a spare in the last frame", () => {
  const rolls = [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    9,
    5
  ];
  expect(calculate(rolls)).toEqual(33);
});

it("Calculates the score when you get a strike in the last frame", () => {
  const rolls = [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    10,
    5,
    5
  ];
  expect(calculate(rolls)).toEqual(38);
});

it("Calculates the score like a spare when you get a zero followed by a 10 roll in a frame", () => {
  const rolls = [0, 10, 3, 4];
  expect(calculate(rolls)).toEqual(20);
});

it("Calculates the score of a 12 strikes to 300", () => {
  const rolls = new Array(12).fill(10);
  expect(calculate(rolls)).toEqual(300);
});

it("Calculates the score to zero if you get a spare in the first frame but haven't rolled in the second frame", () => {
  const rolls = [5, 5];
  expect(calculate(rolls)).toEqual(0);
});

it("Calculates the score to zero if you get a strike in the first frame but haven't rolled twice in the second frame", () => {
  const rolls = [10, 5];
  expect(calculate(rolls)).toEqual(0);
});
