/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React, { ReactNode } from 'react';
import { MdMenu } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import {
  HamburguerMenu,
  Container,
  TitleContainer,
  Title,
  TitleIcon,
  Separator,
} from './styles';
import { openSidebar } from '../../store/modules/ui/actions';
import theme from '../../styles/themes/smarttBotDefault';

interface HeaderProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  rightSideComponent?: ReactNode;
}

/**
 * A general purpose header
 * @param title: Header title
 * @param subtitle: Header subtitle
 * @param icon: Header title icon
 * @param rightSideComponent: A component to be displayed on the right side of the header
 * when the screen is bigger than 1024px
 */
const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  icon,
  rightSideComponent,
}: HeaderProps) => {
  const dispatch = useDispatch();
  const windowWidth = useWindowWidth();

  return (
    <header>
      <Container>
        <HamburguerMenu
          onClick={() => dispatch(openSidebar())}
          aria-label="menu"
          aria-hidden={windowWidth > theme.width.desktop}
        >
          <MdMenu size={32} />
        </HamburguerMenu>
        <TitleContainer>
          {icon ? (
            <>
              <TitleIcon>{icon}</TitleIcon>
              <Separator />
            </>
          ) : null}

          <Title>
            {title}
            <span> / </span>
            <span>{subtitle}</span>
          </Title>
        </TitleContainer>
        {windowWidth < theme.width.desktop ? (
          <div />
        ) : (
          rightSideComponent || null
        )}
      </Container>
    </header>
  );
};

export default Header;
