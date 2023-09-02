import React from 'react';
import { render } from '@testing-library/react';
import CustomDatePicker from './DatePicker';

describe('CustomDatePicker', () => {
  it('renders without errors', () => {
    const { container } = render(<CustomDatePicker />);
    expect(container).toBeInTheDocument();
  });
});