import React, { ReactNode } from 'react';
import styled from 'styled-components';

type CenterProps = {
  children: ReactNode;
  horizontally?: boolean;
  vertically?: boolean;
  backgroundColor?: string;
};

const StyledCenter = styled.div<CenterProps>`
  display: flex;
  justify-content: ${({ horizontally }) => (horizontally ? 'center' : 'initial')};
  align-items: ${({ vertically }) => (vertically ? 'center' : 'initial')};
  height: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
`;

const Center: React.FC<CenterProps> = ({ children, horizontally = true, vertically = true, backgroundColor }) => {
  return <StyledCenter horizontally={horizontally} vertically={vertically} backgroundColor={backgroundColor}>{children}</StyledCenter>;
};

export default Center;