import styled, { createGlobalStyle } from 'styled-components';
import { BREAKPOINTS, COLORS } from '../src/common';

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  text-decoration: none;
  list-style: none;
  scroll-behavior: smooth;
  transition: all 0.3s ease-in-out;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1rem;
  letter-spacing: 0.02em;
}

body {
  -webkit-font-smoothing: antialiased;
  background: #f3f2ef;
  ::-webkit-scrollbar {
   width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${COLORS.brand._02};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${COLORS.brand._04};
    border-radius: 4px;
  }
}
body,
input,
button,
textarea {
  font-family: 'IBM Plex Sans', sans-serif;
  
}

button,
a {
  cursor: pointer;
  font-family: 'IBM Plex Sans', sans-serif;
}
`;

export const PageView = styled.div`
  width: 100%;
  max-width: ${BREAKPOINTS.xxg};
  margin: 0 auto;
  background-color: ${COLORS.light._06};

  @media (max-width: ${BREAKPOINTS.sm}) {
    padding: 0;
  }
`;
export const StyleMobile = styled.div`
  display: none;
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: block;
  }
`;
export const StyleDesktop = styled.div`
  display: block;
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: none;
  }
`;
