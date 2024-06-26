import styled, { css } from 'styled-components'

export const ContainerHome = styled.section`
  background: url('/banner-home(1).png') center;
  background-size: cover;
  min-height: 950px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    min-height: 650px;
  }
  ${({bannerMobile}) => bannerMobile && css`
    background: url('/banner-home-mobile.png') center no-repeat;
    background-size: cover;
  `}
`

export const ContentHome = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  h3{
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    color: var(--second-color);
    font-size: 2rem;
    margin-bottom: -3rem;
  }
  button{
    padding: 0;
    &:hover{ 
      background-color: var(--second-color);
      border: 2px solid var(--second-color);
    }
  }
`