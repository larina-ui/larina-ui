import React from 'react';
import { render } from '@testing-library/react';
import Alert from './Alert';

test('renders alert component with title and description', () => {
  const { getByText } = render(
    <Alert variant="success" title="Success!" description="This is a success alert." statusIcon={<span>🚀</span>} />
  );

  expect(getByText('Success!')).toBeInTheDocument();
  expect(getByText('This is a success alert.')).toBeInTheDocument();
});

test('renders alert component without description', () => {
  const { getByText, queryByText } = render(
    <Alert variant="warning" title="Warning!" statusIcon={<span>⚠️</span>} />
  );

  expect(getByText('Warning!')).toBeInTheDocument();
  expect(queryByText('This is a success alert.')).toBeNull();
});