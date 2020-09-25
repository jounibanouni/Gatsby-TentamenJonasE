import React from "react"
// Import styling from elements folder for this component and eventual other components which is required to complete this component
import { PaginationWrapper, PaginationElement } from "../elements"

//Include variables to use for styling properly
export const Pagination = ({ isFirst, isLast, prevPage, nextPage }) => {
  return (
    <PaginationWrapper isFirst={isFirst} isLast={isLast}>
      <PaginationElement to={prevPage}>Previous Page</PaginationElement>
      <PaginationElement to={nextPage}>Next Page</PaginationElement>
    </PaginationWrapper>
  )
}
