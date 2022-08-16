import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post, author }) => (
  <div className="my-4 flex flex-col justify-start">
    <h3>
      <Link to={`/blog${post.fields.slug}`}>
        {post.frontmatter.title}
      </Link>
    </h3>
    <div className="flex gap-2">
      <p className="font-edu text-base">By {author}</p>
      <small>{post.frontmatter.date}</small>
    </div>
    <div>
      {post.excerpt}
    </div>
  </div>
)

export default PostLink