import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import _ from "lodash"
import PostLink from "../components/post-link"
import Navbar from "../components/blog-nav"

const IndexBlog = (
  {
    data: {
      allMarkdownRemark: { edges },
      tagsPosts: { group },
      site: { siteMetadata: { title, author, desc } }
    },
  }) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} author={author} />)

  return (
    <div>
      <Helmet
        title={`Blogs | ${title}`}
        meta={[
          { name: 'description', content: `${desc} by ${author}` },
          { name: 'keywords', content: 'blog, travel, hobby, daliy, activity, coding, photography' },
        ]}
      >
      </Helmet>
      <div className="mx-8 lg:mx-16">
        <Navbar />
      </div>
      <div className="lg:grid grid-cols-8 mx-8 lg:mx-14 lg:px-6 mt-4">
        <div className="col-span-6">
          {Posts}
        </div>
        <div className="col-span-2 mt-16 lg:mt-0">
          <div>
            <Link to="/tags">
              <h3 className="mb-4 link-primary text-neutral">Tags</h3>
            </Link>
            <ul>
              {group.map(tag => (
                <li key={tag.fieldValue} className="link-primary text-neutral">
                  <Link to={`/tags/${_.kebabCase(tag.fieldValue)}/`}>
                    {_.startCase(tag.fieldValue)}
                    <span className="px-2 rounded-lg ml-1 text-sm bg-slate-400 text-white">{tag.totalCount}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexBlog

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
            tags
          }
        }
      }
    }
    tagsPosts: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
    site {
      siteMetadata {
        title
        author
        desc
      }
    }
  }
`