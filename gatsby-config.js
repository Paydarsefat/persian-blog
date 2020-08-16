module.exports = {
  siteMetadata: {
    title: `احسان گازار`,
    author: {
      name: `احسان گازار`,
      summary: `برنامه نویس، مدرس، بلاگر و صخره نورد`,
    },
    description: `این بلاگ فارسی احسان گازار برای اشتراک گذاری محتوای آموزشی است`,
    siteUrl: `https://fa.ehsangazar.com/`,
    social: {
      twitter: `ehsangazar`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-174171864-1",
        head: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `احسان گازار`,
        short_name: `احسان گازار`,
        start_url: `/`,
        background_color: `#061e3e`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `persian-ehsangazar`,
      },
    },
    "gatsby-plugin-use-query-params",
  ],
}
