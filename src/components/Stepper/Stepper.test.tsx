import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Stepper } from './Stepper';

test('renders stepper component', () => {
  const steps = ['Step 1', 'Step 2', 'Step 3'];
  const { getByText } = render(<Stepper steps={steps} />);

  steps.forEach((step) => {
    expect(getByText(step)).toBeInTheDocument();
  });
});

test('clicking a step button should activate it', () => {
  const steps = ['Step 1', 'Step 2', 'Step 3'];
  const { getByText } = render(<Stepper steps={steps} />);
  const stepButton = getByText(steps[1]);

  fireEvent.click(stepButton);

  expect(stepButton).toHaveStyle('background-color: #333');
  expect(stepButton).toHaveStyle('color: #fff');
});