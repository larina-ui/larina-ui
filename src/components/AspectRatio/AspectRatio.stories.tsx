import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import AspectRatio from './AspectRatio';

const meta: Meta<typeof AspectRatio> = {
    title: 'Components/AspectRatio',
    component: AspectRatio,
};

export default meta;

type Story = StoryObj<typeof AspectRatio>;
  
export const Default: Story = {
     args: {
        ratio:  1/2,
        children: <iframe
        title='naruto'
        src='https://www.youtube.com/embed/QhBnZ6NPOY0'
        allowFullScreen
      />,
        width: '100%',
     }
};