import styled from "styled-components";

export const ContentCardServices = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem; 
  width:33%;
  padding: 5rem 1rem 5rem 1rem;
  margin-left: 1.2rem;
  img{
    width: 100%;
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 4rem;
    width: 100%;
    margin-left: 0;
  }
`