import React, { ReactElement } from 'react';
import {
  render,
  fireEvent,
  screen,
  cleanup,
  act,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import smarttBotDefault from '../../styles/themes/smarttBotDefault';
import { openSidebar } from '../../store/modules/ui/actions';

import Header from './Header';

const mockStore = configureStore();

// Mock a component to be rendered on the right side
const mockRightSideComponent = () => {
  return <div data-testid="custom-right">Mocked Right Side Component</div>;
};

// Mock a icon to be rendered on the left side
const mockIcon = () => {
  return <div data-testid="custom-icon">Mocked Icon</div>;
};

/**
 * Fire window resize event
 * @param width New window width
 */
const fireWindowWidthResizeEvent = (width: number) => {
  // TODO: Refactor resize hook to use innedWidth instead of clientWidth
  Object.defineProperty(document.body, 'clientWidth', {
    writable: true,
    configurable: true,
    value: width,
  });
  document.body.dispatchEvent(new Event('resize'));

  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  });
  window.dispatchEvent(new Event('resize'));
};

describe('<Header />', () => {
  // Setup and teardown
  afterEach(() => cleanup());

  let store: MockStoreEnhanced<unknown, unknown>;
  let MockHeader: () => ReactElement;

  beforeEach(() => {
    // Define the window width
    fireWindowWidthResizeEvent(1200);

    // Mock store
    store = mockStore({});
    store.dispatch = jest.fn();

    // Defines the Mocked Home component.
    MockHeader = () => (
      <Provider store={store}>
        <ThemeProvider theme={smarttBotDefault}>
          <Header
            title="Header"
            subtitle="Subtítulo"
            rightSideComponent={mockRightSideComponent()}
            icon={mockIcon()}
          />
        </ThemeProvider>
      </Provider>
    );
  });

  it(`should render the icon and the rightSideComponent menu on a window bigger
  than 1024px`, () => {
    render(<MockHeader />);

    // Assert the icon and rightSideComponents were rendered
    expect(screen.getByTestId('custom-icon')).toHaveTextContent('Mocked Icon');
    expect(screen.getByTestId('custom-right')).toHaveTextContent(
      'Mocked Right Side Component'
    );
  });

  it(`should not render the hamburguer menu on a window bigger than 1024px`, () => {
    render(<MockHeader />);

    // Assert the hamburguer menu is not displayed
    expect(
      screen.queryByRole('button', { name: 'menu', hidden: true })
    ).not.toBeInTheDocument();
  });

  it(`should display the hamburguer menu on a window smaller than 1024px`, () => {
    const { rerender } = render(<MockHeader />);

    // Resize the window width
    act(() => fireWindowWidthResizeEvent(600));

    // Rerender component after window width state update
    rerender(<MockHeader />);

    // Assert the right side component was removed on width resize event
    expect(
      screen.getByRole('button', {
        name: 'menu',
        hidden: false,
      })
    ).toBeInTheDocument();
  });

  it(`should hide the rightSideComponent on a window smaller than 1024px`, () => {
    const { rerender } = render(<MockHeader />);

    // Assert the right side component was rendered
    expect(screen.getByTestId('custom-right')).toBeInTheDocument();

    // Resize the window width
    act(() => fireWindowWidthResizeEvent(600));

    // Rerender component after window width state update
    rerender(<MockHeader />);

    // Assert the right side component was removed on width resize event
    expect(screen.queryByTestId('custom-right')).not.toBeInTheDocument();
  });

  // TODO: test if the icon component is hidden when screen is smaller than 1024px
  // it(`should hide the icon component on a window smaller than 1024px`, () => {
  //   const { rerender } = render(<MockHeader />);

  //   // Assert the icon component was rendered
  //   expect(screen.getByTestId('custom-icon')).toBeInTheDocument();

  //   // Resize the window width
  //   act(() => fireWindowWidthResizeEvent(600));

  //   // Rerender component after window width state update
  //   rerender(<MockHeader />);

  //   // Assert the icon component was removed on width resize event
  //   expect(screen.getByTestId('custom-icon')).not.toBeInTheDocument();
  // });

  it(`should dispatch an action to the store when the hamburguer menu is clicked`, () => {
    const { rerender } = render(<MockHeader />);

    // Resize the window width
    act(() => fireWindowWidthResizeEvent(600));

    // Rerender component after window width state update
    rerender(<MockHeader />);

    // Click on hamburguer menu
    const hamburguerMenu = screen.getByRole('button', {
      name: 'menu',
      hidden: false,
    });
    fireEvent.click(hamburguerMenu);

    // Assert the correct action was dispatched to the store
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(openSidebar());
  });
});
