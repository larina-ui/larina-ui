import React from 'react';
import { Story, Meta } from '@storybook/react';
import Popover, {  PopoverProps } from './Popover';

export default {
  title: 'Components/Popover',
  component: Popover,
} as Meta;

const Template: Story<PopoverProps> = (args) => <Popover {...args} />;

export const Default = Template.bind({});
Default.args = {
  header: 'Popover Header',
  content: 'Popover Content',
  footer: 'Popover Footer',
};