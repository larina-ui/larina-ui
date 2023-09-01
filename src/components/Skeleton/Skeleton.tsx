import React from 'react';
import styled, { keyframes } from 'styled-components';

type SkeletonProps = {
  width?: string;
  height?: string;
  borderRadius?: string;
  animationDuration?: string;
  backgroundColor?: string;
  animationTimingFunction?: string;
};

const pulseAnimation = keyframes`
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.6;
  }
`;

const SkeletonElement = styled.div<SkeletonProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor || '#f2f2f2'};
  animation: ${pulseAnimation} ${(props) => props.animationDuration || '1s'}
    ${(props) => props.animationTimingFunction || 'ease-in-out'} infinite;
`;

const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  borderRadius,
  animationDuration,
  backgroundColor,
  animationTimingFunction,
}) => {
  return (
    <SkeletonElement
      width={width}
      height={height}
      borderRadius={borderRadius}
      animationDuration={animationDuration}
      backgroundColor={backgroundColor}
      animationTimingFunction={animationTimingFunction}
    />
  );
};

export default Skeleton;