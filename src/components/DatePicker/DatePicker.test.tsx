import React from 'react';
import { render } from '@testing-library/react';
import CustomDatePicker from './DatePicker';

describe('CustomDatePicker', () => {
  it('renders without errors', () => {
    const { container } = render(<CustomDatePicker />);
    expect(container).toBeInTheDocument();
  });

  it('updates selected date on change', () => {
    const { container } = render(<CustomDatePicker />);
    const datePickerInput = container.querySelector('input');

    // Simulate date change
    fireEvent.change(datePickerInput!, { target: { value: '2023-09-02' } });

    // Check if selected date is updated
    expect(datePickerInput?.value).toBe('2023-09-02');
  });
});