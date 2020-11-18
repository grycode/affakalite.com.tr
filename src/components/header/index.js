import React from "react"
import Container from "../container"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Spin as Hamburger } from "hamburger-react"
import cn from "classnames"
import { Minus, Plus } from "../icons"
import styles from "./header.module.scss"

export default function Header() {
  const [isOpen, setOpen] = React.useState(false)
  const [kurumsalSubMenu, setKurumsalSubMenu] = React.useState(false)
  const [hizmetlerimizSubMenu, setHizmetlerimizSubMenu] = React.useState(false)

  return (
    <StaticQuery
      query={query}
      render={data => (
        <header className={cn(styles.header, isOpen ? styles.open : null)}>
          <Container className={styles.container}>
            <Link to="/" className={styles.logo}>
              <Img
                style={{ width: "inherit", height: "inherit" }}
                fixed={data.logo.sharp.fixed}
                alt="logo"
              />
            </Link>
            <div className={styles.hamburger}>
              <Hamburger
                rounded
                toggled={isOpen}
                toggle={setOpen}
                label="Toggle menu"
                distance="sm"
              />
            </div>
            <nav className={styles.nav}>
              <ul className={styles.menu}>
                <li>
                  <Link to="/" activeClassName={styles.active}>
                    Ana Sayfa
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={e => setKurumsalSubMenu(!kurumsalSubMenu)}
                    activeClassName={styles.active}
                    className={styles.hasSub}
                  >
                    Kurumsal
                    {kurumsalSubMenu ? <Minus /> : <Plus />}
                  </Link>
                  <ul
                    style={{ display: kurumsalSubMenu ? "block" : "none" }}
                    className={styles.subMenu}
                  >
                    <li>
                      <Link to="/hakkimizda" activeClassName={styles.active}>
                        Hakkimizda
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/kalite-politikamiz"
                        activeClassName={styles.active}
                      >
                        Kalite Politikamız
                      </Link>
                    </li>
                    <li>
                      <Link to="/belgelerimiz" activeClassName={styles.active}>
                        Belgelerimiz
                      </Link>
                    </li>
                    <li>
                      <Link to="/kariyer" activeClassName={styles.active}>
                        Kariyer
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={e =>
                      setHizmetlerimizSubMenu(!hizmetlerimizSubMenu)
                    }
                    activeClassName={styles.active}
                    className={styles.hasSub}
                  >
                    Hizmetlerimiz
                    {hizmetlerimizSubMenu ? <Minus /> : <Plus />}
                  </Link>
                  <ul
                    style={{
                      display: hizmetlerimizSubMenu ? "block" : "none",
                    }}
                    className={styles.subMenu}
                  >
                    <li>
                      <Link
                        to="/ortak-saglik-ve-guvenlik-birimi"
                        activeClassName={styles.active}
                      >
                        Ortak Sağlık ve Güvenlik Birimi
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ilk-yardim-egitim-merkezi"
                        activeClassName={styles.active}
                      >
                        İlk Yardım Eğitim Merkezi
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/cevre-danismanligi"
                        activeClassName={styles.active}
                      >
                        Çevre Danışmanlığı
                      </Link>
                    </li>
                    <li>
                      <Link to="/belgelendirme" activeClassName={styles.active}>
                        Belgelendirme
                      </Link>
                    </li>
                    <li>
                      <Link to="/egitimlerimiz" activeClassName={styles.active}>
                        Eğitimlerimiz
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/teklif-iste" activeClassName={styles.active}>
                    Teklif İste
                  </Link>
                </li>
                <li>
                  <Link to="/blog" activeClassName={styles.active}>
                    Duyurular
                  </Link>
                </li>
                <li>
                  <Link to="/uzaktan-egitim" activeClassName={styles.active}>
                    Uzaktan Eğitim
                  </Link>
                </li>
                <li>
                  <Link to="/iletisim" activeClassName={styles.active}>
                    İletişim
                  </Link>
                </li>
              </ul>
            </nav>
          </Container>
        </header>
      )}
    />
  )
}

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "logo.png" }) {
      sharp: childImageSharp {
        fixed(width: 100) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`
