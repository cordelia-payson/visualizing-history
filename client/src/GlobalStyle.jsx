import { createGlobalStyle } from 'styled-components';

// Styles that impact the body or all elements go here
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Jost';
  }

  * {
    margin: 0;
    padding: 0;
  }

`;

export default GlobalStyle;
