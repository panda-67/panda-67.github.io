module.exports = {
  siteMetadata: {
    title: `Samsul Muarrif`,
    author: `panda_67`,
    siteUrl: `https://samsulmuarrif.me`,
    desc: `My personal blogs`,
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
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `tags`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            tags: node => node.frontmatter.tags,
            path: node => node.fields.slug,
          },
        },
        // Optional filter to limit indexed nodes
        filter: (node, getNode) => node.frontmatter.tags !== "exempt",
      },
    },
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
