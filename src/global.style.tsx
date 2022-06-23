import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    cursor: none;
  }

  :root {
    --font-text: 'Open Sans', sans-serif;
    --font-heading: 'Bebas Neue', cursive, monospace;
    --font-styled-text: 'Space Mono', monospace;
    
    --color-primary: #131313;
    --color-secondary: #f5f5f5;
    --color-primary-light: #212121b8;

    --font-size-heading: 6rem;   
    --font-size-large: 2rem; 
    --font-size-primary: 1.6rem;
    --font-size-secondary: 1.2rem;
    --font-size-tertiary: 1rem;
    
    --padding-large: 14rem;
    --padding-normal: 4rem;
    --padding-small: 2rem;

    --font-weight-bold: 700;
    --font-weight-semi-bold: 500;
    --font-weight-regular: 400;
    --font-weight-light: 300;
  }

  html {
    font-size: 62.5%;
    font-family: var(--font-text);
    }

  body {
    color: var(--color-secondary);
    background-color: var(--color-primary);
    font-size: var(--font-size-primary);
    font-family: var(--font-styled-text);
  }

  .App{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 100vh min-content min-content;
    grid-area: "about" "education" "skills";
  }
`;

export default GlobalStyle;
