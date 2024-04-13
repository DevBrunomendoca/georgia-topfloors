import styled from 'styled-components'

export const ContentTitle = styled.h1`
  font-family: "Playfair Display", serif;
  color: var(--third-color);
  font-size: 6.6rem;
  font-weight: 600;
  max-width: 1060px;
  text-align:center;
  margin: 0 auto ;
  @media (max-width: 768px) {
    font-size: 4.6rem;
    font-weight: 500;
  }
  @media (max-width: 480px) {
    font-size: 4.4rem;
  }
`