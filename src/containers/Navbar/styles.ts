import styled from 'styled-components';
import { BaseContainer } from '../../styles/styles';

export const Container = styled(BaseContainer)`
  flex-direction: column;
  height: 100%;
  width: 64px;
  overflow: hidden;
  z-index: 50;
  position: fixed;
  transition: width 4s;

  &:hover {
    width: auto;
    overflow: auto;
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
  margin: 0 8px;
`;

export const List = styled.ul`
  margin: 6px 0px;
`;
