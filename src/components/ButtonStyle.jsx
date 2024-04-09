import styled from 'styled-components'

export const ContentButton = styled.button`
  padding: .80rem 7rem;
  background-color: var(--first-color);
  border: 2px solid transparent;
  cursor: pointer;
  transition: all.5s;
  &:hover{
    background-color: var(--second-color);
    border: 2px solid var(--first-color);
  }
  a{
    font-family: "Playfair Display", serif;
    color: var(--third-color);
    font-size: 1.6rem;
  }
  
`