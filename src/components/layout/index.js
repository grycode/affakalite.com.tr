import React from "react"
import TopBar from "../top-bar"
import Header from "../header"
import styles from "./layout.module.scss"

export default function Layout({ children }) {
  return (
    <>
      <TopBar />
      <Header />
      <main className={styles.layout}>{children}</main>
    </>
  )
}
