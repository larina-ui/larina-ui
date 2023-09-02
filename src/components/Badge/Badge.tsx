import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { variant, space, color, ColorProps, SpaceProps, VariantArgs } from 'styled-system';

type BadgeVariant = 'default' | 'primary' | 'secondary';

export type BadgeProps = ColorProps & SpaceProps & {
  variant?: BadgeVariant;
  size?: string;
  children: ReactNode;
};

const variantStyles: VariantArgs<BadgeVariant> = {
  default: {
    backgroundColor: 'gray',
    color: 'white',
  },
  primary: {
    backgroundColor: 'blue',
    color: 'white',
  },
  secondary: {
    backgroundColor: 'green',
    color: 'white',
  },
};

const BadgeContainer = styled.span<BadgeProps>`
  display: inline-block;
  padding: 0.25em 0.5em;
  border-radius: 9999px;
  font-size: ${({ size }) => size || '14px'};
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  ${color};
  ${space};
  ${variant({ variants: variantStyles })};
`;

const Badge: React.FC<BadgeProps> = ({ children, ...props }) => {
  return <BadgeContainer {...props}>{children}</BadgeContainer>;
};

export default Badge;