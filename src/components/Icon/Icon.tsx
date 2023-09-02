import React from 'react';
import { IconType } from 'react-icons';
import { FaQuestion } from 'react-icons/fa';
import { space, color, layout, SpaceProps, ColorProps, LayoutProps } from 'styled-system';
import styled from 'styled-components';

export type IconProps = SpaceProps & ColorProps & LayoutProps & {
  icon?: IconType;
  size?: number | string;
};

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