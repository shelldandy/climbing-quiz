import { createGlobalStyle } from 'styled-components';

const systemFonts = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: "Cormorant", ${systemFonts};
  }

  body {
    min-height: 100vh;
    background: #E9D5CA;
    color: #363062;
    padding: 1em;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Epilogue", ${systemFonts};
    color: #A13333;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles
