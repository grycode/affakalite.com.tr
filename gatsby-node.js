exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  // create blog posts
  const blogPostTemplate = require.resolve(`./src/templates/blog-post.js`)

  const postsQuery = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/content/blog/**/*.md" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  // handle errors
  if (postsQuery.errors) {
    reporter.panicOnBuild("Error while running posts GraphQL query.")
    return
  }

  postsQuery.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })

  // create pages
  const pageTemplate = require.resolve(`./src/templates/page.js`)

  const pagesQuery = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/content/pages/**/*.md" } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  // handle errors
  if (pagesQuery.errors) {
    reporter.panicOnBuild("Error while running pages GraphQL query.")
    return
  }

  pagesQuery.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: pageTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}
