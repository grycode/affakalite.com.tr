import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageHeader from "../components/page-header"
import Container from "../components/container"
import SEO from "../components/seo"
import Img from "gatsby-image"
import cn from "classnames"
import styles from "./page.module.scss"

export default function PageTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <PageHeader title={frontmatter.title} />
      <Container>
        <div
          className={cn(
            styles.content,
            frontmatter.image ? styles.contentWithRightImage : null
          )}
        >
          <div dangerouslySetInnerHTML={{ __html: html }} />
          {frontmatter.image && (
            <div>
              <Img
                fluid={frontmatter.image.sharp.fluid}
                alt={frontmatter.title}
              />
            </div>
          )}
        </div>
      </Container>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        image {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        title
      }
    }
  }
`
