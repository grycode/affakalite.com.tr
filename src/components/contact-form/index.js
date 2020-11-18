import React from "react"
import Button from "../button"
import { Input, Textarea } from "../form-elements"
import styles from "./contact.module.scss"

export default function ContactForm() {
  const [submitText, setSubmitText] = React.useState("Gönder")

  return (
    <form
      className={styles.form}
      name="Iletisim Formu"
      netlify-honeypot="bot-field"
      method="POST"
      action="/tesekkurler"
      data-netlify="true"
      onSubmit={e => setSubmitText("Gönderiliyor...")}
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="Iletisim Formu" />
      <div>
        <Input
          type="text"
          name="adsoyad"
          label="Yetkili Adı Soyadı"
          placeholder="Yetkili Adı Soyadı"
          required
        />
        <Input
          type="email"
          name="eposta"
          label="E-Posta Adresiniz"
          placeholder="E-Posta Adresiniz"
          required
        />
        <Textarea label="Mesajınız" cols="40" rows="9" name="mesaj" />
      </div>
      <div>
        <Button type="submit">{submitText}</Button>
      </div>
    </form>
  )
}
