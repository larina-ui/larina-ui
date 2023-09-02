import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/manager-api';
import Switch  from './Switch';



const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
};
    
export default meta;
type Story = StoryObj<typeof Switch>;
  
export const Default: Story = {
     args: {
        variant: 'rounded',
        colorScheme: 'primary',
        checked: true,
        onChange: (value) => console.log(value)
     }
};
