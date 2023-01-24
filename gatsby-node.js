const path = require(`path`)
const _ = require(`lodash`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { paginate } = require(`gatsby-awesome-pagination`)

exports.createPages = ({ graphql, actions }) => {

  const { createPage } = actions
  const blogList = path.resolve("./src/templates/blog-list.js")
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const blogTags = path.resolve(`./src/templates/blog-tags.js`)

  return graphql(`{
  postsRemark: allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: 1000) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          tags
        }
      }
    }
  }
  tagsGroup: allMarkdownRemark(limit: 2000) {
    group(field: {frontmatter: {tags: SELECT}}) {
      fieldValue
    }
  }
}`).then(result => {
    if (result.errors) { throw result.errors }

    const allPosts = result.data.postsRemark.edges

    // Create your paginated pages
    paginate({
      createPage, // The Gatsby `createPage` function
      items: allPosts, // An array of objects
      itemsPerPage: 5, // How many items you want per page
      pathPrefix: '/blog', // Creates pages like `/blog`, `/blog/2`, etc
      component: blogList, // Just like `createPage()`
    })   

    // Create blog posts pages.
    const feeds = result.data.postsRemark.edges

    feeds.forEach((post, index) => {
      const previous = index === feeds.length - 1 ? null : feeds[index + 1].node
      const next = index === 0 ? null : feeds[index - 1].node

      createPage({
        path: `blog${post.node.fields.slug}`,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    // Make tag pages
    const tags = result.data.tagsGroup.group

    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag.fieldValue)}`,
        component: blogTags,
        context: {
          tag: tag.fieldValue,
        },
      })
    })
  });
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}