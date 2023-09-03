import { space, color, layout, SpaceProps, ColorProps, LayoutProps } from 'styled-system';
import { IconType } from 'react-icons';

export type IconProps = SpaceProps & ColorProps & LayoutProps & {
    icon?: IconType;
    size?: number | string;
  };
  
export type SVGIconProps =  SpaceProps & ColorProps & {
    size?: number;
    children?: React.ReactNode;
  }