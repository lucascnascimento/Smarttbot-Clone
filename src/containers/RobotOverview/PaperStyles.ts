import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const PaperName = styled.div`
  background-color: ${(props) => props.theme.colors.green2};
  color: white;
  float: left;
  font-weight: bold;
  font-size: 0.83rem;
  padding: 4px;
  border-radius: 4px;
`;

export const Separator = styled.div`
  height: 1px;
  border: 1px dashed ${(props) => props.theme.colors.gray1};
  margin: 0 8px;
  width: 100%;
`;

export const Transactions = styled.div`
  float: right;

  & span {
    font-size: 0.83rem;

    &:first-of-type {
      margin-right: 4px;
    }

    &:last-of-type {
      color: ${(props) => props.theme.colors.gray2};
    }
  }
`;
