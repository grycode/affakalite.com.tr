module.exports = {
  siteMetadata: {
    title: "AFFA | İş Güvenliğinde Öncü",
    titleTemplate: "%s | AFFA Kalite",
    description:
      "İş ve yangın güvenliği, CE, ATEX ve ISO belgelendirme, SGK, KVKK ve yatırım teşvikleri ile tek çatı danışmanlık",
    url: "https://affakalite.com.tr",
    image: "/assets/images/ozel-civata-ozel-parcalar-1.jpg",
    twitterUsername: "@affaisguvenligi",
    siteUrl: `https://affakalite.com.tr`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 80,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Affa Kalite`,
        short_name: `AFFA Kalite`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#F05858`,
        display: `standalone`,
        icon: `${__dirname}/static/assets/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/assets/images`,
      },
    },
    `gatsby-plugin-sass`,
  ],
}
