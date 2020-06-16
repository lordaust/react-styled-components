import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: {
      dark: '#03a9f4',
      darker: '#29b6f6',
      base: '#4fc3f7',
      lighter: '#81d4fa',
      light: '#b3e5fc',
    },
    secondary: {
      dark: '#2e7d32',
      darker: '#43a047',
      base: '#66bb6a',
      lighter: '#a5d6a7',
      light: '#c8e6c9',
    },
    tertiary: {
      dark: '#fb8c00',
      darker: '#ffa726',
      base: '#ffcc80',
      lighter: '#ffe0b2',
      light: '#fff3e0',
    },
    success: {
      dark: '#1b5e20 ',
      darker: '#2e7d32',
      base: '#388e3c',
      lighter: '#43a047',
      light: '#4caf50',
    },
    danger: {
      dark: '#b71c1c',
      darker: '#c62828',
      base: '#d32f2f',
      lighter: '#e53935',
      light: '#f44336',
    },
    warning: {
      dark: '#ff5722',
      darker: '#ff7043',
      base: '#ff8a65',
      lighter: '#ffab91',
      light: '#ffccbc',
    },
    action: {
      dark: '#263238',
      darker: '#455a64',
      base: '#607d8b',
      lighter: '#78909c',
      light: '#b0bec5',
    },
    grayscale: {
      dark: '#000000',
      darker: '#424242',
      base: '#9e9e9e',
      lighter: '#eeeeee',
      light: '#ffffff',
    },
  },
  spacing: {
    none: '0px',
    microscopic: '1px',
    tiny: '2px',
    xsmall: '5px',
    small: '10px',
    medium: '15px',
    large: '30px',
    xlarge: '50px',
    huge: '80px',
    humongous: '100px',
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    none: '0rem',
    microscopic: '0.5rem',
    tiny: '1rem',
    xsmall: '1.5rem',
    small: '2rem',
    medium: '3rem',
    large: '3.5rem',
    xlarge: '3rem',
    huge: '5rem',
    humongous: '8rem',
  },
  breakpoints: {
    xsmall: '370px',
    small: '768px',
    medium: '840px',
    large: '1024px',
    xlarge: '1280px',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
