import React, { useState } from 'react';
import styled from 'styled-components';


interface MenuItem {
  label: string;
  onClick: () => void;
  subMenuItems?: MenuItem[];
}

interface MenuProps {
  items: MenuItem[];
}

const MenuContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItemContainer = styled.li`
  margin-bottom: 10px;
`;

const MenuItemButton = styled.button`
  background-color: #ffffff;
  border: none;
  padding: 10px;
  width: 100%;
  text-align: left;
  font-size: 16px;
  cursor: pointer;
`;

const SubMenuContainer = styled.ul`
  list-style: none;
  padding-left: 20px;
  margin: 0;
`;

const SubMenuItemContainer = styled.li`
  margin-bottom: 5px;
`;

const SubMenuItemButton = styled.button`
  background-color: #ffffff;
  border: none;
  padding: 5px;
  width: 100%;
  text-align: left;
  font-size: 14px;
  cursor: pointer;
`;

// Custom styled components for submenu elements
const CustomSubMenuContainer = styled(SubMenuContainer)`
  background-color: #f0f0f0;
  padding: 10px;
`;

const CustomSubMenuItemButton = styled(SubMenuItemButton)`
  background-color: #f0f0f0;
  color: #333333;
`;

const Menu: React.FC<MenuProps> = ({ items }) => {
  const [openSubMenuIndexes, setOpenSubMenuIndexes] = useState<number[]>([]);

  const handleMenuItemClick = (index: number) => {
    if (openSubMenuIndexes.includes(index)) {
      setOpenSubMenuIndexes((prevState) =>
        prevState.filter((item) => item !== index)
      );
    } else {
      setOpenSubMenuIndexes((prevState) => [...prevState, index]);
    }
  };

  const isSubMenuOpen = (index: number): boolean => {
    return openSubMenuIndexes.includes(index);
  };

  return (
    <MenuContainer>
      {items.map((item, index) => (
        <MenuItemContainer key={index}>
          <MenuItemButton onClick={() => handleMenuItemClick(index)}>
            {item.label}
          </MenuItemButton>
          {item.subMenuItems && isSubMenuOpen(index) && (
            <CustomSubMenuContainer>
              {item.subMenuItems.map((subItem, subIndex) => (
                <SubMenuItemContainer key={subIndex}>
                  <CustomSubMenuItemButton onClick={subItem.onClick}>
                    {subItem.label}
                  </CustomSubMenuItemButton>
                </SubMenuItemContainer>
              ))}
            </CustomSubMenuContainer>
          )}
        </MenuItemContainer>
      ))}
    </MenuContainer>
  );
};

export default Menu;