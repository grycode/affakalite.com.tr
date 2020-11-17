import React from "react"
import Title from "../title"
import { Link } from "gatsby"
import styles from "./content-box.module.scss"

export default function ContentBox({ icon, title, link, children }) {
  return (
    <Link to={link} className={styles.box}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <div className={styles.content}>
        {title && <Title headingLevel="h4">{title}</Title>}
        <p>{children}</p>
      </div>
    </Link>
  )
}
