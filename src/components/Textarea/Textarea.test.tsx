import React from 'react';
import { render } from '@testing-library/react';
import Textarea from './Textarea';

describe('Textarea', () => {
  it('renders without errors', () => {
    const { container } = render(<Textarea />);
    expect(container).toBeInTheDocument();
  });

  it('renders with placeholder text', () => {
    const placeholder = 'Enter your text...';
    const { getByPlaceholderText } = render(<Textarea placeholder={placeholder} />);
    const textarea = getByPlaceholderText(placeholder);
    expect(textarea).toBeInTheDocument();
  });

  it('renders with disabled state', () => {
    const { getByPlaceholderText } = render(<Textarea isDisabled />);
    const textarea = getByPlaceholderText('');
    expect(textarea).toBeDisabled();
  });
});