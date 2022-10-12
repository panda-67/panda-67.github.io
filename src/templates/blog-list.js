import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Navbar from "../components/navbar"
import PostLink from "../components/post-link"
import TagsLink from "../components/tags-link"
import Footer from "../components/footer"

const IndexBlog = (
  {
    data: {
      siteSearchIndex,
      allMarkdownRemark: { edges },
      tagsPosts: { group },
      site: { meta }
    },
    pageContext,
    path
  }) => {
  const hero = path === '/blog'
  const previousPage = pageContext.previousPagePath
  const nextPage = pageContext.nextPagePath
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
        <Navbar menuLinks={meta.menuLinks} searchData={siteSearchIndex.index} />
      </div>
      {hero && (
        <div className="lg:h-screen h-[18rem] sm:h-[24rem] mb-8">
          <div style={bgImage} className="bg-cover w-full h-full bg-left relative">
            <div className="w-full h-full bg-gray-800 bg-opacity-40 flex justify-end items-center px-12 lg:px-28">
              <h1 className="lg:text-7xl sm:text-5xl text-white font-edu transform translate-y-16">Welcome to Blog Post</h1>
            </div>
          </div>
        </div>
      )}

      {!hero && (<div className="h-24"></div>)}

      <div className="flex flex-col-reverse lg:grid grid-cols-10 mx-6 lg:mx-10 lg:px-6 mt-2">
        <div className="col-span-2 space-y-4">
          <div className="mb-12">
            <h3>Tags</h3>
            <div className="flex flex-wrap gap-x-2">
              {Tags}
            </div>
          </div>
          <div className="space-x-2 sticky top-4 rounded-lg shadow-lg px-2 py-4 -ml-4 flex justify-center border items-center">
            {previousPage && (
              <Link className="hover:bg-slate-500 rounded-lg px-2 py-1 hover:text-white" to={previousPage}> ❮ </Link>
            )}
            <span className="text-gray-500 text-sm">Page {pageContext.humanPageNumber} of {pageContext.numberOfPages} Page(s)</span>
            {nextPage && (
              <Link className="hover:bg-slate-500 rounded-lg px-2 py-1 hover:text-white" to={nextPage}> ❯ </Link>
            )}
          </div>
        </div>
        <div className="col-span-1 divider divider-vertical lg:divider-horizontal mx-0 px-2 lg:px-0 lg:py-4"></div>
        <div className="col-span-7 lg:-ml-8">
          {Posts}
        </div>
      </div>
      <Footer socials={meta.socials} siteTitle={meta.title} />
    </div>
  )
}

export default IndexBlog

export const blogQuery = graphql`
  query BlogList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: $limit
      skip: $skip
    ) {
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
        menuLinks {
          name
          link
        }
        socials {
          name
          url
        }
      }
    }   
    siteSearchIndex {
      index
    }
  }
`