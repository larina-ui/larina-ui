import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { space, SpaceProps, layout, LayoutProps, grid, GridProps } from 'styled-system';

interface GridContainerProps extends SpaceProps, LayoutProps, GridProps {
  gap?: string;
  templateColumns?: string;
  templateRows?: string;
  templateAreas?: string;
}

const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  ${({ gap }) => gap && `gap: ${gap};`}
  ${({ templateColumns }) => templateColumns && `grid-template-columns: ${templateColumns};`}
  ${({ templateRows }) => templateRows && `grid-template-rows: ${templateRows};`}
  ${({ templateAreas }) => templateAreas && `grid-template-areas: ${templateAreas};`}
  ${space}
  ${layout}
  ${grid}
`;

export interface MyGridProps extends GridContainerProps {
  children?: ReactNode;
}

export const Grid: FC<MyGridProps> = ({ children, ...rest }) => {
  return <GridContainer {...rest}>{children}</GridContainer>;
};