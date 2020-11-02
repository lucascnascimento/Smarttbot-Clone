import {
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Broker,
  Robot,
  ServerErrorResponse,
  ServerResponse,
  Strategy,
} from '../../types/types';
import { modes } from '../../constants/constants';
import theme from '../../styles/themes/smarttBotDefault';

import {
  Container,
  Title,
  Form,
  StyledTextField,
  StyledSelect,
  StyledRadioGroup,
  Submit,
} from './styles';
import { useFetch } from '../../hooks/useFetch';
import { BASE_URL } from '../../services/api';
import { usePost } from '../../hooks/usePost';
import Spinner from '../../components/Spinner';

const NewRobotForm: React.FC = () => {
  // Server request to get strategy list
  const [isStrategyLoading, strategyResponse, strategyError] = useFetch<
    ServerResponse<Strategy[]>
  >(`${BASE_URL}/strategy`, []);

  // Server request to get brokers list
  const [isBrokerLoading, brokerResponse, brokerError] = useFetch<
    ServerResponse<Broker[]>
  >(`${BASE_URL}/broker`, []);

  const [post, loading, response, postError] = usePost<ServerResponse<Robot>>();
  const [errorMsg, setErrorMsg] = useState({} as ServerErrorResponse);

  // TODO: Refactor error handling
  // Treat api errors
  useEffect(() => {
    if (
      strategyError?.response ||
      brokerError?.response ||
      postError?.response
    ) {
      setErrorMsg({ message: 'Internal Error', status: 500 });
    } else if (
      strategyError?.request ||
      brokerError?.request ||
      postError?.request
    ) {
      setErrorMsg({ message: 'Bad Request', status: 400 });
    } else {
      setErrorMsg({ message: 'Something went wrong', status: 400 });
    }
  }, [strategyError, brokerError, postError]);

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      title: '',
      strategy_id: '',
      initial_capital: '',
      mode: 'simulated',
      modeInfo: '',
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(15, 'O nome deve ter no máximo 15 caracteres.')
        .required('*Obrigatório'),
      strategy_id: Yup.number().required('*Obrigatório'),
      initial_capital: Yup.string().required('*Obrigatório'),
      mode: Yup.string().required('*Obrigatório'),
      modeInfo: Yup.string().required('*Obrigatório'),
    }),
    onSubmit: (values) => {
      const body = {
        ...values,
        mode: values.mode === 'simulated' ? 0 : 1,
        ...(values.mode === 'simulated'
          ? { simulation: parseInt(values.modeInfo, 10) }
          : { broker_id: parseInt(values.modeInfo, 10) }),
      };

      post(`${BASE_URL}/robot`, body);
    },
  });

  // Check if the form can be displayed. It relies on the successfull api call.
  function validateFormDisplay(): boolean {
    return (
      typeof strategyResponse?.data?.data !== 'undefined' &&
      strategyResponse.data.data?.length > 0 &&
      typeof brokerResponse?.data?.data !== 'undefined' &&
      brokerResponse.data.data?.length > 0
    );
  }

  // Form to be displayed
  function form() {
    return (
      <>
        <Title>Criar Robô</Title>
        <Form onSubmit={formik.handleSubmit}>
          <StyledTextField
            id="title"
            name="title"
            label="Nome"
            value={formik.values.title}
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={!!(formik.touched.title && formik.errors.title)}
            helperText={formik.errors.title}
          />
          <InputLabel id="select-strategy-label">Estratégia</InputLabel>
          <StyledSelect
            id="strategy_id"
            name="strategy_id"
            labelId="select-strategy-label"
            value={formik.values.strategy_id}
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={!!(formik.touched.strategy_id && formik.errors.strategy_id)}
          >
            {strategyResponse.data.data.map((strategy) => (
              <MenuItem value={strategy.id} key={strategy.id}>
                {strategy.name}
              </MenuItem>
            ))}
          </StyledSelect>
          <StyledTextField
            id="initial_capital"
            name="initial_capital"
            label="Capital inicial"
            value={formik.values.initial_capital}
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              !!(
                formik.touched.initial_capital && formik.errors.initial_capital
              )
            }
            helperText={formik.errors.initial_capital}
          />
          <StyledRadioGroup
            id="mode"
            name="mode"
            value={formik.values.mode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <FormControlLabel
              value="simulated"
              control={<Radio />}
              label="Simulado"
            />
            <FormControlLabel value="real" control={<Radio />} label="Real" />
          </StyledRadioGroup>
          <StyledSelect
            id="modeInfo"
            name="modeInfo"
            value={formik.values.modeInfo}
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={!!(formik.touched.modeInfo && formik.errors.modeInfo)}
          >
            {formik.values.mode === 'simulated'
              ? modes.map((mode) => (
                  <MenuItem value={mode.id} key={mode.id}>
                    {' '}
                    {mode.name}
                  </MenuItem>
                ))
              : brokerResponse.data.data.map((broker) => (
                  <MenuItem value={broker.id} key={broker.id}>
                    {broker.name}
                  </MenuItem>
                ))}
          </StyledSelect>
          <Submit type="submit">Criar</Submit>
        </Form>
      </>
    );
  }

  // Render different elements based on http requests and current status
  function render() {
    if ((isBrokerLoading && isStrategyLoading) || loading) {
      return <Spinner size={32} color={theme.colors.green2} />;
    }

    // se a response do post existir é pq o cadastro deu certo
    if (response.data?.data.id !== undefined) {
      return <div>Sucess</div>;
    }

    if (validateFormDisplay()) {
      return form();
    }

    // se um erro ocorrer, mostrar a mensagem de erro e voltar para a dashboard
    return <div>{errorMsg.message}</div>;
  }

  return <Container>{render()}</Container>;
};

export default NewRobotForm;
