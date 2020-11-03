import React, { ReactNode } from 'react';

import { SidebarItem, Icon, Title, NavLinkItem } from './styles';

interface NavbaritemProps {
  title: string;
  icon: ReactNode;
  to: string;
}

/**
 * Renders a component to be displayed in the sidebar.
 * @param title Navbar item text.
 * @param icon Svg icon.
 * @param to Url destination.
 */
const NavbarItem: React.FC<NavbaritemProps> = ({
  title,
  icon,
  to,
}: NavbaritemProps) => {
  return (
    <NavLinkItem exact to={to}>
      <SidebarItem>
        <Icon>{icon}</Icon>
        <Title>{title}</Title>
      </SidebarItem>
    </NavLinkItem>
  );
};

export default NavbarItem;
