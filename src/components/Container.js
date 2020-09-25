import React from "react"
// Import styling from elements folder for this component and eventual other components which is required to complete this component
import { ContainerWrapper } from "../elements"
import { Nav, Footer } from "../components"

export const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      <Nav />
      {children}
      <Footer />
    </ContainerWrapper>
  )
}
