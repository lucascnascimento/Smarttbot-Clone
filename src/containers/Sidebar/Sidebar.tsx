import React from 'react';
import { AiFillSignal } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import robotLogo from '../../assets/images/robotLogo.png';
import textLogo from '../../assets/images/textLogo.png';
import Backdrop from '../../components/Backdrop';
import { closeSidebar } from '../../store/modules/ui/actions';
import theme from '../../styles/themes/smarttBotDefault';

import SidebarItem from '../../components/SidebarItem';

import { SidebarContainer, Container, Logo, Separator, Menu } from './styles';
import { useTypedSelector } from '../../store/modules/rootReducer';
import { useWindowWidth } from '../../hooks/useWindowWidth';

const Sidebar: React.FC = () => {
  const dispatch = useDispatch();
  const sidebarState = useTypedSelector((state) => state.UI.sidebar);
  const windowWidth = useWindowWidth();

  return (
    <>
      <Backdrop
        handleClick={() => dispatch(closeSidebar())}
        visibility={sidebarState && windowWidth < theme.width.desktop}
      />

      <Container
        visibility={sidebarState || windowWidth >= theme.width.desktop}
      >
        <Logo>
          <div>
            <img src={robotLogo} alt="Smarttbot Logo" />
          </div>
          <div>
            <img src={textLogo} alt="Smarttbot Logo" />
          </div>
        </Logo>
        <Separator />
        <Menu>
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
        </Menu>
      </Container>
    </>
  );
};

export default Sidebar;
