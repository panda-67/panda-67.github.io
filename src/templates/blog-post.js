import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import _ from "lodash"
import Navbar from "../components/blog-nav"
import SidePost from "../components/side-post"

const BlogPost = (
  {
    data: {
      recentPosts: { edges },
      tagsPosts: { group },
      site: { siteMetadata: { title, author } }, 
      markdownRemark: { frontmatter, html, excerpt }
    },
    pageContext: { previous, next }
  }) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <SidePost key={edge.node.id} post={edge.node} />)

  return (
    <div>
      <Helmet
        title={(`Blogs | `) + frontmatter.title + (` | `) + title}
        meta={[
          { name: 'description', content: excerpt },
          { name: 'keywords', content: frontmatter.tags },
        ]}
      >
      </Helmet>
      <div className="mx-4 lg:mx-16">
        <Navbar />
      </div>
      <div className="mx-4 lg:mx-16 mt-4 lg:grid grid-cols-10 gap-6">

        <div className="col-span-8 flex flex-col-reverse lg:grid grid-cols-8 gap-6">
          {/* Left Sidebar */}
          <div className="col-span-2 mx-2 mt-8 lg:mt-0">
            <h3>Recent Post</h3>
            <div>
              {Posts}
            </div>
          </div>

          {/* Post */}
          <div className="col-span-6 shadow-lg border p-4 rounded-lg">
            <div className="flex flex-col">
              <div>
                {/* Head */}
                <div className="mb-4 px-2 mx-2 pb-6 pt-2 lg:pt-6 border-b border-slate-300 flex gap-4 flex-col lg:flex-row-reverse lg:justify-end">
                  <div className="flex flex-col lg:items-end w-full">
                    <h3 className="lg:text-3xl">{frontmatter.title}</h3>
                    <div>
                      <small className="badge bg-yellow-300 border-yellow-300 italic text-gray-700">{_.startCase(frontmatter.tags)}</small>
                    </div>
                  </div>
                  <div className="divider lg:divider-horizontal my-0 lg:mx-1"></div>
                  <div className="flex flex-col justify-center items-end lg:text-right">
                    <div className="font-edu capitalize">{author}</div>
                    <h5>{frontmatter.date}</h5>
                  </div>
                </div>
                {/* Content */}
                <div className="mx-2" dangerouslySetInnerHTML={{ __html: html }} />
              </div>

              {/* Navigation */}
              <div className="mt-12 mx-2 flex justify-between">
                <div>
                  {previous && (
                    <Link to={`/blog${previous.fields.slug}`}>
                      <div className="flex flex-col items-start link-primary text-neutral">
                        <span>&lArr;</span>
                        <h4>{previous.frontmatter.title}</h4>
                      </div>
                    </Link>
                  )}
                </div>
                <div className="divider divider-horizontal"></div>
                <div>
                  {next && (
                    <Link to={`/blog${next.fields.slug}`}>
                      <div className="flex flex-col items-end link-primary text-neutral">
                        <span>&rArr;</span>
                        <h4 className="text-right">{next.frontmatter.title}</h4>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Sidebar */}
        <div className="col-span-2 mx-2 mt-4 lg:mt-0">
          <div>
            <h3 className="mb-2">Tags</h3>
            <ul>
              {group.map(tag => (
                <li key={tag.fieldValue} className="link-primary text-neutral">
                  <Link to={`/tags/${_.kebabCase(tag.fieldValue)}/`}>
                    {_.startCase(tag.fieldValue)}
                    <span className="badge badge-neutral badge-outline ml-1">{tag.totalCount}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
      <div className="mt-8 py-2">
        <div className="col-span-6 flex justify-center w-full mb-4">© 2022 Samsul Muarrif</div>
      </div>
    </div>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default BlogPost

export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark (fields: { slug: { eq: $slug }}) {
      html
      excerpt(pruneLength: 250)
      frontmatter {
        title
        date(formatString: "dddd, Do MMMM YYYY", locale: "id-ID")
        tags
      }
    }
    recentPosts: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 7) {
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
      }
    }
  }
`