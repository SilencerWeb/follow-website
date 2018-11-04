import { createGlobalStyle, css } from 'styled-components';


const globalStyles = css`
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    src: local('Rubik'), local('Rubik-Regular'),
         url('assets/fonts/rubik-v7-latin-regular.woff2') format('woff2'),
         url('assets/fonts/rubik-v7-latin-regular.woff') format('woff');
  }
  
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    src: local('Rubik Medium'), local('Rubik-Medium'),
         url('assets/fonts/rubik-v7-latin-500.woff2') format('woff2'),
         url('assets/fonts/rubik-v7-latin-500.woff') format('woff');
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    -ms-overflow-style: scrollbar;
  }

  body {
    position: relative;
    min-width: 32rem;
    font-family: 'Rubik', sans-serif;
  }
`;


export const GlobalStyles = createGlobalStyle`${globalStyles}`;
