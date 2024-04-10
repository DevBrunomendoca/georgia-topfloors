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

.swiper.swiper-initialized.swiper-horizontal.swiper-android.swiper-backface-hidden.mySwiper{
  padding: 5rem 0 !important;
}
.swiper-pagination.swiper-pagination-bullets.swiper-pagination-horizontal{
  top: 450px !important;
}
.swiper-pagination-bullet{
  background-color: #CF9642;
}
.swiper-pagination-bullet-active{
  background-color: #CF9642;
}
`