import React from 'react';
import styled, { css } from 'styled-components';
import { variant, space, color, ColorProps, SpaceProps } from 'styled-system';

type TextareaVariant = 'default' | 'primary' | 'secondary';

type TextareaProps = ColorProps & SpaceProps & {
  variant?: TextareaVariant;
  size?: string;
  placeholder?: string;
  isRequired?: boolean;
  isReadonly?: boolean;
  isDisabled?: boolean;
};

const TextareaContainer = styled.textarea<TextareaProps>`
  display: block;
  width: 100%;
  padding: 8px;
  font-family: inherit;
  font-size: inherit;
  border: 1px solid;
  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.6;
      pointer-events: none;
    `};
  ${variant({
    variants: {
      default: {
        borderColor: 'gray',
      },
      primary: {
        borderColor: 'blue',
      },
      secondary: {
        borderColor: 'green',
      },
    },
  })};
  ${space};
  ${color};
`;

const Textarea: React.FC<TextareaProps> = ({
  variant = 'default',
  size,
  isRequired = false,
  isReadonly = false,
  isDisabled = false,
  placeholder = '',
  ...props
}) => {
  return (
    <TextareaContainer
      variant={variant}
      size={size}
      isRequired={isRequired}
      readOnly={isReadonly}
      disabled={isDisabled}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Textarea;