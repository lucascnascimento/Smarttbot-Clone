/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React, { ReactNode } from 'react';
import { AiFillSignal } from 'react-icons/ai';
import { MdMenu } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { useTypedSelector } from '../../store/modules/rootReducer';
import ToggleButton from '../../components/ToggleButton';
import {
  HamburguerMenu,
  Container,
  TitleContainer,
  Title,
  TitleIcon,
  Separator,
} from './styles';
import { toggleMode, openSidebar } from '../../store/modules/ui/actions';
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
const Header: React.FC<HeaderProps> = ({ title, subtitle }: HeaderProps) => {
  const buttonState = useTypedSelector((state) => state.UI.mode);
  const dispatch = useDispatch();
  const windowWidth = useWindowWidth();

  return (
    <header>
      <Container>
        <HamburguerMenu onClick={() => dispatch(openSidebar())}>
          <MdMenu size={32} />
        </HamburguerMenu>
        <TitleContainer>
          <TitleIcon>
            <AiFillSignal size={22} />
          </TitleIcon>
          <Separator />
          <Title>
            {title}
            <span> / </span>
            <span>{subtitle}</span>
          </Title>
        </TitleContainer>
        {windowWidth < theme.width.desktop ? (
          <div />
        ) : (
          <ToggleButton
            leftText="Modo simulado"
            rightText="Modo real"
            state={buttonState}
            action={() => dispatch(toggleMode())}
          />
        )}
      </Container>
    </header>
  );
};

export default Header;
