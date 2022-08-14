import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import Navbar from "../components/blog-nav"
import { Helmet } from "react-helmet"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
    site: { siteMetadata }
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <div>
      <Helmet
        title={`Blogs | ${siteMetadata.title}`}
        meta={[
          { name: 'description', content: `Blog oleh Samsul Muarrif` },
          { name: 'keywords', content: 'blog, travel, hobby, daliy, activity, coding, photography' },
        ]}
      >
      </Helmet>
      <div className="mx-8 lg:mx-16">
        <Navbar />
      </div>
      <div className="mx-8 lg:mx-16 mt-12">
        {Posts}
      </div>
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "dddd, Do MMMM YYYY", locale: "id-ID")            
            title
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`