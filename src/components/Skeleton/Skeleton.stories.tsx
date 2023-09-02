import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Skeleton from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
};
    
export default meta;

type Story = StoryObj<typeof Skeleton>;
  
export const Default: Story = {
     render: () => {
      return(
        <div>
        <Skeleton width="200px" height="20px" borderRadius="4px" />
        <Skeleton
          width="300px"
          height="10px"
          borderRadius="2px"
          animationDuration="0.8s"
          backgroundColor="#ddd"
          animationTimingFunction="linear"
        />
      </div>
      );
     }
};