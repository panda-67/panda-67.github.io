// import React from "react"
// import _ from "lodash"
// import { Link } from "gatsby"
// import { useSiteMetadata } from "../hooks/use-site-metadata"


// export default function PostCard({ edge }) {
//    const { meta } = useSiteMetadata()
//    return (
//       <article className="my-5 mx-8 font-sans hover:translate-x-0.5 hover:translate-y-0.5 text-base-content">
//          <div className="flex gap-1">
//             {edge.node.frontmatter.tags.map((tag) => (
//                <span key={tag}>
//                   <Link to={`/tags/${tag}`}>
//                      <small className="my-1 italic text-neutral-focus bg-neutral-content border-none badge">
//                         {_.startCase(tag)}
//                      </small>
//                   </Link>
//                </span>
//             ))}
//          </div>
//          <Link to={`/blog${edge.node.fields.slug}`}>
//             <h3 aria-label="blog-title" className="">
//                {_.truncate(edge.node.frontmatter.title, {
//                   length: 64,
//                   omission: " ...",
//                })}
//             </h3>
//             <div className="flex gap-1 mt-1">
//                <div className="font-edu text-base">
//                   By{" "}
//                   {edge.node.frontmatter.author
//                      ? edge.node.frontmatter.author
//                      : meta.author}
//                </div>
//                <div className="border-l border-slate-700 pl-1 ml-2 text-sm">{edge.node.frontmatter.date}</div>
//             </div>
//          </Link>
//       </article>
//    )
// }