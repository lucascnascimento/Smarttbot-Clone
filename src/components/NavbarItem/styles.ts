import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 6px 0px;

  &:hover svg {
    color: black;
  }
`;

export const Icon = styled.div`
  min-width: 64px;

  & svg {
    color: ${(props) => props.theme.colors.green2};
    display: block;
    margin: 0 auto;
  }
`;

export const Title = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.gray2};
  margin-right: 16px;
`;
