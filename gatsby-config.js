module.exports = {
  siteMetadata: {
    title: "AFFA | İş Güvenliğinde Öncü",
    titleTemplate: "%s | AFFA Kalite",
    description:
      "İş ve yangın güvenliği, CE, ATEX ve ISO belgelendirme, SGK, KVKK ve yatırım teşvikleri ile tek çatı danışmanlık",
    image: "/assets/images/hero.jpg",
    twitterUsername: "@affaisguvenligi",
    siteUrl: `https://affakalite.com.tr`,
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 80,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AFFA Kalite`,
        short_name: `AFFA Kalite`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#F05858`,
        display: `standalone`,
        icon: `${__dirname}/static/assets/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/assets/images`,
      },
    },

    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify-cms-paths`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-relative-images`,
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              tracedSVG: true,
              showCaptions: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: "G-49JC1RRCK5",
        head: true,
      },
    },
  ],
}
