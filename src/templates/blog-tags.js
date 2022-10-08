import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import _ from "lodash"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import TagsLink from "../components/tags-link"

const BlogTags = (
  {
    data: {
      tagsPosts: { group },
      allMarkdownRemark,
      site,
      siteSearchIndex
    },
    pageContext,
  }) => {
  const { tag } = pageContext
  const { edges, totalCount } = allMarkdownRemark
  const Tags = group
    .map(tag => <TagsLink key={tag.fieldValue} tag={tag} />)
  // const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${tag}"`

  return (
    <div>
      <div className="mx-4 lg:mx-16">
        <Navbar menuLinks={site.meta.menuLinks} searchData={siteSearchIndex.index} />
        <h4 className="flex justify-center gap-2 text-lg lg:text-2xl mb-6">
          <div className="italic font-semibold">{`${totalCount} Post${totalCount === 1 ? "" : "s"}`}</div>
          <div>{`tagged with "${_.capitalize(tag)}"`}</div>
        </h4>
        <div className="grid md:grid-cols-2 gap-2">
          {edges.map(({ node }) => {
            const { slug } = node.fields
            const { excerpt } = node
            const { title, date } = node.frontmatter
            return (
              <div key={slug} className="p-4 rounded-lg border border-gray-300 shadow-lg">
                <Link to={`/blog${slug}`}>
                  <h3 className="mb-2 leading-5 text-neutral link-primary">{title}</h3>
                </Link>
                <h5>{date}</h5>
                <p>{excerpt}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className="lg:mx-10 my-8 px-6 lg:flex gap-4">
        <Link to="/blog">
          <div className="w-full font-semibold rounded-lg bg-gray-200 hover:bg-gray-600 hover:text-gray-100 shadow-lg p-4">
            All Posts
          </div>
        </Link>
        <div className="lg:flex items-center gap-4 rounded-lg bg-gray-200 shadow-lg p-4 mt-2 lg:mt-0">
          <h4><strong>All Tags</strong></h4>
          <div className="lg:flex gap-2">
            {Tags}
          </div>
        </div>
      </div>
      <div>
        <Footer socials={site.meta.socials} siteTitle={site.meta.title} />
      </div>
    </div>
  )
}

BlogTags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default BlogTags

export const tagQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            title
            date(formatString: "dddd, Do MMMM YYYY", locale: "id-ID")
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
      meta: siteMetadata {       
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