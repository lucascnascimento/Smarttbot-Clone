import React from 'react';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from './store';

import GlobalStyle from './styles/global';
import smarttBotDefault from './styles/themes/smarttBotDefault';

import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={smarttBotDefault}>
          <GlobalStyle />
          <Normalize />
          <Dashboard />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
