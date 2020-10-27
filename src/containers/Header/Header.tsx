/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React, { ReactNode } from 'react';

import { AiFillSignal } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../store/modules/rootReducer';
import ToggleButton from '../../components/ToggleButton';
import { Container, TitleContainer, Title, Icon, Separator } from './styles';
import { toggleMode } from '../../store/modules/ui/actions';

interface HeaderProps {
  title: string;
  subtitle: string;
  icon?: ReactNode;
}

/**
 * A general purpose header
 * @param title: Header title
 * @param subtitle: Header subtitle
 * @param icon: Header icon
 */
const Header: React.FC<HeaderProps> = ({ title, subtitle }: HeaderProps) => {
  const buttonState = useTypedSelector((state) => state.UI.mode);
  const dispatch = useDispatch();

  return (
    <header>
      <Container>
        <TitleContainer>
          <Icon>
            <AiFillSignal size={22} />
          </Icon>
          <Separator />
          <Title>
            {title}
            <span> / </span>
            <span>{subtitle}</span>
          </Title>
        </TitleContainer>
        <ToggleButton
          leftText="Modo simulado"
          rightText="Modo real"
          state={buttonState}
          action={() => dispatch(toggleMode())}
        />
      </Container>
    </header>
  );
};

export default Header;
