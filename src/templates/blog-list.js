import * as React from "react"
import { Link, graphql } from "gatsby"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import Frame from '../layouts/main'
import PostLink from "../components/post-link"
import TagsLink from "../components/tags-link"

export default function IndexBlog({
  data: {
    allMarkdownRemark: { edges },
    tagsPosts: { group },
    site: { meta },
  },
  pageContext: {
    breadcrumb: { crumbs },
    previousPagePath,
    nextPagePath,
    humanPageNumber,
    numberOfPages,
  },
  path,
}) {
  const previousPage = previousPagePath
  const nextPage = nextPagePath
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge) => (
      <PostLink key={edge.node.id} post={edge.node} author={meta.author} />
    ))
  const Tags = group.map((tag) => <TagsLink key={tag.fieldValue} tag={tag} />)
  return (
    <Frame path={path}>
      <section className="bg-slate-200 pb-2 z-10 pt-1 sticky top-16">
        <div className="lg:mx-12 mx-4">
          <Breadcrumb
            className="text-base font-light pl-[9px] border-l border-zinc-400"
            crumbs={crumbs}
            crumbSeparator=""
          />
        </div>
      </section>

      <div className="flex flex-col-reverse lg:grid grid-cols-10 mx-6 lg:mx-10 lg:px-6 mt-4">
        <section className="col-span-2 gap-y-8 flex flex-col-reverse lg:flex-col">
          <tags className="mx-4 lg:mx-0">
            <h3>Tags</h3>
            <div className="flex flex-wrap gap-x-2">{Tags}</div>
          </tags>
          <nav className="space-x-2 lg:sticky top-[116px] rounded-lg shadow-lg px-2 py-4 lg:-ml-4 flex justify-around border items-center">
            {previousPage ? (
              <Link
                className="hover:bg-zinc-300 rounded-lg px-2 py-1 hover:text-white"
                to={previousPage}
              >
                {" "}❮{" "}
              </Link>
            ) : (
              <div className="text-zinc-400 px-2"> ❮ </div>
            )}
            <span className="text-zinc-500 text-sm">
              {humanPageNumber} of {numberOfPages} Page(s)
            </span>
            {nextPage ? (
              <Link
                className="hover:bg-zinc-300 rounded-lg px-2 py-1 hover:text-white"
                to={nextPage}
              >
                {" "}❯{" "}
              </Link>
            ) : (
              <div className="text-zinc-400 px-2"> ❯ </div>
            )}
          </nav>
        </section>
        <div className="col-span-1 divider divider-vertical lg:divider-horizontal mx-0 px-2 lg:px-0 lg:pb-4"></div>
        <section className="col-span-7 lg:-ml-16">{Posts}</section>
      </div>
    </Frame>
  )
}

export const Head = ({
  data: {
    site: { meta },
  },
}) => (
  <>
    <title>{`Blogs | ${meta.title}`}</title>
    <meta name="description" content={`${meta.desc} by ${meta.author}`} />
    <meta
      name="keywords"
      content="blog, travel, hobby, daliy, activity, coding, photography"
    />
  </>
)

export const blogQuery = graphql`query BlogList($skip: Int!, $limit: Int!) {
  allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: $limit, skip: $skip) {
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
    group(field: {frontmatter: {tags: SELECT}}) {
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
}`
