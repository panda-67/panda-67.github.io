import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div className="mx-4 my-4 flex flex-col justify-start">
    <h3>
      <Link to={`/blog${post.fields.slug}`}>
        {post.frontmatter.title}
      </Link>
    </h3>
    <small>{post.frontmatter.date}</small>
    <div>
      {post.excerpt}
    </div>
  </div>
)

export default PostLink