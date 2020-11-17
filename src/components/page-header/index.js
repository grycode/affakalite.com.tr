import React from "react"
import Container from "../container"
import Title from "../title"
import styles from "./page-header.module.scss"

export default function PageHeader({ title }) {
  return (
    <div className={styles.pageHeader}>
      <Container>
        <Title headingLevel="h1" className={styles.title}>
          {title}
        </Title>
      </Container>
    </div>
  )
}
