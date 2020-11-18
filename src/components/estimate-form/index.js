import React from "react"
import Button from "../button"
import { Input } from "../form-elements"
import styles from "./estimate-form.module.scss"

export default function EstimateForm() {
  const [submitText, setSubmitText] = React.useState("Gönder")

  return (
    <form
      className={styles.form}
      name="Teklif Formu"
      netlify-honeypot="bot-field"
      method="POST"
      action="/tesekkurler"
      data-netlify="true"
      onSubmit={e => setSubmitText("Gönderiliyor...")}
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="Teklif Formu" />
      <div>
        <Input
          type="text"
          name="adsoyad"
          label="Yetkili Adı Soyadı"
          placeholder="Yetkili Adı Soyadı"
          required
        />
        <Input
          type="text"
          name="isletme"
          label="İşletmenizin Adı"
          placeholder="İşletmenizin Adı"
          required
        />
        <Input
          type="text"
          name="telefon"
          label="Telefon Numaranız"
          placeholder="Telefon Numaranız"
          required
        />
        <Input
          type="email"
          name="eposta"
          label="E-Posta Adresiniz"
          placeholder="E-Posta Adresiniz"
          required
        />
        <Input
          type="text"
          name="il"
          label="Bulunduğunuz İl"
          placeholder="Bulunduğunuz İl"
          required
        />
        <Input
          type="text"
          name="calisanSayisi"
          label="Çalışan Sayısı"
          placeholder="Çalışan Sayısı"
          required
        />
        <Input
          type="text"
          name="hizmet"
          label="Almak İstediğiniz Hizmet"
          placeholder="Almak İstediğiniz Hizmet"
          required
        />
      </div>
      <div>
        <Button type="submit">{submitText}</Button>
      </div>
    </form>
  )
}
