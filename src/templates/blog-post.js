import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageHeader from "../components/page-header"
import Container from "../components/container"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styles from "./blog-post.module.scss"

export default function BlogPostTemplate({ data }) {
  const { mdx } = data
  const { frontmatter, body } = mdx
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <PageHeader title={frontmatter.title} />
      <Container>
        <div className={styles.content}>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </Container>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
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
