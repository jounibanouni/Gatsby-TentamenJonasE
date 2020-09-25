import React from "react"
// Import styling from elements folder for this component and eventual other components which is required to complete this component
import { ContentWrapper, BlogOverviewWrapper } from "../elements"

import {BlogInfo} from "../components"

export const Content = ({ children }) => {
  return <ContentWrapper>
    <BlogInfo />
    <BlogOverviewWrapper>{children}</BlogOverviewWrapper>
    
  </ContentWrapper>
}
