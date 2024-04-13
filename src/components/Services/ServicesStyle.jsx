import styled from "styled-components";

export const ContainerServices = styled.section`
  background-color: var(--first-color);
`

export const ContentServices = styled.div`
  padding: 5rem 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4rem;
  }

`