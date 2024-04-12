import styled from "styled-components";

export const ContainerContactUs = styled.section`
  margin: 15rem auto 10rem;
  max-width: 1280px;
  padding: 0 1rem;
`


export const  ContainerAddress = styled.div`
  display: flex;
  padding-top: 4rem;
`

export const ContentTextAddress = styled.div`
  background-color: var(--first-color);
  min-height: 630px;
  width: 100%;
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
`

export const ContentBannerAddress = styled.div`
  background: url('/banner-address.png') center;
  background-size: cover;
  min-height: 630px;
  width: 100%;
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