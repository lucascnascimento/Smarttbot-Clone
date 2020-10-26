import React from 'react';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';

import smarttBotDefault from './styles/themes/smarttBotDefault';
import Card from './components/Card';

function App() {
  return (
    <>
      <ThemeProvider theme={smarttBotDefault}>
        <GlobalStyle />
        <Normalize />
        <Card>
          <p>Análise Geral / Principal</p>
        </Card>
      </ThemeProvider>
    </>
  );
}

export default App;
