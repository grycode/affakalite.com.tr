import React from "react"
import { Facebook, Twitter, Linkedin } from "../icons"
import cn from "classnames"
import styles from "./social-icons.module.scss"

export default function SocialIcons({ className }) {
  return (
    <ul className={cn(styles.socialLinks, className)}>
      <li>
        <a
          href="https://www.facebook.com/ozelcivata"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <Facebook />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/ozelcivata"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
        >
          <Twitter />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/%C3%B6zel-c%C4%B1vata-251262133/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <Linkedin />
        </a>
      </li>
    </ul>
  )
}
