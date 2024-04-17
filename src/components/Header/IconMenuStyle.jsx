import styled, { css } from "styled-components";

export const ContentIconMenu = styled.div`
  display: none;
  cursor: pointer;
  padding-right: 1rem;
  z-index: 99;
  @media (max-width:768px) {
    display: block;
  }
  div{
    width: 35px;
    height: 3px;
    margin: 4px 0;
    background-color: var(--third-color);
  }
  ${({openMenu}) => openMenu && css`
  div {
    transition: all.5s;
    position: relative;
    top: 7px;
    left: 15px;
  } 
.line-one {
  transform: rotate(-45deg) translate(-8px, -8px);
}
.line-two {
  opacity: 0;
}
.line-three {
  transform: rotate(45deg) translate(-17px, -2px);
}
  `}
`
