import React from 'react';

import {
  Container,
  Toggle,
  ToggleTrack,
  ToggleThumb,
  LeftText,
  RightText,
} from './styles';

interface ToggleButtonProps {
  leftText: string;
  rightText: string;
  state: boolean;
  action: () => void;
}

/**
 * Renders a toggle button
 * @param leftText Text to be displayed on the left side of the button.
 * @param rightText Text to be displayed on the right side of the button.
 * @param state The toggle button state.
 * @param action Action to be performed when button state changes.
 */
const ToggleButton: React.FC<ToggleButtonProps> = ({
  leftText,
  rightText,
  state,
  action,
}: ToggleButtonProps) => {
  return (
    <Container>
      <LeftText toggleState={state}>{leftText}</LeftText>
      <Toggle
        onClick={() => action()}
        aria-label="Modo de operação"
        aria-roledescription="Toggle button"
      >
        <ToggleTrack toggleState={state} />
        <ToggleThumb toggleState={state} />
      </Toggle>
      <RightText toggleState={state}>{rightText}</RightText>
    </Container>
  );
};

export default ToggleButton;
