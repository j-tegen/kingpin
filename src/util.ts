export const checkIfFinished = (frames: number[][]) : boolean => {
  if(frames.length !== 10) {
    return false;
  }
  const lastFrame = frames[9];

  const isStrike = (lastFrame: number[]) => lastFrame[0] === 10;
  const isSpare = (lastFrame: number[]) => lastFrame[0] + lastFrame[1] === 10;

  if (isStrike(lastFrame) || isSpare(lastFrame)) {
    return lastFrame.length === 3;
  } 

  return lastFrame.length === 2;
}