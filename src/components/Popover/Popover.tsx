import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';


const PopoverContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Header = styled.div<{ isOpen: boolean }>`
  padding: 8px;
  background-color: #eee;
  border-bottom: 1px solid #ccc;
  transition: height 0.3s ease-in-out;
  overflow: hidden;
  height: ${({ isOpen }) => (isOpen ? 'auto' : '0')};
`;

const Content = styled.div<{ isOpen: boolean }>`
  padding: 8px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  overflow: hidden;
`;

const Footer = styled.div<{ isOpen: boolean }>`
  padding: 8px;
  background-color: #eee;
  border-top: 1px solid #ccc;
  transition: height 0.3s ease-in-out;
  overflow: hidden;
  height: ${({ isOpen }) => (isOpen ? 'auto' : '0')};
`;


interface ToggleButtonProps extends SpaceProps {

}
const ToggleButton = styled.button<ToggleButtonProps>`
  padding: 8px;
  font-weight: bold;
  border: none;
  background-color: #ccc;
  color: #000;
  ${space};
`;

export interface PopoverProps {
  header?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
}

 const Popover: FC<PopoverProps> = ({ header, content, footer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <PopoverContainer>
      <ToggleButton onClick={togglePopover} mx={1}>
        Toggle
      </ToggleButton>
      <Header isOpen={isOpen}>{header}</Header>
      <Content isOpen={isOpen}>{content}</Content>
      <Footer isOpen={isOpen}>{footer}</Footer>
    </PopoverContainer>
  );
};


export default Popover