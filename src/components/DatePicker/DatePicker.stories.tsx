import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DatePicker  from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
};
    
export default meta;

type Story = StoryObj<typeof DatePicker>;
  
export const Default: Story = {
     args: {
        marginBottom: '10px',
     },
};
