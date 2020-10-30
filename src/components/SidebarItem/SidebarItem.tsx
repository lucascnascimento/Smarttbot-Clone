import React, { ReactNode } from 'react';

import { SidebarItem, Icon, Title } from './styles';

interface NavbaritemProps {
  title: string;
  icon: ReactNode;
  handleClick: () => void;
  active: boolean;
}

/**
 * Renders a component to be displayed in the sidebar.
 * @param title Navbar item text.
 * @param icon Svg icon.
 * @param handleClick Handle Navbaritem Click.
 * @param active Indicates whether the button is active or not.
 */
const NavbarItem: React.FC<NavbaritemProps> = ({
  title,
  icon,
  handleClick,
  active,
}: NavbaritemProps) => {
  return (
    <SidebarItem onClick={() => handleClick()}>
      <Icon active={active}>{icon}</Icon>
      <Title>{title}</Title>
    </SidebarItem>
  );
};

export default NavbarItem;
