import React from 'react';
import { AiFillSignal } from 'react-icons/ai';
import robotLogo from '../../assets/images/robotLogo.png';
import textLogo from '../../assets/images/textLogo.png';

import SidebarItem from '../../components/SidebarItem';

import { Container, Logo, Separator, List } from './styles';

const Sidebar: React.FC = () => {
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
        <SidebarItem
          title="Análise Geral"
          icon={<AiFillSignal size={22} />}
          handleClick={() => console.log('SidebarItem click')}
        />
        <SidebarItem
          title="Análise Geral"
          icon={<AiFillSignal size={22} />}
          handleClick={() => console.log('SidebarItem click')}
        />
      </List>
    </Container>
  );
};

export default Sidebar;
