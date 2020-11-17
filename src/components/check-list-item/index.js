import React from "react"
import { Check } from "../icons"
import styles from "./check-list-item.module.scss"

export default function CheckListItem({ children }) {
  return (
    <li className={styles.item}>
      <Check />
      {children}
    </li>
  )
}
