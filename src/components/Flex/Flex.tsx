import React, { ReactNode } from 'react';
import styled from 'styled-components';

type FlexProps = {
  direction?: 'row' | 'column';
  justifyContent?: string;
  alignItems?: string;
  children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
`;

const Flex: React.FC<FlexProps> = ({ direction, justifyContent, alignItems, children, ...rest }) => {
  return (
    <StyledFlex direction={direction} justifyContent={justifyContent} alignItems={alignItems} {...rest}>
      {children}
    </StyledFlex>
  );
};

export default Flex;