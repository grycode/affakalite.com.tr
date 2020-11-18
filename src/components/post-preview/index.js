import React from "react"
import Title from "../title"
import Img from "gatsby-image"
import { Link } from "gatsby"
import styles from "./post-preview.module.scss"

export default function PostPreview({ title, slug, excerpt, date, image }) {
  return (
    <article className={styles.article}>
      <Link to={`/${slug}`} className={styles.content}>
        <div className={styles.date}>
          <span className={styles.day}>{date.split("-")[0]}</span>
          <span className={styles.monthAndYear}>{date.split("-")[1]}</span>
        </div>
        <div className={styles.image}>
          <Img fixed={image} alt={title} />
        </div>
        <div className={styles.excerpt}>
          <Title className={styles.title} headingLevel="h4">
            {title}
          </Title>
          <small>{date}</small>
          <p>{excerpt}</p>
        </div>
      </Link>
      <Link className={styles.readMore} to={`/${slug}`}>
        Devamini Oku
      </Link>
    </article>
  )
}
