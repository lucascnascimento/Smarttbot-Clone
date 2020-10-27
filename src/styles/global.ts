import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, button, input{
    font: 16px Roboto, sans-serif;
    background: ${(props) => props.theme.colors.background}
  }

  #root{
    max-width: 1216px;
    margin: 0 auto;
    padding: 0 0 50px;
  }
  button{
    cursor: pointer;
  }
`;
