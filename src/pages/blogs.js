import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Navbar from "../components/blog-nav"
import PostLink from "../components/post-link"
import TagsLink from "../components/tags-link"

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
  const Tags = group
    .map(tag => <TagsLink key={tag.fieldValue} tag={tag} />)

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
      <div className="mx-4 lg:mx-16">
        <Navbar />
      </div>
      <div className="flex flex-col-reverse lg:grid grid-cols-10 mx-6 lg:mx-14 lg:px-6 mt-2">
        <div className="col-span-1">
          <div>
            <h3>Tags</h3>
            {Tags}
          </div>
        </div>
        <div className="divider divider-vertical lg:divider-horizontal"></div>
        <div className="col-span-8 lg:-ml-8">
          {Posts}
        </div>
      </div>
      <div className="mt-8 py-2">
        <div className="col-span-6 flex justify-center w-full mb-4">© 2022 Samsul Muarrif</div>
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
          excerpt(pruneLength: 200)
          frontmatter {
            date(formatString: "dddd, Do MMMM YYYY", locale: "id-ID")            
            title
            tags
            author
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