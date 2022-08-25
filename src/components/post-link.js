import React from "react"
import { Link } from "gatsby"
import _ from "lodash"

const PostLink = ({ post, author }) => (
  <div className="my-4 flex flex-col justify-start">
    <h3 className="lg:text-2xl">
      <Link to={`/blog${post.fields.slug}`}>
        {post.frontmatter.title}
      </Link>
    </h3>
    <small className="italic bg-yellow-300 px-2 pb-1 w-max">{_.startCase(post.frontmatter.tags)}</small>
    <div className="flex gap-2 mt-1">
      <p className="font-edu text-base">By {author}</p>
      <p className="divider divider-horizontal py-1 mx-0"></p>
      <small>{post.frontmatter.date}</small>
    </div>
    <div>
      {post.excerpt}
    </div>
  </div>
)

export default PostLink