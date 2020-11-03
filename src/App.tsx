import React from 'react';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import Routes from './routes';

import GlobalStyle from './styles/global';
import smarttBotDefault from './styles/themes/smarttBotDefault';

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={smarttBotDefault}>
            <GlobalStyle />
            <Normalize />
            <Routes />
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
