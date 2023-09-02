import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { typography, color, ColorProps, TypographyProps } from 'styled-system'

export interface TextProps extends ColorProps, TypographyProps {
  children: ReactNode;
  as?: React.ElementType;
};

const Text = styled.span<TextProps>`
   ${typography}
   ${color}
`;

export default Text;