import styled from 'styled-components';
import { ButtonBase } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

export const NavLinkItem = styled(NavLink)`
  text-decoration: none;

  &.active {
    & svg {
      color: ${(props) => props.theme.colors.green2};
    }
  }
`;

export const SidebarItem = styled(ButtonBase)`
  display: flex;
  padding: 12px 0px !important;
  width: 100%;

  &:hover {
    opacity: 0.7;
    color: ${(props) => props.theme.colors.gray1};
  }
`;

export const Icon = styled.div`
  min-width: 64px;

  & svg {
    color: ${(props) => props.theme.colors.gray1};
    display: block;
    margin: 0 auto;
  }
`;

export const Title = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.gray2};
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-align: left;
`;
