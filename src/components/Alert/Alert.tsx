import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type AlertProps = {
  variant: 'success' | 'warning' | 'danger' | 'info';
  padding?: string;
  borderRadius?: string;
  backgroundColor?: string;
  textColor?: string;
  children: ReactNode;
};

const AlertBase = styled.div<AlertProps>`
  padding: ${({ padding }) => padding || '16px'};
  border-radius: ${({ borderRadius }) => borderRadius || '4px'};
  font-size: 14px;

  ${({ variant, backgroundColor, textColor }) =>
    css`
      background-color: ${backgroundColor || getBackgroundColor(variant)};
      color: ${textColor || getTextColor(variant)};
    `}
`;

const getBackgroundColor = (variant: string) => {
  switch (variant) {
    case 'success':
      return '#d4edda';
    case 'warning':
      return '#fff3cd';
    case 'danger':
      return '#f8d7da';
    case 'info':
      return '#d1ecf1';
    default:
      return '#ffffff';
  }
};

const getTextColor = (variant: string) => {
  switch (variant) {
    case 'success':
      return '#155724';
    case 'warning':
      return '#856404';
    case 'danger':
      return '#721c24';
    case 'info':
      return '#0c5460';
    default:
      return '#333333';
  }
};

const Alert: React.FC<AlertProps> = ({
  variant,
  padding,
  borderRadius,
  backgroundColor,
  textColor,
  children,
}) => {
  return (
    <AlertBase
      variant={variant}
      padding={padding}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      {children}
    </AlertBase>
  );
};

export default Alert;