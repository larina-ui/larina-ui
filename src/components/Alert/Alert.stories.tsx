import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AlertProps } from './Alert';
import Alert from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['success', 'warning', 'error'],
      },
    },
    title: { control: 'text' },
    description: { control: 'text' },
    m: { control: 'text' },
    mt: { control: 'text' },
    mr: { control: 'text' },
    mb: { control: 'text' },
    ml: { control: 'text' },
    mx: { control: 'text' },
    my: { control: 'text' },
    p: { control: 'text' },
    pt: { control: 'text' },
    pr: { control: 'text' },
    pb: { control: 'text' },
    pl: { control: 'text' },
    px: { control: 'text' },
    py: { control: 'text' },
  },
} as Meta;

const Template: Story<AlertProps> = (args) => (
  <Alert {...args} statusIcon={<span>🚀</span>} />
);

export const Default = Template.bind({});
Default.args = {
  variant: 'success',
  title: 'Success!',
  description: 'This is a success alert.',
};