import React from "react"
import { Link } from "gatsby"
import _ from "lodash"

const TagsLink = ({ tag }) => (
  <div key={tag.fieldValue} className="link-primary text-neutral">
    <Link to={`/tags/${_.kebabCase(tag.fieldValue)}/`} >
      {_.startCase(tag.fieldValue)}
      <span className="badge bg-amber-300 border-amber-300 text-gray-800 transform -translate-y-1 text-xs ml-1">{tag.totalCount}</span>
    </Link>
  </div>
)

export default TagsLink