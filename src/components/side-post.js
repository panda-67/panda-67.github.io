import React from "react"
import { Link } from "gatsby"

const SidePost = ({ post }) => (
  <div className="my-4 flex flex-col justify-start">
    <h4 className=" link-primary text-neutral">
      <Link to={`/blog${post.fields.slug}`}>
        {post.frontmatter.title}
      </Link>
    </h4>
    <small>{post.frontmatter.date}</small>    
  </div>
)

export default SidePost