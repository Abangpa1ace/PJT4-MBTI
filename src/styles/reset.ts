import { createGlobalStyle } from 'styled-components';

const GlobalReset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1.6;
    font-size: 24px;
    font-family: 'Gamja Flower', cursive;
  }
  body {}
  #root {
    height: 100vh;
  }
  ul, li {
    list-style: none;
  }
  input {
    background: transparent;
    border: 0;
    outline: 0;
  }
  button {
    background: 0;
    padding: 0;
    border: 0;
    outline: 0;
    cursor: pointer;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
  a {
    display: inline-block;
    text-decoration: none;
  }
`;

export default GlobalReset;