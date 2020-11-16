import React from "react"
import Container from "../container"
import SocialIcons from "../social-icons"
import styles from "./top-bar.module.scss"

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <Container className={styles.container}>
        <div className={styles.contactInfo}>
          <div className={styles.left}>
            <span>Bize Ulaşın: 0850 495 56 06</span>
            <a href="mailto:info@affakalite.com.tr">info@affakalite.com.tr</a>
          </div>
          <div className={styles.right}>
            <SocialIcons />
          </div>
        </div>
      </Container>
    </div>
  )
}
