module.exports = {
  siteMetadata: {
    title: `Samsul Muarrif`,
    siteUrl: `https://samsulmuarrif.me`,
    menuLinks: [
      {
        name: 'home',
        link: '/'
      },
      {
        name: 'education',
        link: '/education'
      }
    ]
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-react-helmet`
  ],
}
