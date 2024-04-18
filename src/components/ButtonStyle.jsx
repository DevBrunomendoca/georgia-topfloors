import styled from 'styled-components'

export const ContentButton = styled.button`
  
  background-color: var(--first-color);
  border: 2px solid transparent;
  cursor: pointer;
  transition: all.5s;
  &:hover{
    background-color: transparent;
    border: 2px solid var(--first-color);
  }
  a{
    font-family: "Playfair Display", serif;
    color: var(--third-color);
    font-size: 1.6rem;
    padding: 1rem 8rem;
    height: 35px;
    display: flex;
    align-items: center;
  }
  
`