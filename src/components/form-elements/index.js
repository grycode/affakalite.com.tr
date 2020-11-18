import React from "react"
import styles from "./input.module.scss"

export function Input({ label, ...props }) {
  return (
    <label className={styles.label}>
      <span>{label}</span>
      <input className={styles.input} {...props} />
    </label>
  )
}

export function Textarea({ label, ...props }) {
  return (
    <label className={styles.label}>
      <span>{label}</span>
      <textarea className={styles.input} {...props}></textarea>
    </label>
  )
}
