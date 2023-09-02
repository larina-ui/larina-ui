import React, { ReactNode } from 'react';
import styled from 'styled-components';

type KbdProps = {
  children: ReactNode;
};

const Kbd = styled.kbd<KbdProps>`
  display: inline-block;
  background-color: #f5f5f5;
  color: #333;
  border-radius: 3px;
  padding: 2px 5px;
  font-family: 'Courier New', Courier, monospace;
`;

export default Kbd;