import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Progress, { ProgressProps } from './Progress';

export default {
  title: 'Components/Progress',
  component: Progress,
} as Meta;

type Story = StoryObj<typeof Progress>;
  
export const Default: Story = {
     args: {
        value: 50,
     }
};

export const Indeterminate: Story = {
    args: {
        value: 0,
        isIndeterminate: true,
        isAnimated: true,
    }
};

export const Striped: Story = {
    args: {
        value: 75,
        hasStripe: true,
    }
};

export const CustomColors: Story = {
    args: {
        value: 25,
        colorScheme: 'red',
        variant: 'primary',
    }
};