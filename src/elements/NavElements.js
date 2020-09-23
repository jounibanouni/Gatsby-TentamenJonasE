import styled from "styled-components"

export const NavWrapper = styled.nav`
  grid-column: 1 / span 12;
  grid-row: 1 / 2;
  background-color: ${props => props.theme.colors.navBackground};
  display: flex;
  align-items: center;
  padding: 1.5em;
  justify-content: space-between;
  img{
    height: 60px;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 1 / span 8;
    padding: 0;
    margin: 0;
    justify-content: center;

    img{
      padding: 1em;
    }
  }
  
`
export const NavLinks = styled.nav`

  justify-content: flex-end;
  align-items: center;
  padding: 1.2em;
  

  a{
    color: ${props => props.theme.colors.link};
    text-decoration: none;
    font-size: 1.2em;
    line-height: 2em;
    margin: 0 3em 0 1em;
  }

  a:hover,
  a:focus {
    filter: brightness(50%);
  }

  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 1 / span 8;
    padding: 0;
    margin: 0;

    a{
      font-size: 1em;
    }

    img{
      margin-left: 1em;
    }
  }
`
