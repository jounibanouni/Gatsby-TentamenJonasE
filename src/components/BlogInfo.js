import React from "react"

import {P, H1} from "../elements"
import {BlogTitleWrapper} from "../elements"

export const BlogInfo = () => {
    return <BlogTitleWrapper>
        <H1 color="blogTitle" textAlign="center" margin="0 0 1rem 0">
          Elit rhoncus tellus proin parturient.
        </H1>
        <P color="blogTitle" textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
          volutpat risus quis lorem pulvinar et pulvinar sit dictum. Eget orci,
          orci in congue cursus nulla tincidunt facilisi.
        </P>
    </BlogTitleWrapper>
  }
