import styled from "styled-components";

export const ContainerAboutUs = styled.section`
  max-width: 1280px;
  margin :15rem auto 10rem;
  padding: 0 1rem;
  @media (max-width: 768px) {
    margin: 12rem auto 5rem;
  }
`

export const ContentTextAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  h3{
    color: var(--third-color);
    margin-bottom: 1rem;
  }
`

export const ContentSliderAbout = styled.div`
  width: 100%;
  margin-top: 4rem;
  img{
    width: 100%;
  }
`