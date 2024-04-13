import styled from "styled-components";

export const ContainerTeam = styled.section`
  margin: 8rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
`
export const ContentTeam = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem 3rem;
  place-items: center;
  align-items: start;
  width: 100%;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const ContainerTeamCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: .5rem;
h3{
  color: var(--third-color);
}
@media (max-width: 480px) {
  img{
    width: 80px;
  }
}
`