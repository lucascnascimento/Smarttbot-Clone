import React from 'react';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import smarttBotDefault from '../../styles/themes/smarttBotDefault';

import Header from './Header';
import store from '../../store';

afterEach(cleanup);

describe('<Header />', () => {
  it('Should call the callback on click event', () => {
    // const mockRightSideComponent = () => (
    //   <div data-testid="custom">MockedIcon</div>
    // );
    // const mockIcon = () => <div data-testid="custom-element">MockedIcon</div>;
    // render(
    //   <Provider store={store}>
    //     <ThemeProvider theme={smarttBotDefault}>
    //       <Header
    //         title="Header"
    //         subtitle="Subtítulo"
    //         rightSideComponent={mockRightSideComponent}
    //         icon={mockIcon}
    //       />
    //     </ThemeProvider>
    //   </Provider>
    // );
    // console.log(screen.getByTestId('custom-element'));
  });
});
