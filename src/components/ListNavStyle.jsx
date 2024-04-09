import styled from 'styled-components'

export const ContainerListNav = styled.nav`
  
  ul{
    display: flex;
    gap: 2rem;
  }
  ul>li>a{
    font-family: "Playfair Display", serif;
    color: var(--third-color);
    font-size: 1.6rem;
    cursor: pointer;
    transition: all.5s;
  }
  :hover{
    color: var(--first-color);
  }
`