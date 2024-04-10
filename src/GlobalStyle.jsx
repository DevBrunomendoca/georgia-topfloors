import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  line-height: 120%;
}
:root{
  --first-color: #CF9642;
  --second-color: #F1F1F1;
  --third-color: #212121;
}

html{
  font-size: 62.5%;
}
body{
  background-color: var(--second-color);
}

`