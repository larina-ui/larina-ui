import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Grid, MyGridProps as GridProps } from './Grid';

export default {
  title: 'Components/Grid',
  component: Grid,
} as Meta;

const Template: Story<GridProps> = (args) => (
  <Grid {...args}>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </Grid>
);

export const Basic = Template.bind({});
Basic.args = {
  gap: '10px',
  templateColumns: '1fr 1fr 1fr',
};