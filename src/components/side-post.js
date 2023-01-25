import React from "react"
import { Link } from "gatsby"

const SidePost = ({ post }) => (
  <div className="my-4 flex flex-col justify-start text-gray-400">
    <h5 className="link-primary text-gray-500 font-semibold">
      <Link to={`/blog${post.fields.slug}`}>
        {post.frontmatter.title}
      </Link>
    </h5>
    <div aria-label="date" className="text-sm">{post.frontmatter.date}</div>
    {/* <p>{post.excerpt}</p>  */}
  </div>
)

export default SidePost