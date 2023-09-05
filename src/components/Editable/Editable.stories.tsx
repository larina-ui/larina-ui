import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Editable, EditableProps } from './Editable';

export default {
  title: 'Components/Editable',
  component: Editable,
} as Meta;

const Template: Story<EditableProps> = (args) => <Editable {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialValue: 'Editable Content',
};