import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Popover } from './Popover';

test('renders popover component', () => {
  const headerText = 'Popover Header';
  const contentText = 'Popover Content';
  const footerText = 'Popover Footer';
  const { getByText } = render(
    <Popover header={headerText} content={contentText} footer={footerText} />
  );

  expect(getByText(headerText)).toBeInTheDocument();
  expect(getByText(contentText)).toBeInTheDocument();
  expect(getByText(footerText)).toBeInTheDocument();
});

test('clicking toggle button should show/hide popover content', () => {
  const { getByText, queryByText } = render(<Popover content="Popover Content" />);
  const toggleButton = getByText('Toggle');

  fireEvent.click(toggleButton);

  expect(queryByText('Popover Content')).toBeInTheDocument();

  fireEvent.click(toggleButton);

  expect(queryByText('Popover Content')).not.toBeInTheDocument();
});