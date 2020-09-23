import styled from "styled-components"

export const CardWrapper = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.mainContent};

  @media ${props => props.theme.breakpoints.mobile} {
    width: auto;
    padding: ${props =>
      `${props.theme.spacings.xSmall} ${props.theme.spacings.xSmall}`};
  }


`