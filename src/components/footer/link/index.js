import React from "react"
import { Link } from "gatsby"
import { ChevronRight } from "../../icons"
import styles from "./link.module.scss"

export default function FooterLink({ link, children }) {
  return (
    <li className={styles.item}>
      <Link to={link} className={styles.link}>
        <ChevronRight />
        {children}
      </Link>
    </li>
  )
}
