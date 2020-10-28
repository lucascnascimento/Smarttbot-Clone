import React from 'react';

import { Container, SpinnerStyle } from './styles';

interface SpinnerProps {
  size: number;
  color: string;
}

/**
 * Spinner Component
 * @param size Spinner size
 * @param color Spinner Color
 */
const Spinner: React.FC<SpinnerProps> = ({
  size = 32,
  color = 'black',
}: SpinnerProps) => {
  return (
    <Container>
      <SpinnerStyle size={size} color={color} />
    </Container>
  );
};

export default Spinner;
