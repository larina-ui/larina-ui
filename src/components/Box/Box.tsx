import React from 'react';
import styled from 'styled-components';

type BoxProps = {
  width?: string;
  height?: string;
  backgroundColor?: string;
  children: any,
  style?: React.CSSProperties;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const StyledBox = styled.div<BoxProps>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
`;

const Box: React.FC<BoxProps> = ({ width, height, backgroundColor, style, children, className, ...rest }) => {
  return (
    <StyledBox
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      style={style}
      className={className}
      {...rest}
    >
      {children}
    </StyledBox>
  );
};

export default Box;