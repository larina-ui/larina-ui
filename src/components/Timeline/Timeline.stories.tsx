import React from 'react';
import { Story, Meta } from '@storybook/react';
import Timeline , { TimelineProps } from './Timeline';

export default {
  title: 'Components/Timeline',
  component: Timeline,
} as Meta;

const Template: Story<TimelineProps> = (args) => (
  <Timeline {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  items: [
    {
      title: 'Event 1',
      description: 'Description for Event 1',
      date: '2023-01-01',
    },
    {
      title: 'Event 2',
      description: 'Description for Event 2',
      date: '2023-02-01',
    },
    {
      title: 'Event 3',
      description: 'Description for Event 3',
      date: '2023-03-01',
    },
  ],
};