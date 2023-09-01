import React, { useState } from 'react';
import styled, { css } from 'styled-components';

type InputProps = {
  size?: 'small' | 'medium' | 'large';
  hasFocus?: boolean;
};

const InputBase = styled.input<InputProps>`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;

  ${({ size }) =>
    size === 'small'
      ? css`
          padding: 4px;
          font-size: 12px;
        `
      : size === 'large'
      ? css`
          padding: 12px;
          font-size: 16px;
        `
      : null}

  ${({ hasFocus }) =>
    hasFocus &&
    css`
      border-color: blue;
      box-shadow: 0 0 3px blue;
    `}
`;

const Input: React.FC<InputProps> = ({ size, hasFocus, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <InputBase
      size={size}
      hasFocus={isFocused || hasFocus}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...rest}
    />
  );
};

export default Input;