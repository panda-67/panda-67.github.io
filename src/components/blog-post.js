import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import Navbar from "./blog-nav"
import SidePost from "./side-post"

const BlogPost = (
  {
    data: {
      allMarkdownRemark: { edges },
      site: { siteMetadata: { title, author } }, markdownRemark
    },
    pageContext
  }) => {
  const { frontmatter, html, excerpt } = markdownRemark
  const { previous, next } = pageContext
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <SidePost key={edge.node.id} post={edge.node} />)

  return (
    <div>
      <Helmet
        title={(`Blogs | `) + frontmatter.title + (` | `) + title}
        meta={[
          { name: 'description', content: excerpt },
          { name: 'keywords', content: 'blog, folio' },
        ]}
      >
      </Helmet>
      <div className="mx-8 lg:mx-16">
        <Navbar />
      </div>
      <div className="mx-10 lg:mx-16 mt-8 grid grid-cols-10 gap-6">

        {/* Left Sidebar */}
        <div className="col-span-2 text-right">
          <h3>left side</h3>
        </div>

        {/* Content */}
        <div className="col-span-6">
          <div className="flex flex-col">
            <div>
              <h2>{frontmatter.title}</h2>
              <small>{frontmatter.date}</small>
              <h4 className="font-edu">{author}</h4>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
            <div className="mt-12 w-full flex justify-between">
              <div>
                {previous && (
                  <Link to={`/blog${previous.fields.slug}`}>
                    <div className="flex gap-2 items-center link-primary text-neutral">
                      <span>&larr;</span>
                      <h5>{previous.frontmatter.title}</h5>
                    </div>
                  </Link>
                )}
              </div>
              <div>
                {next && (
                  <Link to={`/blog${next.fields.slug}`}>
                    <div className="flex gap-2 items-center link-primary text-neutral">
                      <h5>{next.frontmatter.title}</h5>
                      <span>&rarr;</span>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="col-span-2">
          <h3>Recent Post</h3>
          <div>
            {Posts}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost

export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark (fields: { slug: { eq: $slug }}) {
      html
      excerpt(pruneLength: 120)
      frontmatter {
        title
        date(formatString: "dddd, Do MMMM YYYY", locale: "id-ID")
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 2) {
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