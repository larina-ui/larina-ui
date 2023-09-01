import React, { ReactNode } from 'react';
import styled from 'styled-components';

type CodeProps = {
  children: ReactNode;
};

const StyledCode = styled.code`
  background-color: #f5f5f5;
  color: #333;
  padding: 0.5em;
  font-family: 'Courier New', Courier, monospace;
`;

const Code: React.FC<CodeProps> = ({ children }) => {
  return <StyledCode>{children}</StyledCode>;
};

export default Code;