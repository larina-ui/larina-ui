import React, { ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

type TooltipProps = {
  text: string;
  children: ReactNode;
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipText = styled.span`
  visibility: hidden;
  background-color: #000;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 4px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  animation: ${fadeIn} 0.3s linear forwards;

  ${TooltipContainer}:hover & {
    visibility: visible;
  }
`;

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  return (
    <TooltipContainer>
      {children}
      <TooltipText>{text}</TooltipText>
    </TooltipContainer>
  );
};

export default Tooltip;