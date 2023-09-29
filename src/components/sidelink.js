import React from "react"
import { Link } from "gatsby"

const active = (
  'inline-flex items-center px-1 pt-1 pb-2 border-b-2 text-2xl leading-5 text-current focus:outline-none focus:border-indigo-700 transition  duration-150 ease-in-out'
)
const inactive = (
  "inline-flex items-center px-1 pt-1 border-b-2 border-transparent leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:text-2xl focus:outline-none focus:text-gray-700 focus:border-gray-300 transition-all duration-70 ease-in-out delay-80"
)
const SideLink = ({ href, children }) => (
  <Link
    to={href}
    className={inactive}
    activeClassName={active}
    activeStyle={{ borderColor: "orange" }}
  >
    {children}
  </Link>
)

export default SideLink