/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React, { ReactNode } from 'react';

import { AiFillSignal } from 'react-icons/ai';
import { Container, TitleContainer, Title, Icon, Separator } from './styles';

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
      </Container>
    </header>
  );
};

export default Header;
