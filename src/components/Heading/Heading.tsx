import React from 'react';
import styled from 'styled-components';
import { typography, color, ColorProps, TypographyProps, fontFamily, FontFamilyProps, fontSize, FontSizeProps, fontStyle, FontStyleProps } from 'styled-system'


export type HeadingProps = TypographyProps & {
  children: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};


const getFontSize = (level: number): string => {
  const sizes = ['2.5rem', '2rem', '1.8rem', '1.5rem', '1.3rem', '1.2rem'];
  return sizes[level - 1];
};

const getAs = (level: number): string => {
    const as = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    return as[level - 1];
  };

const Heading = styled.h1<HeadingProps>`
  ${typography}
`;



export default Heading;