module.exports = {
  siteMetadata: {
    title: `Samsul Muarrif`,
    author: `panda_67`,
    siteUrl: `https://samsulmuarrif.me`,
    description: `My personal blogs`,
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/sams_panda`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/panda-67`,
      },
    ],
    menuLinks: [
      {
        name: 'welcome',
        link: '/'
      },
      {
        name: 'expertise',
        link: '/expertise'
      },
      {
        name: 'experience',
        link: '/experience'
      },
      {
        name: 'education',
        link: '/education'
      },
      {
        name: 'about',
        link: '/about'
      },
      {
        name: `blog`,
        link: `/blogs`
      }
    ]
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/content/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pictures`,
        path: `${__dirname}/content/assets/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Samsul Muarrif",
        short_name: "panda_67",
        start_url: "/",
        background_color: "#4b0082",
        theme_color: "#4b0082",
        display: "standalone",
        icon: "src/images/icon.svg",
        crossOrigin: `use-credentials`,
      },
    }
  ],
}
