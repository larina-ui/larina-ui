import React from 'react';
import { Story, Meta } from '@storybook/react';
import Stepper, { StepperProps } from './Stepper';

export default {
  title: 'Components/Stepper',
  component: Stepper,
} as Meta;

const Template: Story<StepperProps> = (args) => <Stepper {...args} />;

export const Default = Template.bind({});
Default.args = {
  steps: ['Step 1', 'Step 2', 'Step 3'],
};