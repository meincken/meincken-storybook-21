import { createGlobalStyle } from "styled-components";
import reset from "styled-reset-advanced";

const GlobalStyle = createGlobalStyle`
  ${reset};

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 2.4rem;
  }


`;

export default GlobalStyle;
