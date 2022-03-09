import { createGlobalStyle } from 'styled-components';

/** CREATE THEME-PROVIDER **/
export const bugattiTheme = {
  // Colors
  black: "#000",
  red: "#f00",
  white: "#f1f1f1",

  // Font Sizes
  xsmall: "1.2rem",
  small: "2rem",

  // Screen Sizes
  extraSmallScreen: "417px",
  smallScreen: "620px",
  mediumScreen: "767px",
  largeScreen: "917px"
};

export const GlobalStyle = createGlobalStyle`
    *,
    ::after,
    ::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
      cursor: none;
    }
    
    html {
      font-size: 62.5%;
      background: #000;
    }
    
    body {
      overscroll-behavior-y: none;
      box-sizing: border-box;
      font-family: 'lato', sans-serif;  
    }
    
    a {
      text-decoration: none;
    }
    
    ul, li {
      list-style: none;
    }

    /**** IMAGES ****/
    .cars{
      object-fit: cover;
    }
    
`;