import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SkipNavLink, SkipNavLinkProps } from './SkipNavLink';

export default {
  title: 'Components/SkipNavLink',
  component: SkipNavLink,
} as Meta;

const Template: Story<SkipNavLinkProps> = (args) => <SkipNavLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Skip to Content',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  label: 'Skip to Content',
  color: 'red',
};