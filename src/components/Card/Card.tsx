/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Card: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Card;

Card.propTypes = {
  children: PropTypes.node,
};
