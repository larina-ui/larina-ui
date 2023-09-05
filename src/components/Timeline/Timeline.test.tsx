import React from 'react';
import { render } from '@testing-library/react';
import { Timeline } from './Timeline';

describe('Timeline', () => {
  it('renders correctly', () => {
    const items = [
      {
        title: 'Event 1',
        description: 'Description for Event 1',
        date: '2023-01-01',
      },
      {
        title: 'Event 2',
        description: 'Description for Event 2',
        date: '2023-02-01',
      },
      {
        title: 'Event 3',
        description: 'Description for Event 3',
        date: '2023-03-01',
      },
    ];

    const { container } = render(<Timeline items={items} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});