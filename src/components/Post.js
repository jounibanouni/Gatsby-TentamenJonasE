import React from "react"
// Import styling from elements folder for this component and eventual other components which is required to complete this component
import { PostWrapper } from "../elements"

export const Post = ({ children }) => {
  return <PostWrapper>{children}</PostWrapper>
}
