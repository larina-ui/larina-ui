
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Textarea  from './Textarea';



const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
};
    
export default meta;

type Story = StoryObj<typeof Textarea>;
  
export const Default: Story = {
     args: {
        placeholder: 'Enter your text...',
     }
};

export const Primary: Story = {
    args: {
        variant: 'primary',
        placeholder: 'Enter your text...',
    }
};


export const Disabled: Story = {
    args: {
        isDisabled: true,
        placeholder: 'Disabled',
    }
};