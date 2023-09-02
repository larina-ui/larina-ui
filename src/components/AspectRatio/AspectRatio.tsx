import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { width, WidthProps } from 'styled-system';

export type AspectRatioProps = WidthProps & {
  ratio: number;
  children: ReactNode;
};

const AspectRatioContainer = styled.div<AspectRatioProps>`
  position: relative;
  width: 100%;
  ${({ ratio }) => `padding-bottom: ${100 / ratio}%`};
`;

const AspectRatioContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${width}
`;

const AspectRatio: React.FC<AspectRatioProps> = ({ ratio, children, ...props }) => {
  return (
    <AspectRatioContainer ratio={ratio} {...props}>
      <AspectRatioContent>{children}</AspectRatioContent>
    </AspectRatioContainer>
  );
};

export default AspectRatio;