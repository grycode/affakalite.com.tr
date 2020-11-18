import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import Title from "../components/title"
import ContactForm from "../components/contact-form"
import { Mail, MapPin, Phone, Printer } from "../components/icons"
import styles from "./Iletisim.module.scss"

export default function Iletisim() {
  return (
    <>
      <SEO title="İletişim" />
      <Layout>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12041.320767833886!2d28.6232925!3d41.0180315!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6dcf1beba4b22159!2sAffa%20Kalite!5e0!3m2!1sen!2suk!4v1605716192042!5m2!1sen!2suk"
          width="100%"
          height="450"
          frameborder="0"
          className={styles.map}
          title="harita"
        ></iframe>
        <Container className={styles.container}>
          <div>
            <Title headingLevel="h3">İletişim Formu</Title>
            <p>
              Aşağıdaki formu kullanarak bize istek, öneri ve şikayetlerinizi
              iletebilirsiniz.
            </p>
            <ContactForm />
          </div>
          <div>
            <Title headingLevel="h3">İletişim Bilgileri</Title>
            <p>
              AFFA İstanbul İş Güvenliği Laboratuvar Belgelendirme Eğitim ve
              Mühendislik A.Ş.
            </p>
            <div className={styles.iconBoxes}>
              <p>
                <MapPin /> <strong>Adres: </strong> Cumhuriyet Mh. Uludağ Sk.
                No: 15/3 34520 Beykent, Büyükçekmece, İstanbul
              </p>
              <p>
                <Phone /> <strong>Tel: </strong>
                +90 212 871 1060
              </p>
              <p>
                <Phone /> <strong>Tel: </strong>
                +90 850 495 5606
              </p>
              <p>
                <Printer /> <strong>Fax: </strong>
                +90 212 870 1061
              </p>
              <p>
                <Mail /> <strong>E-Posta: </strong>
                <a href="mailto:info@affakalite.com.tr">
                  info@affakalite.com.tr
                </a>
              </p>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  )
}
