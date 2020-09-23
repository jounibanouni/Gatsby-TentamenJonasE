import styled from "styled-components"

export const FeatureImageWrapper = styled.div`
  grid-column: 1 / span 12;
  grid-row: 2 / 3;
  overflow: hidden;
  position: relative;

  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 1 / span 8;
  }
`
