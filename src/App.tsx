import React from 'react';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';

import smarttBotDefault from './styles/themes/smarttBotDefault';

function App() {
  return (
    <>
      <ThemeProvider theme={smarttBotDefault}>
        <GlobalStyle />
        <Normalize />
        <h1>Hello World</h1>
      </ThemeProvider>
    </>
  );
}

export default App;
