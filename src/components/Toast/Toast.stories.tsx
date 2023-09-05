import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Toast, ToastProps } from './Toast';

export default {
  title: 'Components/Toast',
  component: Toast,
} as Meta;

const Template: Story<ToastProps> = (args) => <Toast {...args} />;

export const Success = Template.bind({});
Success.args = {
  status: 'success',
  message: 'Success message',
  duration: 3000,
  closable: false,
};

export const Error = Template.bind({});
Error.args = {
  status: 'error',
  message: 'Error message',
  duration: 3000,
  closable: true,
};

export const Warning = Template.bind({});
Warning.args = {
  status: 'warning',
  message: 'Warning message',
  duration: 3000,
  closable: true,
};