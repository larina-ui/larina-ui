import React, { ReactNode } from 'react';
import styled from 'styled-components';

type StackProps = {
  children: ReactNode;
  direction?: 'horizontal' | 'vertical';
  spacing?: number;
  additionalProps?: (index: number, child: React.ReactNode) => object;
};

const StyledStack = styled.div<{ direction: string; spacing: number }>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => props.spacing}px;
`;

const Stack: React.FC<StackProps> = ({
  children,
  direction = 'vertical',
  spacing = 16,
  additionalProps,
}) => {
  return (
    <StyledStack direction={direction} spacing={spacing}>
      {React.Children.map(children, (child, index) =>
        React.isValidElement(child)
          ? React.cloneElement(child, additionalProps ? additionalProps(index, child) : {})
          : child
      )}
    </StyledStack>
  );
};

export default Stack;