import styled, { createGlobalStyle } from "styled-components";
import { BREAKPOINTS, COLORS } from "../src/common";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Raleway:wght@400;500;600;700&display=swap');

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
}

body {
  -webkit-font-smoothing: antialiased;
  background: #f3f2ef;
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
  font-family: 'Raleway', sans-serif
}
`;

export const PageView = styled.div`
  width: 100%;
  max-width: ${BREAKPOINTS.xxg};
  margin: 0 auto;
  padding: 0 96px;
  background-color: ${COLORS.light._06};

  @media (max-width: ${BREAKPOINTS.sm}) {
    padding: 0;
  }
`;
