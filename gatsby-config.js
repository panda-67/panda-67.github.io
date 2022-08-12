module.exports = {
  siteMetadata: {
    title: `Samsul Muarrif`,
    siteUrl: `https://samsulmuarrif.me`,
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
      }
    ]
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: "standalone",
        icon: "src/images/icon.png",
        crossOrigin: `use-credentials`,
      },
    }
  ],
}
