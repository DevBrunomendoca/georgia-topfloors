import styled from 'styled-components'

export const ContainerHeader = styled.header`
  background-color: rgba(255, 255, 255, 0.8);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 101;
`
export const ContentHeader = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
  @media (max-width:768px) {
    nav, button {
      display: none;
    }
  }
`