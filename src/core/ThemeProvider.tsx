import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';


type ThemeProviderProps = {
  theme: any;  
  children: React.ReactNode;
};

const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;