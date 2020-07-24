import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, themeDefault } from '../components/particles';

configure(require.context('../components', true, /\.stories\.js$/), module);

const GlobalWrapper = (storyFn) => (
  <ThemeProvider theme={themeDefault}>
    <GlobalStyle />
    {storyFn()}
  </ThemeProvider>
);

addDecorator(GlobalWrapper);
