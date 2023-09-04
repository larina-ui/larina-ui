import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { space, SpaceProps, layout, LayoutProps } from 'styled-system';

export interface SimpleGridProps extends SpaceProps, LayoutProps {
  columns: number;
  spacingX?: number;
  spacingY?: number;
  minChildWidth?: string;
  children: ReactNode;
}

const GridContainer = styled.div<SimpleGridProps>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, minmax(0, 1fr));
  grid-gap: ${({ spacingX = 0 }) => spacingX}px ${({ spacingY = 0 }) => spacingY}px;
  ${space}
  ${layout}

  > * {
    min-width: ${({ minChildWidth }) => minChildWidth || '0'};
  }
`;

const SimpleGrid: FC<SimpleGridProps> = ({
  columns,
  spacingX,
  spacingY,
  minChildWidth,
  children,
  ...rest
}) => {
  return (
    <GridContainer
      columns={columns}
      spacingX={spacingX}
      spacingY={spacingY}
      minChildWidth={minChildWidth}
      {...rest}
    >
      {children}
    </GridContainer>
  );
};

export default SimpleGrid;