import { Button, TextField } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 18px 18px 18px;
  min-width: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  display: block;
  width: 100%;
  text-align: center;
`;

export const StyledTextField = styled(TextField)`
  && {
    color: green;
  }
`;

export const Form = styled.form``;

export const Mode = styled.div``;

export const ButtonLeft = styled(Button)``;

export const ButtonRight = styled(Button)``;

export const Submit = styled(Button)``;
