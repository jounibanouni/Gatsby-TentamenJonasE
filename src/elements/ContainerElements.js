import styled from "styled-components"

export const ContainerWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(10, minmax(auto, 6rem)) 1fr;
  grid-template-rows: 6rem 30rem auto;
  gap: 0 2rem;
  background-color: ${props => props.theme.colors.mainBackground};

  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
    overflow: hidden;
  }
`
