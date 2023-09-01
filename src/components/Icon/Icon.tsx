import React from 'react';
import styled from 'styled-components';

type IconProps = {
  name: string;
  size?: number;
  color?: string;
};

const StyledIcon = styled.i<IconProps>`
  font-family: 'Material Icons';
  font-size: ${({ size }) => (size ? `${size}px` : '24px')};
  color: ${({ color }) => (color ? color : 'inherit')};
`;

const Icon: React.FC<IconProps> = ({ name, size, color }) => {
  return <StyledIcon size={size} color={color} name={name} />;
};

export default Icon;