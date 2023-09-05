import React from 'react';
import { render } from '@testing-library/react';
import { SkipNavContent } from './SkipNavContent';

describe('SkipNavContent', () => {
  test('renders main content container', () => {
    const { getByText } = render(
      <SkipNavContent id="main-content">
        <p>Main content goes here</p>
      </SkipNavContent>
    );
    const contentElement = getByText('Main content goes here');

    expect(contentElement).toBeInTheDocument();
    expect(contentElement.parentElement?.getAttribute('id')).toBe('main-content');
  });
});