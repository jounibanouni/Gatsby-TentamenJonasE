import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { NavWrapper, NavLinks } from "../elements"

export const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <NavWrapper>
      <Link to="/">
        <img src={data.logo.publicURL} alt="My Logo" />
      </Link>
      <NavLinks>
        <a href="google.com" target="_blank" rel="noopener noreferrer">
          Home
        </a>
        <a href="google.com" target="_blank" rel="noopener noreferrer">
          Contact
        </a>
        <a href="google.com" target="_blank" rel="noopener noreferrer">
          About
        </a>
      </NavLinks>
    </NavWrapper>
  )
}
