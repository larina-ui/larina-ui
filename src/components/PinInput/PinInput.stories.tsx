import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import PinInput  from './PinInput';

const meta: Meta<typeof PinInput> = {
  title: 'Components/PinInput',
  component: PinInput,
};
    
export default meta;
type Story = StoryObj<typeof PinInput>;
  
export const Default: Story = {
     args: {
      length: 4,
     }
};
