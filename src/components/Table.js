import React from "react"
// Import styling from elements folder for this component and eventual other components which is required to complete this component
import { TableWrapper } from "../elements"

export const Table = ({ children }) => {
  return (
    <TableWrapper>
      <table>{children}</table>
    </TableWrapper>
  )
}
