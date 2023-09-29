import * as React from "react"
import _ from "lodash";
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import { useSiteMetadata } from "../hooks/use-site-metadata";
import TagsLink from "../components/tags-link"
import Frame from '../layouts/main'

export default function BlogTags({ data: { tagsPosts: { group }, allMarkdownRemark }, pageContext }) {

  const { edges, totalCount } = allMarkdownRemark
  const Tags = group.map((tag) => <TagsLink key={tag.fieldValue} tag={tag} />)

  return (
    <Frame>
      <div className="mx-4 lg:mx-16 lg:grid gap-4 grid-flow-col grid-cols-10">
        <div className="col-span-8">
          <h4 className="flex justify-center gap-2 text-lg lg:text-2xl mb-6">
            <div className="italic font-semibold">
              {`${totalCount} Post${totalCount === 1 ? "" : "s"}`}
            </div>
            <div>{`tagged with "${_.capitalize(pageContext.tag)}"`}</div>
          </h4>
          <div className="grid md:grid-cols-2 gap-2">
            {edges.map(({ node }) => {
              return (
                <div key={node.fields.slug} className="p-4 rounded-lg border border-gray-300 shadow-lg"                >
                  <Link to={`/blog${node.fields.slug}`}>
                    <h4 className="mb-2 leading-5 text-neutral font-semibold link-primary">
                      {node.frontmatter.title}
                    </h4>
                  </Link>
                  <h5>{node.frontmatter.date}</h5>
                  <p className="text-gray-500">{node.excerpt}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className="col-span-2 mt-8 lg:mt-14">
          <div className="sticky top-2 space-y-4">
            <Link to="/blog">
              <div className="w-full font-semibold rounded-lg bg-inherit hover:bg-neutral-content hover:text-neutral-focus shadow-md shadow-current p-4">
                All Posts
              </div>
            </Link>
            <div className="rounded-lg bg-inherit shadow-md shadow-current p-4 mt-2 lg:mt-0 space-y-2">
              <h4>
                <strong>All Tags</strong>
              </h4>
              <div className="flex flex-wrap gap-2">{Tags}</div>
            </div>
          </div>
        </div>
      </div>
    </Frame>
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

export function Head({ pageContext }) {
  const { meta } = useSiteMetadata()
  return (
    <>
      <title>{`${_.capitalize(pageContext.tag)} | Blog Tags | ${meta.title}`}</title>
      <meta name="description" content={`${meta.desc} tags by ${meta.author}`} />
      <meta name="keywords" content="blog, travel, hobby, daliy, activity, coding, photography" />
    </>
  )
}

export const tagQuery = graphql`query ($tag: String) {
  allMarkdownRemark(
    limit: 2000
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {tags: {in: [$tag]}}}
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
    group(field: {frontmatter: {tags: SELECT}}) {
      fieldValue
      totalCount
    }
  }
}`
