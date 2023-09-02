import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  color?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

const ButtonContainer = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  ${({ variant }) =>
    variant === 'primary'
      ? css`
          background-color: #007bff;
          color: #ffffff;
        `
      : css`
          background-color: #ffffff;
          color: #007bff;
          border: 1px solid #007bff;
        `};
  ${({ size }) =>
    size === 'small' &&
    css`
      padding: 4px 8px;
      font-size: 14px;
    `};
  ${({ size }) =>
    size === 'large' &&
    css`
      padding: 12px 24px;
      font-size: 18px;
    `};
  ${({ color }) =>
    color &&
    css`
      background-color: ${color};
    `};
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
    `};
`;

const ButtonIcon = styled.span`
  margin-right: 8px;
`;

const ButtonLoader = styled.span`
  margin-right: 8px;
  animation: spin 0.8s infinite linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  color,
  icon,
  disabled = false,
  loading = false,
  onClick,
  children,
}) => {
  const handleClick = () => {
    if (onClick && !disabled && !loading) {
      onClick();
    }
  };

  return (
    <ButtonContainer
      variant={variant}
      size={size}
      color={color}
      disabled={disabled || loading}
      onClick={handleClick}
    >
      {loading ? (
        <>
          <ButtonLoader>&#8987;</ButtonLoader>
          Loading...
        </>
      ) : (
        <>
          {icon && <ButtonIcon>{icon}</ButtonIcon>}
          {children}
        </>
      )}
    </ButtonContainer>
  );
};

export default Button;