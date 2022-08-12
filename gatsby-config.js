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
      }
    ]
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {        
        icon: "src/images/icon.png",
        crossOrigin: `use-credentials`,
      },
    }
  ],
}
