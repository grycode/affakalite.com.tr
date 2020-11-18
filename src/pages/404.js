import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"
import Container from "../components/container"
import Button from "../components/button"

export default function Iletisim() {
  return (
    <Layout>
      <SEO title="İletişim" />
      <PageHeader title="404 - Sayfa Bulunamadi" />
      <Container>
        <div
          style={{
            paddingTop: "3rem",
            paddingBottom: "3rem",
            textAlign: "center",
          }}
        >
          <p>
            Üzgünüz, aradığınız sayfa bulunamadı. Lütfen mevcut url'yi
            yazdığınızdan emin olun.
          </p>
          <Button to="/">Ana Sayfaya Geri Dön</Button>
        </div>
      </Container>
    </Layout>
  )
}
