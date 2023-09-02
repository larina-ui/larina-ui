import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Text  from './Text';
import Box from '../Box';


const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
};
    
export default meta;
type Story = StoryObj<typeof Text>;
  
export const Default: Story = {
     args: {
       children: "Text"
     }
};

export const Features: Story = {
    render: () => {
        return(
            <Box as="div" border="1px solid gray" padding={20}>
                <Text as="p" fontStyle="italic">Italic</Text>
                <Text as="p" color="red">Red</Text>
                <Text as="p" fontSize={30}>Font Size 30px</Text>
            </Box>
        );
    }
};