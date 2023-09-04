import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DrawerProps } from './Drawer';
import Drawer from './Drawer';

export default {
  title: 'Components/Drawer',
  component: Drawer,
  argTypes: {
    isOpen: { control: 'boolean' },
    header: { control: 'text' },
    footer: { control: 'text' },
    overlayBgColor: { control: 'text' },
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
    py: { control: 'text'},
  },
} as Meta;

const Template: Story<DrawerProps> = (args) => <Drawer {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
  onClose: () => {},
  header: 'Drawer Header',
  footer: 'Drawer Footer',
  overlayBgColor: 'rgba(0, 0, 0, 0.5)',
};