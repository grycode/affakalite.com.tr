import React from "react"
import { Facebook, Twitter, Linkedin } from "../icons"
import cn from "classnames"
import styles from "./social-icons.module.scss"

export default function SocialIcons({ className }) {
  return (
    <ul className={cn(styles.socialLinks, className)}>
      <li>
        <a
          href="https://www.facebook.com/affa.kalite"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <Facebook />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/affaisguvenligi"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
        >
          <Twitter />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/company/affa-i-g-venli-i-kalite-e-itim-dani-manlik-ltd-ti-/about/"
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
