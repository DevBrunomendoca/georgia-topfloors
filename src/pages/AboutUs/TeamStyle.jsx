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
  width: 100%;
`

export const ContainerTeamCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: .5rem;

h3{
  color: var(--third-color);
}
`