import React from 'react';
import { FaQuestion } from 'react-icons/fa';
import { space, color, layout } from 'styled-system';
import styled from 'styled-components';
import type { IconProps } from './types';

const StyledIcon = styled.span<IconProps>`
  ${space}
  ${color}
  ${layout}
`;

const Icon: React.FC<IconProps> = ({ icon: IconComponent, size = 24, ...props }) => {
  return <StyledIcon as={IconComponent} size={size} {...props} />;
};


Icon.defaultProps = {
    icon: FaQuestion
}

export default Icon;