import React, { ReactNode } from 'react';
import styled from 'styled-components';

type ContainerProps = {
  children: ReactNode,
  maxWidth?: string;
  padding?: string;
  className?: string;
  style?: React.CSSProperties;
};

const StyledContainer = styled.div<ContainerProps>`
  max-width: ${(props) => props.maxWidth || '1200px'};
  padding: ${(props) => props.padding || '0'};
  margin-left: auto;
  margin-right: auto;
  ${(props: any) => props.style};
`;

const Container: React.FC<ContainerProps> = ({ maxWidth, padding, className, style, children }) => {
  return (
    <StyledContainer
      maxWidth={maxWidth}
      padding={padding}
      className={className}
      style={style}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;