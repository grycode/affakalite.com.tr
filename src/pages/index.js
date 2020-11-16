import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Container from "../components/container"

export default function Home() {
  return (
    <>
      <SEO title="AFFA | İş Güvenliğinde Öncü" />
      <Layout>
        <Hero />
        <Container>Hello world!</Container>
      </Layout>
    </>
  )
}
