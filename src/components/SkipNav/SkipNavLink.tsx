import React, { FC, AnchorHTMLAttributes } from 'react';
import styled from 'styled-components';
import { color, ColorProps } from 'styled-system';

const StyledLink = styled.a<ColorProps>`
  position: absolute;
  top: -40px;
  left: 0;
  padding: 8px;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s linear 0.3s, opacity 0.3s;

  &:focus {
    visibility: visible;
    opacity: 1;
    transition-delay: 0s;
  }

  ${color}
`;

export interface SkipNavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  color?: string;
}

export const SkipNavLink: FC<SkipNavLinkProps> = ({ label, color = 'white', ...rest }) => {
  return (
    <StyledLink href="#main-content" color={color} {...rest}>
      {label}
    </StyledLink>
  );
};