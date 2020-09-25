import styled from "styled-components"

export const ContentWrapper = styled.main`
  grid-column: 2 / span 10;
  grid-row: 3 / span 5;
  background-color: ${props => props.theme.colors.mainBackgroundLight};
  padding: ${props =>
    `${props.theme.spacings.xLarge} ${props.theme.spacings.xxLarge}`};
  box-shadow: ${props => props.theme.shadows.shadow1};
  z-index: 10;

  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 1 / span 8;
    width: 100%;
    padding: ${props =>
      `${props.theme.spacings.xSmall} ${props.theme.spacings.xSmall}`};
    
  }
`
//Styling for showing blog posts next to eachother with flex-direction: row
export const BlogOverviewWrapper = styled.div`
    grid-column: 2/ span 10;
    grid-row: 3 / span 8 ; 
    background-color: ${props => props.theme.colors.light3};
    box-shadow: ${props => props.theme.shadows.shadow1};
    z-index: 10;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 0 2em;


  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 1 / span 8;
    flex-direction: column;
    width: 100%;
    padding: ${props =>
      `${props.theme.spacings.medium} ${props.theme.spacings.large}`};
  }

`
