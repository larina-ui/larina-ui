import type { Meta, StoryObj } from '@storybook/react';
import Menu  from './Menu';


const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
};
    
export default meta;
type Story = StoryObj<typeof Menu>;


const handleMenuItemClick = () => {
    alert('Menu item clicked!');
  };

  const menuItems = [
    {
      label: 'Item 1',
      onClick: handleMenuItemClick,
      subMenuItems: [
        {
          label: 'Subitem 1',
          onClick: handleMenuItemClick,
          subMenuItems: [
            { label: 'Subitem 1.1', onClick: handleMenuItemClick },
            { label: 'Subitem 1.2', onClick: handleMenuItemClick },
          ],
        },
        { label: 'Subitem 2', onClick: handleMenuItemClick },
      ],
    },
    {
      label: 'Item 2',
      onClick: handleMenuItemClick,
      subMenuItems: [
        { label: 'Subitem 3', onClick: handleMenuItemClick },
        {
          label: 'Subitem 4',
          onClick: handleMenuItemClick,
          subMenuItems: [
            { label: 'Subitem 4.1', onClick: handleMenuItemClick },
            { label: 'Subitem 4.2', onClick: handleMenuItemClick },
          ],
        },
      ],
    },
    { label: 'Item 3', onClick: handleMenuItemClick },
  ];

  
export const Default: Story = {
    
     args: {
        items: menuItems,

     }
};
