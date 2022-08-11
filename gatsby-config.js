module.exports = {
  siteMetadata: {
    title: `myfol`,
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
