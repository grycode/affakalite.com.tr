import React from "react"
import Container from "../container"
import SocialIcons from "../social-icons"
import Title from "../title"
import styles from "./footer.module.scss"
import FooterLink from "./link"

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <Container className={styles.footerContainer}>
          <div className={styles.col}>
            <Title headingLevel="h5">AFFA GROUP</Title>
            <p>
              Kamu kurumlarında görev yapan şirket yöneticilerimiz, 17 ağustos
              marmara depreminde kriz yönetim merkezinde resmi görevler
              üstlenmiş, deprem arama kurtarma ve tüpraş yangınında etkin
              görevlerde bulunmuş normalleşme çalışmalarında aktif rol
              oynamışlardır. 2002 yılında faaliyete başlayan şirket
              yöneticilerimiz 2006 yılından itibaren şirketi kurmak için adım
              atmışlardır.
            </p>
          </div>

          <div className={styles.col}>
            <Title headingLevel="h5">KURUMSAL</Title>
            <ul>
              <FooterLink link="/hakkimizda">Hakkımızda</FooterLink>
              <FooterLink link="/kalite-politikamiz">
                Kalite Politikamız
              </FooterLink>
              <FooterLink link="/belgelerimiz">Belgelerimiz</FooterLink>
              <FooterLink link="/insan-kaynaklari">İnsan Kaynakları</FooterLink>
              <FooterLink link="/kvkk-ve-gizlilik-politikasi">
                KVKK ve Gizlilik politikası
              </FooterLink>
              <FooterLink link="/hakkimizda">Uzaktan Eğitim</FooterLink>
            </ul>
          </div>

          <div className={styles.col}>
            <Title headingLevel="h5">HİZMETLERİMİZ</Title>
            <ul>
              <FooterLink link="/ortak-saglik-ve-guvenlik-birimi">
                Ortak Sağlık ve Güvenlik Birimi
              </FooterLink>
              <FooterLink link="/ilk-yardim-egitim-merkezi">
                İlk Yardım Eğitim Merkezi
              </FooterLink>
              <FooterLink link="/cevre-danismanligi">
                Çevre Danışmanlığı
              </FooterLink>
              <FooterLink link="/belgelendirme">Belgelendirme</FooterLink>
              <FooterLink link="/egitimlerimiz">Eğitimlerimiz</FooterLink>
            </ul>
          </div>

          <div className={styles.col}>
            <Title headingLevel="h5">İLETİŞİM BİLGİLERİ</Title>
            <p>
              AFFA İstanbul İş Güvenliği Laboratuvar Belgelendirme Eğitim ve
              Mühendislik A.Ş.
              <br />
              <br />
              Cumhuriyet Mh. Uludağ Sk. No: 15/3 34520 Beykent, Büyükçekmece,
              İstanbul
              <br />
              <br />
              Tel: +90 212 871 1060
              <br />
              Tel: +90 850 495 5606
              <br />
              Fax: +90 212 870 1061
              <br />
              Email:{" "}
              <a href="mailto:info@affakalite.com.tr">info@affakalite.com.tr</a>
            </p>
          </div>
        </Container>
      </footer>
      <div className={styles.copyright}>
        <Container className={styles.copyrightContainer}>
          <span>
            Copyright {new Date().getFullYear()} affakalite.com.tr | Tüm hakları
            saklıdır.
          </span>
          <SocialIcons />
        </Container>
      </div>
    </>
  )
}
