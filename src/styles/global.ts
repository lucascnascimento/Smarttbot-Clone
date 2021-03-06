import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body, button, input{
    font: 16px Roboto, sans-serif;
    background: ${(props) => props.theme.colors.background}
  }

  #root{
    max-width: 1407px;
    margin: 0 auto;
    padding: 0 0 50px;
    height: 100%;
  }
  button{
    cursor: pointer;
  }
`;
