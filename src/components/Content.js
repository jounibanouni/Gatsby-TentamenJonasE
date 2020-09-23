import React from "react"
import { ContentWrapper, BlogOverviewWrapper } from "../elements"
import {BlogInfo} from "../components"

export const Content = ({ children }) => {
  return <ContentWrapper>
    <BlogInfo />
    <BlogOverviewWrapper>{children}</BlogOverviewWrapper>
    
  </ContentWrapper>
}
