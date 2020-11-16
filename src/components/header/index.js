import React from "react"
import Container from "../container"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Spin as Hamburger } from "hamburger-react"
import cn from "classnames"
import styles from "./header.module.scss"

export default function Header() {
  const [isOpen, setOpen] = React.useState(false)

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
            <nav className={styles.nav}>
              <ul>
                <li>
                  <Link to="/" activeClassName={styles.active}>
                    Ana Sayfa
                  </Link>
                </li>
                <li>
                  <Link to="#" activeClassName={styles.active}>
                    Kurumsal
                  </Link>
                </li>
                <li>
                  <Link to="#" activeClassName={styles.active}>
                    Hizmetlerimiz
                  </Link>
                </li>
                <li>
                  <Link to="/" activeClassName={styles.active}>
                    Teklif İste
                  </Link>
                </li>
                <li>
                  <Link to="/duyurular" activeClassName={styles.active}>
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
            <div className={styles.hamburger}>
              <Hamburger
                rounded
                toggled={isOpen}
                toggle={setOpen}
                label="Toggle menu"
                distance="sm"
              />
            </div>
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
        fixed {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`
