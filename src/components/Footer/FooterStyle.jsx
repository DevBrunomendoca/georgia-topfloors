import styled from "styled-components";

export const ContaienerFooter = styled.footer`
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  h3{
    color: var(--third-color)
  }
`

export const ContentFooter = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
`

export const ContainerSocial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SocialMedia = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 10rem;
  img{
    width: 100%;
  }
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  div>a{
    width: 64px;
  }
`


export const ContainerContact = styled.div`
display: flex;
flex-direction: column;
align-items: center;

  a{
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 1.8rem;
    color: var(--third-color);
    margin-top: 1.5rem;
    text-align: center;
    width: 100%;
    background-color: var(--first-color);
    padding: 1rem 2rem;
  }
`

export const Copyright = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1.8rem;
  text-align: center;
  color: var(--third-color);
  margin: 4rem 0 2rem;
`
