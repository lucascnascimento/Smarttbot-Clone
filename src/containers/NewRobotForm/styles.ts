import {
  Button,
  ButtonBase,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 18px 18px 18px;
  min-width: 500px;
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

  & .MuiInputLabel-filled {
    color: ${(props) => props.theme.colors.green2};
  }

  & .MuiInput-underline::after {
    border-color: ${(props) => props.theme.colors.green2};
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

export const StyledRadio = styled(Radio)`
  & .MuiIconButton-label {
    color: ${(props) => props.theme.colors.green2};
  }
`;

export const Submit = styled(Button)`
  && {
    background: ${(props) => props.theme.colors.green2};
    color: white;
    padding: 4px 10px;
    margin: 18px 0px;
  }
`;
