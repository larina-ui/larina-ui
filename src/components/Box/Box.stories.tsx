import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Box  from './Box';

const meta: Meta<typeof Box> = {
  title: 'Components/Box',
  component: Box,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },

};
    
export default meta;
type Story = StoryObj<typeof Box>;
  
export const Default: Story = {
     args: {
        children: 'Default Box',
        as: 'section',
        marginTop: 200,
        padding: 10,
        background: '#FF0000',
        border: '2px solid red',
        color: 'white',
     },
     render: (args) => <Box {...args}>Hello</Box>
};

export const Blue: Story = {
    args: {
       children: 'Default Box',
       as: 'section',
       marginTop: 200,
       padding: 10,
       background: 'blue',
       border: '2px solid red',
       color: 'white',
    }
};