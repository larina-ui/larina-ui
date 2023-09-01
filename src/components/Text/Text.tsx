import styled from 'styled-components';

type TextProps = {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  weight?: 'normal' | 'bold';
  italic?: boolean;
  underline?: boolean;
};

const Text = styled.p<TextProps>`
  font-size: ${({ size }) => {
    switch (size) {
      case 'small':
        return '0.8rem';
      case 'large':
        return '1.2rem';
      default:
        return '1rem';
    }
  }};
  color: ${({ color }) => color || '#333'};
  font-weight: ${({ weight }) => (weight === 'bold' ? 'bold' : 'normal')};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
`;

export default Text;