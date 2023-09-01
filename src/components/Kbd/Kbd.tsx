import React, { ReactNode } from 'react';
import styled from 'styled-components';

type KbdProps = {
  children: ReactNode;
};

const StyledKbd = styled.kbd`
  display: inline-block;
  background-color: #f5f5f5;
  color: #333;
  border-radius: 3px;
  padding: 2px 5px;
  font-family: 'Courier New', Courier, monospace;
`;

const Kbd: React.FC<KbdProps> = ({ children }) => {
  return <StyledKbd>{children}</StyledKbd>;
};

export default Kbd;