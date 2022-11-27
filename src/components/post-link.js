import React from "react"
import { Link } from "gatsby"
import _ from "lodash"

const PostLink = ({ post, author }) => (
  <article className="mb-4 flex flex-col justify-start border p-4 rounded-md">
    <h3 className="lg:text-2xl text-zinc-700 link-primary">
      <Link to={`/blog${post.fields.slug}`}>
        {post.frontmatter.title}
      </Link>
    </h3>
    <tags className="flex gap-1">
      {post.frontmatter.tags.map(tag => (
        <tag key={tag}>
          <Link to={`/tags/${tag}`}>
            <small className="my-1 italic bg-yellow-300 border-amber-300 text-gray-800 badge">{_.startCase(tag)}</small>
          </Link>
        </tag>
      ))}
    </tags>
    <div className="flex gap-2 mt-1">
      <author className="font-edu text-base">By {post.frontmatter.author ? post.frontmatter.author : author}</author>
      <p className="divider divider-horizontal py-1 mx-0"></p>
      <date>{post.frontmatter.date}</date>
    </div>
    <excerpt>
      {post.excerpt + ` `}
      <Link to={`/blog${post.fields.slug}`} className="hover:text-primary">
        &rArr;{` more`}
      </Link>
    </excerpt>
  </article>
)

export default PostLink