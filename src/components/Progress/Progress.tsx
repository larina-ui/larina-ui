import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { variant, space, color, ColorProps, SpaceProps } from 'styled-system';

type ProgressVariant = 'default' | 'primary' | 'secondary';

export type ProgressProps = ColorProps & SpaceProps & {
  variant?: ProgressVariant;
  max?: number;
  min?: number;
  value: number;
  size?: string;
  colorScheme?: string;
  isIndeterminate?: boolean;
  isAnimated?: boolean;
  hasStripe?: boolean;
};

const stripeAnimation = keyframes`
  to {
    background-position: 200% center;
  }
`;

const ProgressContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 1rem;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 9999px;
`;

const ProgressBar = styled.div<ProgressProps>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  ${({ isIndeterminate, isAnimated, hasStripe }) =>
    isIndeterminate &&
    css`
      width: 100%;
      animation: ${isAnimated ? css`${stripeAnimation} 1.5s linear infinite` : 'none'};
      background-image: linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.15) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.15) 50%,
        rgba(255, 255, 255, 0.15) 75%,
        transparent 75%,
        transparent
      );
      background-size: 1rem 1rem;
      ${hasStripe &&
      css`
        background-image: linear-gradient(
          45deg,
          rgba(255, 255, 255, 0.15) 25%,
          transparent 25%,
          transparent 50%,
          rgba(255, 255, 255, 0.15) 50%,
          rgba(255, 255, 255, 0.15) 75%,
          transparent 75%,
          transparent
        );
        background-size: 1rem 1rem;
        background-color: ${({ theme }) => theme.colors.gray};
      `};
    `};
  ${variant({
    variants: {
      default: {
        backgroundColor: 'blue',
      },
      primary: {
        backgroundColor: 'green',
      },
      secondary: {
        backgroundColor: 'orange',
      },
    },
  })};
  ${color}
  ${space};
`;

const Progress: React.FC<ProgressProps> = ({
  variant = 'default',
  max = 100,
  min = 0,
  value,
  size = '1rem',
  colorScheme,
  isIndeterminate = false,
  isAnimated = false,
  hasStripe = false,
  ...props
}) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <ProgressContainer>
      <ProgressBar
        variant={variant}
        width={`${percentage}%`}
        size={size}
        colorScheme={colorScheme}
        isIndeterminate={isIndeterminate}
        isAnimated={isAnimated}
        hasStripe={hasStripe}
        {...props}
      />
    </ProgressContainer>
  );
};

export default Progress;