import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
:root{
  --first-color: #CF9642;
  --second-color: #F1F1F1;
  --third-color: #1F1F1F;
}

html{
  font-size: 62.5%;
}
body{
  background-color: var(--first-color);
}

`