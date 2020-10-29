import React, { ReactNode } from 'react';

import { ListItem, Icon, Title } from './styles';

interface NavbaritemProps {
  title: string;
  icon: ReactNode;
  handleClick: () => void;
}

/**
 * Renders a component to be displayed in a navbar
 * @param title Navbar item text
 * @param icon Svg icon
 * @param handleClick Handle Navbaritem Click
 */
const NavbarItem: React.FC<NavbaritemProps> = ({
  title,
  icon,
  handleClick,
}: NavbaritemProps) => {
  return (
    <ListItem onClick={() => handleClick()}>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
    </ListItem>
  );
};

export default NavbarItem;
