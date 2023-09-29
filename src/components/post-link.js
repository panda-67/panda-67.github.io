import React from "react"
import { Link } from "gatsby"
import _ from "lodash"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export default function PostLink({ post }) {
  const { meta } = useSiteMetadata()
  return (
    <article className="mb-4 flex flex-col justify-start border p-4 rounded-md">
      <h3 className="lg:text-2xl text-zinc-700 link-primary">
        <Link to={`/blog${post.fields.slug}`}>
          {post.frontmatter.title}
        </Link>
      </h3>
      <div aril-label="tags" className="flex gap-1">
        {post.frontmatter.tags.map(tag => (
          <div key={tag}>
            <Link to={`/tags/${tag}`}>
              <small className="my-1 italic bg-neutral-content text-neutral-focus border-current badge">{_.startCase(tag)}</small>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-1">
        <div aria-label="author" className="font-edu text-base">By {post.frontmatter.author ? post.frontmatter.author : meta.author}</div>
        <div aria-label="date" className="text-sm ml-2 pl-1 border-l border-current">{post.frontmatter.date}</div>
      </div>
      <div aria-label="excerpt">
        {post.excerpt + ` `}
        <Link to={`/blog${post.fields.slug}`} className="hover:text-primary">
          &rArr;{` more`}
        </Link>
      </div>
    </article>
  )
}