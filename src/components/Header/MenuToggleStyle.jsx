import styled, { css } from "styled-components"

export const ContentMenuToggle = styled.div`
  display: none;
  z-index: 99;
  animation: ease-in-out .4s;
  @keyframes showMenu {
  from{
    opacity: .5;
    height: 120px;
  }to{
    opacity : 1;
    height: 260px;
  }
}
@keyframes showBtn {
  from{
    opacity: 0;
    transform: translatey(-80px);
  }to{
    opacity : 1;
    transform: translatey(0);
  }
}

${({openMenu}) => openMenu && css`
  background-color: var(--second-color);
  width: 100%;
  height: 260px;
  position: absolute;
  top: 60px;
  left: 0;
  display: block;
  animation: showMenu ease-in-out .6s;
  padding: 3rem 1rem 2rem;

  nav, button {
    animation: showBtn ease-in-out 1s;
  }
  nav>ul {
    flex-direction: column;
    gap: 1.5rem;
    padding-bottom: 3.5rem;
    width: 100%;

  }nav>ul>li {
    border-bottom: 1px solid rgba(94, 94, 94, 0.6);
    width: 100%;
    padding-bottom: .5rem;
  }
  nav>ul>li>a{
    font-size: 2rem;
  }
`
}
`