import styled from "styled-components";

export const ContainerContactUs = styled.section`
  margin: 15rem auto 10rem;
  max-width: 1280px;
  padding: 0 1rem;
  @media (max-width: 768px) {
    margin: 12rem auto 5rem;
  }
`


export const  ContainerAddress = styled.div`
  display: flex;
  align-items: center;
  padding-top: 4rem;
  @media (max-width:768px) {
    flex-direction: column;
  }
`

export const ContentTextAddress = styled.div`
  background-color: var(--first-color);
  min-height: 630px;
  width: 50%;
  padding: 15rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  p{
    color: var(--second-color);
    max-width: 550px;
    margin-top: .5rem;
  }
  @media (max-width: 768px) {
    width: 100%;
    min-height: 380px;
  }
`

export const ContentBannerAddress = styled.div`
  background: url('/banner-address.png') center;
  background-size: cover;
  min-height: 630px;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    min-height: 480px;
  }
`

export const ContainerLocation = styled.div`
  margin-top: 4rem;
  h2{
    padding-bottom: 3rem;
  }
  iframe {
  width: 100%;
  height: 600px;
  border: 0;
}
`