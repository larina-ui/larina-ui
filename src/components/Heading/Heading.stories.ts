import type { Meta, StoryObj } from '@storybook/react';
import Heading  from './Heading';

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
};
    
export default meta;
type Story = StoryObj<typeof Heading>;
  
export const Default: Story = {
     args: {
       as: 'h2',
       children: "Default Heading 2",
       fontFamily: 'Tahoma',
       fontSize: 30,
       fontWeight: '700'
     }
};