import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Navbar from "../components/navbar"
import PostLink from "../components/post-link"
import TagsLink from "../components/tags-link"

const IndexBlog = (
  { data: {
    allMarkdownRemark: { edges },
    tagsPosts: { group },
    site: { meta }
  },
  }) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} author={meta.author} />)
  const Tags = group
    .map(tag => <TagsLink key={tag.fieldValue} tag={tag} />)
  const bgImage = {
    backgroundImage:
      "url('https://cdn.pixabay.com/photo/2019/01/17/23/14/work-3938875_960_720.jpg')",
  }

  return (
    <div>
      <Helmet
        title={`Blogs | ${meta.title}`}
        meta={[
          { name: 'description', content: `${meta.desc} by ${meta.author}` },
          { name: 'keywords', content: 'blog, travel, hobby, daliy, activity, coding, photography' },
        ]}
      >
      </Helmet>
      <div className="px-4 lg:px-16 absolute z-10 bg-gray-100 bg-opacity-70 w-full">
        <Navbar />
      </div>
      <div className="lg:h-screen h-[18rem] sm:h-[24rem] pb-2">
        <div style={bgImage} className="bg-cover w-full h-full bg-left relative">
          <div className="w-full h-full bg-gray-800 bg-opacity-40 flex justify-end items-center px-12 lg:px-28">
            <h1 className="lg:text-7xl sm:text-5xl text-white font-edu transform translate-y-16">Welcome to Blog Post</h1>
          </div>
        </div>
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
      meta: siteMetadata {
        title
        author
        desc
      }
    }
  }
`