import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Drawer from './Drawer';

test('renders the Drawer component correctly', () => {
  const { getByText } = render(
    <Drawer isOpen={true} onClose={() => {}}>
      Test Drawer Content
    </Drawer>
  );

  expect(getByText('Test Drawer Content')).toBeInTheDocument();
});

test('calls the onClose callback when the overlay is clicked', () => {
  const onClose = jest.fn();
  const { getByTestId } = render(
    <Drawer isOpen={true} onClose={onClose}>
      Test Drawer Content
    </Drawer>
  );

  const overlay = getByTestId('overlay');
  fireEvent.click(overlay);

  expect(onClose).toHaveBeenCalledTimes(1);
});