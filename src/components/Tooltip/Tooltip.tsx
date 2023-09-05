import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { CSSTransition } from 'react-transition-group';

export interface TooltipProps extends SpaceProps {
  text: string;
  children: ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  hasArrow?: boolean;
}

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipText = styled.div<{ placement?: string }>`
  position: absolute;
  padding: 8px;
  background-color: #000;
  color: #fff;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.5s ease-in-out; /* Update the transition duration here */
  z-index: 9999;

  &.tooltip-enter {
    opacity: 0;
  }

  &.tooltip-enter-active {
    opacity: 1;
  }

  &.tooltip-exit {
    opacity: 1;
  }

  &.tooltip-exit-active {
    opacity: 0;
  }

  ${({ placement }) => {
    switch (placement) {
      case 'top':
        return `
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
        `;
      case 'bottom':
        return `
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
        `;
      case 'left':
        return `
          top: 50%;
          right: 100%;
          transform: translateY(-50%);
        `;
      case 'right':
        return `
          top: 50%;
          left: 100%;
          transform: translateY(-50%);
        `;
      default:
        return '';
    }
  }}
`;

const TooltipArrow = styled.div<{ placement?: string }>`
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: #000;
  transform: rotate(45deg);

  ${({ placement }) => {
    switch (placement) {
      case 'top':
        return `
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
        `;
      case 'bottom':
        return `
          top: -4px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
        `;
      case 'left':
        return `
          top: 50%;
          right: -4px;
          transform: translateY(-50%) rotate(45deg);
        `;
      case 'right':
        return `
          top: 50%;
          left: -4px;
          transform: translateY(-50%) rotate(45deg);
        `;
      default:
        return '';
    }
  }}
`;

 const Tooltip: FC<TooltipProps> = ({ text, children, placement = 'top', hasArrow = false, ...rest }) => {
  return (
    <TooltipContainer>
      {children}
      <CSSTransition in={true} timeout={300} classNames="tooltip" unmountOnExit>
        <TooltipText placement={placement} {...rest}>
          {hasArrow && <TooltipArrow placement={placement} />}
          {text}
        </TooltipText>
      </CSSTransition>
    </TooltipContainer>
  );
};


export default Tooltip;