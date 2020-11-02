import React from 'react';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import ToggleButton from './ToggleButton';
import smarttBotDefault from '../../styles/themes/smarttBotDefault';

afterEach(cleanup);

describe('<ToggleButton />', () => {
  it('Should call the callback on click event', () => {
    const mockCallback = jest.fn();

    render(
      <ThemeProvider theme={smarttBotDefault}>
        <ToggleButton
          action={mockCallback}
          leftText="texto da esquerda"
          rightText="texto da direita"
          state
        />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByLabelText('Trocar modo'));

    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
