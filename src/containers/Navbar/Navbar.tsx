import React from 'react';
import { AiFillSignal } from 'react-icons/ai';
import robotLogo from '../../assets/images/robotLogo.png';
import textLogo from '../../assets/images/textLogo.png';

import NavbarItem from '../../components/NavbarItem';

import { Container, Logo, Separator, List } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <Logo>
        <div>
          <img src={robotLogo} alt="Smarttbot Logo" />
        </div>
        <div>
          <img src={textLogo} alt="Smarttbot Logo" />
        </div>
      </Logo>
      <Separator />
      <List>
        <NavbarItem
          title="Análise Geral"
          icon={<AiFillSignal size={22} />}
          handleClick={() => console.log('NavbarItem click')}
        />
        <NavbarItem
          title="Análise Geral"
          icon={<AiFillSignal size={22} />}
          handleClick={() => console.log('NavbarItem click')}
        />
      </List>
    </Container>
  );
};

export default Navbar;
