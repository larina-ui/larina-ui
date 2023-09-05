import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SkipNavContent, SkipNavContentProps } from './SkipNavContent';

export default {
  title: 'Components/SkipNavContent',
  component: SkipNavContent,
} as Meta;

const Template: Story<SkipNavContentProps> = (args) => <SkipNavContent {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'main-content',
  children: <p>Main content goes here</p>,
};