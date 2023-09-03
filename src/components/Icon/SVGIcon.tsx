import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { space, color, SpaceProps, ColorProps } from 'styled-system';
import type { SVGIconProps } from './types';

const StyledSVG = styled.svg<SVGIconProps>`
  ${space}
  ${color}
`;

const SVGIcon: React.FC<SVGIconProps> = ({ children, size = 24, ...rest }) => {

  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      {children}
    </StyledSVG>
  );
};


export default SVGIcon;