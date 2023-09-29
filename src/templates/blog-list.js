import * as React from "react"
import { Link, graphql } from "gatsby"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import Frame from '../layouts/main'
import PostLink from "../components/post-link"
import TagsLink from "../components/tags-link"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export default function IndexBlog({
  data: { allMarkdownRemark: { edges }, tagsPosts: { group } },
  pageContext: { breadcrumb: { crumbs }, previousPagePath, nextPagePath, humanPageNumber, numberOfPages, },
  path
}) {
  
  const previousPage = previousPagePath
  const nextPage = nextPagePath
  const Tags = group.map((tag) => <TagsLink key={tag.fieldValue} tag={tag} />)
  const Posts = edges.filter(
    (edge) => !!edge.node.frontmatter.date).map((edge) => (
      <PostLink key={edge.node.id} post={edge.node} />
    ))

  return (
    <Frame path={path}>
      <section className="bg-neutral-content pb-2 z-10 pt-1 sticky top-0 md:top-16">
        <div className="lg:mx-12 mx-4">
          <Breadcrumb
            className="text-base text-neutral-focus font-light pl-[9px] border-l border-current"
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

export function Head() {
  const { meta } = useSiteMetadata()
  return (
    <>
      <title>{`Blogs | ${meta.title}`}</title>
      <meta name="keywords" content="blog, travel, hobby, daliy, activity, coding, photography" />
      <meta name="description" content={`${meta.desc} by ${meta.author}`} />
    </>
  )
}

export const blogQuery = graphql`
query BlogList($skip: Int!, $limit: Int!) {
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
}`
