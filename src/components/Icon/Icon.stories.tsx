import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FaReact, FaGithub, FaAd } from 'react-icons/fa';
import Icon from './Icon';
import { AddIcon } from './Icons';

const meta: Meta<typeof Icon> = {
    title: 'Components/Icon',
    component: Icon,
};
      
export default meta;

type Story = StoryObj<typeof Icon>;
  
export const ThirdParty = {
     render: () => (
        <div>
        <Icon icon={FaReact} size={32} color="blue" mr={2} />
        <Icon icon={FaGithub} size={24} color="black" mr={2} />
        <Icon icon={FaAd} size={24} color="orange" mr={2} />
        <Icon />
      </div>
     )
};


export const Core = {
  render: () => (
     <div>
     <AddIcon size={128} color="red" />
   </div>
  )
};