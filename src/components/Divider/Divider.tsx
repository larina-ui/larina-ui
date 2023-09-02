import React from 'react';
import styled, { css } from 'styled-components';
import { space, color, ColorProps, SpaceProps } from 'styled-system';

type DividerVariant = 'solid' | 'dashed' | 'dotted';

type DividerOrientation = 'horizontal' | 'vertical';

type DividerProps = ColorProps & SpaceProps & {
  colorScheme?: string;
  size?: string;
  variant?: DividerVariant;
  orientation?: DividerOrientation;
};

const DividerContainer = styled.hr<DividerProps>`
  border: none;
  ${({ variant, theme }) => {
    if (variant === 'solid') {
      return css`
        border-top-width: 1px;
        border-top-style: solid;
      `;
    } else if (variant === 'dashed') {
      return css`
        border-top-width: 1px;
        border-top-style: dashed;
      `;
    } else if (variant === 'dotted') {
      return css`
        border-top-width: 1px;
        border-top-style: dotted;
      `;
    }
  }};
  ${({ orientation }) =>
    orientation === 'vertical' &&
    css`
      width: 1px;
      height: 50px;
    `};
  ${color};
  ${space};
`;

const Divider: React.FC<DividerProps> = ({ ...props }) => {
  return <DividerContainer {...props} />;
};

export default Divider;