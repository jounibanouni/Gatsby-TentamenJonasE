import React from "react"
//Import img function from gatsby-image for gatsby graphql queries
import Img from "gatsby-image"
// Call for optimized images requires graphql and staticquery
import { useStaticQuery, graphql } from "gatsby"
// Import styling from elements folder for this component
import { FeatureImageWrapper } from "../elements"

//Component, useStaticQuery and search for originalname of the file
export const FeatureImage = ({ fixed }) => {
  const data = useStaticQuery(graphql`
    query {
      imageSharp(fixed: { originalName: { eq: "sushi-overlay.jpg" } }) { 
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `)

  //Make image responsive with styling in here
  return (
    <FeatureImageWrapper>
      <Img
        fixed={fixed ? fixed : data.imageSharp.fixed}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </FeatureImageWrapper>
  )
}
