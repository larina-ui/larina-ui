import React from 'react';
import { render } from '@testing-library/react';
import { SkipNavLink } from './SkipNavLink';

describe('SkipNavLink', () => {
  test('renders skip nav link component', () => {
    const { getByText } = render(<SkipNavLink label="Skip to Content" />);
    const linkElement = getByText('Skip to Content');

    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute('href')).toBe('#main-content');
  });

  test('applies custom color to skip nav link', () => {
    const { getByText } = render(<SkipNavLink label="Skip to Content" color="red" />);
    const linkElement = getByText('Skip to Content');

    expect(linkElement).toHaveStyle('color: red');
  });
});