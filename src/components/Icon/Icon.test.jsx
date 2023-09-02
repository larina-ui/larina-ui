// Icon.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import { FaReact } from 'react-icons/fa';
import Icon from './Icon';

describe('Icon', () => {
  it('renders correctly', () => {
    const { container } = render(<Icon icon={FaReact} size={24} color="red" />);
    expect(container.firstChild).toBeInTheDocument();
  });
});