import React from "react"
import Container from "../container"
import Title from "../title"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Button from "../button"
import styles from "./hero.module.scss"

const Hero = () => (
  <StaticQuery
    query={graphql`
      query {
        hero: file(relativePath: { eq: "hero.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.hero.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={styles.hero}
          fluid={imageData}
        >
          <Container className={styles.container}>
            <Title headingLevel="h2">Sektörün İlk İş Güvenliği Firması</Title>
            <Title headingLevel="p">
              İş ve yangın güvenliği, CE, ATEX ve ISO belgelendirme, SGK, KVKK
              danışmanlığı ile tek çatı danışmanlık.
            </Title>
            <Button to="#hizmetlerimiz" type="secondary">
              Hizmetlerimiz
            </Button>
          </Container>
        </BackgroundImage>
      )
    }}
  />
)

export default Hero
