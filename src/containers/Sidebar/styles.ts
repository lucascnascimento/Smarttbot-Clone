import styled from 'styled-components';
import { BaseContainer } from '../../styles/styles';

interface SidebarContainerProps {
  visibility: boolean;
}

export const Container = styled(BaseContainer)<SidebarContainerProps>`
  flex-direction: column;
  margin: 0px;
  z-index: 200;
  border-radius: 0px;
  overflow: hidden;

  position: fixed;
  left: 0;
  top: 0;
  width: 60%;
  height: 100vh;
  z-index: 1000;
  transform: translate3d(
    ${(props) => (props.visibility ? '0vw' : '-100vw')},
    0,
    0
  );
  transition: transform 0.8s cubic-bezier(0, 0.52, 0, 1);

  @media ${(props) => props.theme.media.small} {
    width: 30%;
  }

  @media ${(props) => props.theme.media.desktop} {
    display: block;
    flex-direction: column;
    width: 64px;
    overflow: hidden;
    z-index: 100;
    position: fixed;
    border-radius: 10px;
    height: calc(100% - 24px);
    margin: 12px;

    &:hover {
      width: 15%;
      overflow: auto;
      transition: width 0.5s;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  padding: 20px 0;

  & div:nth-of-type(1) {
    min-width: 64px;
    display: inline-block;
  }

  & img {
    display: block;
    width: auto;
    margin: 0 auto;
    height: 28px;
  }
`;

export const Separator = styled.div`
  background-color: ${(props) => props.theme.colors.gray1};
  height: 1px;

  @media ${(props) => props.theme.media.desktop} {
    margin: 0 8px;
  }
`;

export const Menu = styled.ul`
  margin: 6px 0px;
`;
