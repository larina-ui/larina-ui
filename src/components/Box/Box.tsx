import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { space, layout, border, typography, grid, shadow, color, position, background, flexbox, BackgroundProps,  SpaceProps, LayoutProps, PositionProps, ColorProps, BorderProps, FlexboxProps, TypographyProps, GridProps, ShadowProps } from 'styled-system'

export interface BoxProps extends SpaceProps, LayoutProps, PositionProps, BackgroundProps, BorderProps, FlexboxProps, ColorProps, TypographyProps, GridProps, ShadowProps {
  children: ReactNode,
  as?: React.ElementType;
};

const Box = styled.div<BoxProps>`
    ${space}
    ${layout}
    ${position}
    ${background}
    ${border}
    ${flexbox}
    ${color}
    ${shadow}
    ${grid}
    ${typography}
`;


export default Box;