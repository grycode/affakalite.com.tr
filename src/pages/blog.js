import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"
import { graphql } from "gatsby"
import PostPreview from "../components/post-preview"
import Container from "../components/container"
import styles from "./Blog.module.scss"

export default function Duyurular({ data }) {
  return (
    <>
      <SEO title="Duyurular" />
      <Layout>
        <PageHeader title="Duyurular" />
        <Container>
          <section className={styles.posts}>
            {data.posts.edges.map(({ node }) => (
              <PostPreview
                title={node.frontmatter.title}
                date={node.frontmatter.date}
                slug={node.frontmatter.slug}
                excerpt={node.excerpt}
                image={
                  node.frontmatter.image
                    ? node.frontmatter.image.sharp.fixed
                    : data.noBlogImage.sharp.fixed
                }
              />
            ))}
          </section>
        </Container>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    posts: allMdx(
      filter: { fileAbsolutePath: { glob: "**/content/blog/**/*.md" } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            slug
            date(formatString: "DD-MM, YYYY")
            title
            image {
              sharp: childImageSharp {
                fixed(width: 320, height: 200) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
          excerpt
          body
        }
      }
    }

    noBlogImage: file(relativePath: { eq: "no-blog-image.jpg" }) {
      sharp: childImageSharp {
        fixed(width: 320, height: 200) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`
