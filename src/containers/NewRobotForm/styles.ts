import { Button, RadioGroup, Select, TextField } from '@material-ui/core';
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
  &.MuiTextField-root {
    margin: 9px 0;
  }
`;

export const StyledSelect = styled(Select)`
  && {
    margin: 9px 0px;
  }
`;

export const StyledRadioGroup = styled(RadioGroup)`
  && {
    margin: 9px 0px;
  }
`;

export const Form = styled.form``;

export const Mode = styled.div``;

export const ButtonLeft = styled(Button)``;

export const ButtonRight = styled(Button)``;

export const Submit = styled(Button)`
  background-color: red;
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 4px 10px;
  font-size: 13px;

  &:hover {
    background-color: green;
  }
`;
