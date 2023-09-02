import React from 'react';
import styled, { css } from 'styled-components';

interface SwitchProps {
  checked: boolean;
  colorScheme?: 'default' | 'primary' | 'secondary';
  variant?: 'default' | 'rounded';
  onChange: (checked: boolean) => void;
}

const SwitchContainer = styled.label<SwitchProps>`
  display: inline-flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  user-select: none;
`;

const SwitchInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const SwitchSlider = styled.span<SwitchProps>`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
  border-radius: 12px;
  background-color: silver;
  transition: background-color 0.3s ease;

  ${({ variant }) =>
    variant === 'rounded' &&
    css`
      border-radius: 16px;
    `};

  &:before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: pink;
    transition: transform 0.3s ease;
    transform: translateX(${({ checked }) => (checked ? 'calc(100% - 20px)' : '0')});
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
`;

const Switch: React.FC<SwitchProps> = ({
  checked,
  colorScheme = 'default',
  variant = 'default',
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <SwitchContainer>
      <SwitchInput type="checkbox" checked={checked} onChange={handleChange} />
      <SwitchSlider checked={checked} colorScheme={colorScheme} variant={variant} />
    </SwitchContainer>
  );
};

export default Switch;