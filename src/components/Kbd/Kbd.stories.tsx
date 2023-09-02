import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Kbd  from './Kbd';

const meta: Meta<typeof Kbd> = {
  title: 'Components/Kbd',
  component: Kbd,
};
    
export default meta;
type Story = StoryObj<typeof Kbd>;
  
export const Default: Story = {
     render: () => {
      return(
        <div>

        <div>
          <Kbd>shift</Kbd> + <Kbd>H</Kbd>
        </div>

        <div>
          <Kbd>alt</Kbd> or <Kbd>option</Kbd>
        </div>

        </div>

      )
     }
};