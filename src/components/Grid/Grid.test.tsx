import React from 'react';
import { render } from '@testing-library/react';
import { Grid } from './Grid';

describe('Grid', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Grid gap="10px" templateColumns="1fr 1fr" templateRows="auto" templateAreas="'a a' 'b c'">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Grid>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});