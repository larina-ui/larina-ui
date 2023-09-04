import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SimpleGridProps } from './SimpleGrid';
import SimpleGrid from './SimpleGrid';

export default {
  title: 'Components/SimpleGrid',
  component: SimpleGrid,
  argTypes: {
    columns: { control: 'number' },
    spacingX: { control: 'number' },
    spacingY: { control: 'number' },
    minChildWidth: { control: 'text' },
    m: { control: 'text' },
    mt: { control: 'text' },
    mr: { control: 'text' },
    mb: { control: 'text' },
    ml: { control: 'text' },
    mx: { control: 'text' },
    my: { control: 'text' },
    p: { control: 'text' },
    pt: { control: 'text' },
    pr: { control: 'text' },
    pb: { control: 'text' },
    pl: { control: 'text' },
    px: { control: 'text' },
    py: { control: 'text' },
  },
} as Meta;

const Template: Story<SimpleGridProps> = (args) => (
  <SimpleGrid {...args}>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
  </SimpleGrid>
);

export const Default = Template.bind({});
Default.args = {
  columns: 2,
  spacingX: 16,
  spacingY: 16,
};