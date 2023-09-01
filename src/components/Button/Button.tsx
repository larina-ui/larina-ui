import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
  children: ReactNode
};

const ButtonBase = styled.button<ButtonProps>`
  display: inline-block;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;

  ${({ variant }) =>
    variant === 'primary'
      ? css`
        background-color: ${(props) => props.theme.colors.primary};
        border-color: ${(props) => props.theme.colors.primary};
        color: #fff;

        `
      : css`
          background-color: #f5f5f5;
          color: #333;
        `}

  ${({ size }) =>
    size === 'small'
      ? css`
          padding: 6px 12px;
          font-size: 12px;
        `
      : size === 'large'
      ? css`
          padding: 10px 20px;
          font-size: 16px;
        `
      : null}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}

  &:hover {
    ${({ variant, disabled }) =>
      !disabled &&
      css`
        background-color: ${variant === 'primary' ? '#0056b3' : '#e6e6e6'};
      `}
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.4);
  }
`;

const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'medium', onClick, disabled, children }) => {
  const handleClick = () => {
    if (disabled) return;
    if (onClick) onClick();
  };

  return (
    <ButtonBase variant={variant} size={size} onClick={handleClick} disabled={disabled}>
      {children}
    </ButtonBase>
  );
};

export default Button;