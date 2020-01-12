import React from 'react';
import { render } from '@testing-library/react';
import TotalScore from './TotalScore';

test('shows final score when frame 10 has been played', () => {
  const currentFrame = 11;
  const rolls = new Array(20).fill(1);
  const { getByText } = render(<TotalScore currentFrame={currentFrame} rolls={rolls} />);
  const finalScoreElement = getByText(/Final score/i);
  expect(finalScoreElement).toBeInTheDocument();
});
