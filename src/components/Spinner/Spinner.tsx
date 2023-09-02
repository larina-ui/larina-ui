import React from 'react';
import styled, { keyframes } from 'styled-components';

interface SpinnerProps {
  size?: number;
  color?: string;
}

const SpinnerContainer = styled.div<SpinnerProps>`
  display: inline-block;
  position: relative;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerItem = styled.div<SpinnerProps>`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: 4px solid ${({ color }) => color};
  border-radius: 50%;
  animation: ${spinAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${({ color }) => color} transparent transparent transparent;
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 40, color = '#000000' }) => {
  return (
    <SpinnerContainer size={size}>
      <SpinnerItem size={size} color={color} />
    </SpinnerContainer>
  );
};

export default Spinner;