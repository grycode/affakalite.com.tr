import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Container from "../components/container"
import Title from "../components/title"
import ContentBox from "../components/content-box"
import { Award, CheckCircle, Heart, Smile, Users } from "../components/icons"
import CheckListItem from "../components/check-list-item"
import { graphql, Link } from "gatsby"
import styles from "./Index.module.scss"

export default function Home({ data }) {
  return (
    <>
      <SEO title="AFFA | İş Güvenliğinde Öncü" />
      <Layout>
        <Hero />
        <Container>
          <section>
            <header>
              <Title headingLevel="h3">Hizmetlerimiz</Title>
            </header>
            <div id="hizmetlerimiz" className={styles.services}>
              <ContentBox
                icon={<Users />}
                title="Ortak Sağlık ve Güvenlik Birimi"
                link="/ortak-saglik-ve-guvenlik-birimi"
              >
                En eski iş güvenliği firması olarak hizmetinizdeyiz.
              </ContentBox>
              <ContentBox
                icon={<Heart />}
                title="İlkyardım Eğitim Merkezi"
                link="/ilk-yardim-egitim-merkezi"
              >
                Her yıl 10.000 insanımız hastane dışında gelişen ani kalp
                durması sonucu kurtarılabilecekken ölüyor. Buna sadece toplum
                “DUR” deme şansına sahiptir.
              </ContentBox>
              <ContentBox
                icon={<Award />}
                title="Belgelendirme"
                link="/belgelendirme"
              >
                Siz üretin biz belgelendirelim.
              </ContentBox>
              <ContentBox
                icon={<Smile />}
                title="Çevre Danışmanlığı"
                link="/cevre-danismanligi"
              >
                Daha sağlıklı çevre için çevre hizmeti.
              </ContentBox>
              <ContentBox
                icon={<CheckCircle />}
                title="İşverenler İçin İstihdam Teşvikleri Danışmanlık Hizmeti"
                link="/istihdam-tesvikleri"
              >
                Sosyal güvenlik alanında devlet tarafından sağlanan teşviklerden
                tam analamıyla yararlanabiliyor musunuz?
              </ContentBox>
            </div>
          </section>
          <section className={styles.whyUs}>
            <div>
              <Title headingLevel="h3">Neden AFFA Group?</Title>
              <ul>
                <CheckListItem>Sektörün ilk iş güvenliği şirketi</CheckListItem>
                <CheckListItem>
                  Tecrübeli kadro ile genç dinamizmi bir arada harmanlayabilen
                </CheckListItem>
                <CheckListItem>
                  Türkiye’nin önde gelen kurumsal firmaları ve üniversitelerdeki
                  danışmanlık faaliyetleri
                </CheckListItem>
                <CheckListItem>
                  Personel belgelendirme, ürün belgelendirme ve üretimi
                  destekleyen kalite yönetim hizmetleri gerçekleştirebilen
                </CheckListItem>
                <CheckListItem>
                  AFFA Grupta çalışmanın paydaş sektörlerde kabul edilebilirliği
                </CheckListItem>
              </ul>
            </div>
            <div>
              <Title headingLevel="h3">Haberler & Duyurular</Title>
              <div className={styles.posts}>
                {data.haberler.edges.map(({ node }) => (
                  <Link to={`/${node.frontmatter.slug}`}>
                    <strong>{node.frontmatter.title}</strong>
                    <small>{node.frontmatter.date}</small>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </Container>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    haberler: allMdx(
      filter: { fileAbsolutePath: { glob: "**/content/blog/**/*.md" } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 5
    ) {
      edges {
        node {
          frontmatter {
            slug
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
