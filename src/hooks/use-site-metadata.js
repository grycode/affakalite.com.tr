import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          titleTemplate
          description
          url
          image
          twitterUsername
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata
