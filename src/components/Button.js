import React from "react"
// Import styling from elements folder for this component and eventual other components which is required to complete this component
import { ButtonWrapper } from "../elements"

export const Button = ({ children, href }) => {
  // Note the link, dont forget to add "/" + before href in the ButtonWrapper
  return <ButtonWrapper to={"/" + href}>{children}</ButtonWrapper>
}


//testar