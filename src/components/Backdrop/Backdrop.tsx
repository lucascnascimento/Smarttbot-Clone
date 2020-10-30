/* eslint-disable react/require-default-props */
import React from 'react';

import { BackdropScreen } from './styles';

interface BackdropProps {
  handleClick: () => void;
  opacity?: number;
  visibility: boolean;
}

/**
 * Backdrop is a component that adds a dark opacity layer over the screen and provides
 * a callback to handle a click action on it.
 * @param handleClick Callback to handle click on Backdrop.
 * @param opacity A value ranging from 0 to 1 to control the darkness. Default is 0.5.
 * @param visibility Sets component visibility, true for visible, false for hidden.
 */
const Backdrop: React.FC<BackdropProps> = ({
  handleClick,
  opacity = 0.5,
  visibility = false,
}: BackdropProps) => {
  return (
    <BackdropScreen
      onClick={handleClick}
      opacity={opacity}
      visibility={visibility}
    />
  );
};

export default Backdrop;
