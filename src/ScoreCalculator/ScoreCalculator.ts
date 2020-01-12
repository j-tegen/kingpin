export function calculate(rolls: number[]): number {
  let currentScore = 0;
  const lastRollIndex = rolls.length - 1;

  if (lastRollIndex < 1) {
    return currentScore;
  }

  for (let i = 0; i < rolls.length - 1; i += 2) {
    const firstRollInFrame = rolls[i];
    const secondRollInFrame = rolls[i + 1];
    const numberOfPinsInFrame = firstRollInFrame + secondRollInFrame;

    if (numberOfPinsInFrame < 10) {
      currentScore += firstRollInFrame + secondRollInFrame;
    } else if (numberOfPinsInFrame === 10) {
      if (i + 2 <= lastRollIndex) {
        currentScore += 10 + rolls[i + 2];
      }
    } else {
      if (i + 2 <= lastRollIndex) {
        currentScore += 10 + rolls[i + 1] + rolls[i + 2];
        i -= 1;
      }
    }
  }

  return currentScore;
}
