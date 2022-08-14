import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import Navbar from "./blog-nav"

export default function BlogPost({ data, pageContext }) {
  const post = data.markdownRemark
  const user = data.site.siteMetadata
  const { previous, next } = pageContext

  return (
    <div>
      <Helmet
        title={("Blogs | ") + post.frontmatter.title + (" | ") + user.title}
        meta={[
          { name: 'description', content: post.excerpt },
          { name: 'keywords', content: 'sample, something' },
        ]}
      >
      </Helmet>
      <div className="mx-8 lg:mx-16">
        <Navbar />
      </div>
      <div className="mx-10 lg:mx-16 mt-12">
        <h2>{post.frontmatter.title}</h2>
        <small>{post.frontmatter.date}</small>
        <h4 className="font-edu">{user.author}</h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div>
          {previous && (
            <Link to={`/blog${previous.fields.slug}`}>
              <h5>{previous.frontmatter.title}</h5>
            </Link>
          )}
          {next && (
            <Link to={`/blog${next.fields.slug}`}>
              <h5>{next.frontmatter.title}</h5>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 120)
      frontmatter {
        title
        date(formatString: "dddd, Do MMMM YYYY", locale: "id-ID")
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