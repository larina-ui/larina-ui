import type { Meta, StoryObj } from '@storybook/react';
import Center  from './Center';

const meta: Meta<typeof Center> = {
  title: 'Components/Center',
  component: Center,
};
    
export default meta;
type Story = StoryObj<typeof Center>;
  
export const Default: Story = {
     args: {
        children: 'Default Center',
        as: 'section',
        marginTop: 200,
        padding: 10,
        background: '#FF0000',
        border: '2px solid blue',
        color: 'white',
        height: '100px',
     }
};
