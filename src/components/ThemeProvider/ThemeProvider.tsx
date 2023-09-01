import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export type ThemeType = {
  colors: {
    primary: string;
    secondary: string;
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
  };
};

export const theme: ThemeType = {
  colors: {
    primary: '#ff0000',
    secondary: '#00ff00',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
};

type ThemeProviderProps = {
  theme: any;  
  children: React.ReactNode;
};

const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;