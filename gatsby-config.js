module.exports = {
  siteMetadata: {
    title: `Samsul Muarrif`,
    author: `panda_67`,
    siteUrl: `https://samsulmuarrif.me`,
    desc: `My personal blogs`,
    socials: [
      {
        name: `Twitter`,
        url: `https://twitter.com/sams_panda`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/panda-67`,
      },
      {
        name: `LinkedIn`,
        url: `https://id.linkedin.com/in/samsul-muarrif`
      },
      {
        name: `Instagram`,
        url: `https://www.instagram.com/Sams_67/`
      }
    ],
    menuLinks: [
      {
        name: `portfolio`,
        link: `/portfolio`
      },
      {
        name: `blog`,
        link: `/blog`
      },
      {
        name: `about`,
        link: `/about`
      },


    ],
    polioPath: [
      {
        name: `experience`,
        link: ``
      },
      {
        name: `expertise`,
        link: `/expertise`
      },
      {
        name: `education`,
        link: `/education`
      },
    ]
  },
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [
          `**/dev-404-page/**`,
          `**/404/**`,
          `**/404.html`,
          `**/offline-plugin-app-shell-fallback/**`
        ],
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-5Y0YE62DL0", // Google Analytics / GA
          //"AW-CONVERSION_ID", // Google Ads / Adwords / AW
          //"DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          origin: "https://www.googletagmanager.com",
        },
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        // useAutoGen: required 'true' to use autogen
        useAutoGen: true,
        // autoGenHomeLabel: optional 'Home' is default
        autoGenHomeLabel: `Welcome`,
        // exclude: optional, include this array to exclude paths you don't want to
        // generate breadcrumbs for (see below for details).
        exclude: [
          `**/dev-404-page/**`,
          `**/404/**`,
          `**/404.html`,
          `**/offline-plugin-app-shell-fallback/**`
        ],
        // isMatchOptions: optional, include this object to configure the wildcard-match library.
        excludeOptions: {
          separator: '.'
        },
        // crumbLabelUpdates: optional, update specific crumbLabels in the path
        crumbLabelUpdates: [
          {
            pathname: '/blog',
            crumbLabel: 'Blogs'
          }
        ],
        // trailingSlashes: optional, will add trailing slashes to the end
        // of crumb pathnames. default is false
        trailingSlashes: false,
      },
    },
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
