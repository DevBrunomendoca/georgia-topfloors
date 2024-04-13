import styled from "styled-components";

export const ContainerReviews = styled.section`
  margin: 0 auto;
  max-width: 1280px;
  padding: 5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`

export const ConteinerCardReview = styled.div`
  width: 100%;
  padding-top: 2rem;

`
export const CardReview = styled.div`
  width: 100%;
  padding: 3.5rem 2rem;
  background-color: var(--first-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  div{
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  p {
    color: var(--second-color);
    line-height: 150%;
  }

`