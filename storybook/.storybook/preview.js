import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, themeDefault } from '../components/particles';

import { addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

configure(require.context('../components', true, /\.stories\.js$/), module);

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

const GlobalWrapper = (storyFn) => (
  <ThemeProvider theme={themeDefault}>
    <GlobalStyle />
    {storyFn()}
  </ThemeProvider>
);

addDecorator(GlobalWrapper);
