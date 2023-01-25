import React from "react"
import { Link } from "gatsby"
import _ from "lodash"

const TagsLink = ({ tag }) => (
  <div aria-label="tags" key={tag.fieldValue}>
    <Link to={`/tags/${_.kebabCase(tag.fieldValue)}/`} className="hover:text-sky-500 text-current">
      {_.startCase(tag.fieldValue)}
      <span className="badge text-neutral-focus bg-neutral-content border-neutral-focus transform -translate-y-1 text-xs ml-1">{tag.totalCount}</span>
    </Link>
  </div>
)

export default TagsLink