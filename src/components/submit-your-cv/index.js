import React from "react"
import { Link } from "gatsby"
import Button from "../button"
import { Input } from "../form-elements"
import styles from "./submit-your-cv.module.scss"

export default function SubmitYourCv() {
  const [submitText, setSubmitText] = React.useState("CV Gönder")

  return (
    <form
      className={styles.form}
      name="IK Formu"
      netlify-honeypot="bot-field"
      method="POST"
      action="/tesekkurler"
      data-netlify="true"
      onSubmit={e => setSubmitText("Gönderiliyor...")}
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="IK Formu" />
      <div className={styles.row}>
        <div>
          <Input
            type="text"
            name="name"
            label="Ad Soyad"
            placeholder="Ad Soyad"
            required
          />
          <Input
            type="email"
            name="email"
            label="E-Posta Adresiniz"
            placeholder="E-Posta Adresiniz"
            required
          />
        </div>
        <div>
          <Input
            type="text"
            name="phone"
            label="Telefon Numaraniz"
            placeholder="Telefon Numaraniz"
            required
          />

          <Input
            type="file"
            name="cv"
            label="CV'nizi yükleyin (doc, pdf) "
            placeholder="CV'nizi yükleyin (doc, pdf)"
            accept=".pdf,.doc,.docx,.rtf"
            required
          />
        </div>
      </div>
      <p className={styles.warning}>
        Gönder butonuna basarak, CV (Özgeçmiş) paylaşmanız durumunda, kişisel
        verilerinizi toplamış olacağımızı,{" "}
        <Link to="/kvkk-ve-gizlilik-politikasi">
          Kişisel Verilerin Korunması Kanunu Aydınlatma Metni
        </Link>{" "}
        beyanımızda belirttiğimiz koşullarda ve Kişisel Verilerin Korunması
        Kanunu kapsamında saklayacağımızı, işleyeceğimizi ve amacına uygun
        şekilde, iş bulmanızı sağlamak amacı ile paylaşacağımızı kabul etmiş
        olursunuz. CV'nizi göndermeden önce, lütfen{" "}
        <Link to="/kvkk-ve-gizlilik-politikasi">
          Kişisel Verilerin Korunması Kanunu Aydınlatma Metni
        </Link>{" "}
        beyanımızı okuyunuz.
      </p>
      <div>
        <Button type="submit">{submitText}</Button>
      </div>
    </form>
  )
}
