import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle, menuLinks }) => (
  <header className="mx-auto">
    <div className="mb-1">
      <div className="flex max-w-5xl lg:max-w-7xl justify-between items-center mx-8 my-3 lg:hidden">
        <h1 style={{ margin: 0, flex: 1 }}>
          <Link to="/" className="capitalize font-semibold text-md font-edu text-accent link-neutral">
            {siteTitle}
          </Link>
        </h1>
        <nav className="dropdown dropdown-left">
          <button tabIndex={"0"}>
            <svg width="16px" height="16px" viewBox="0 0 16 16">
              <rect width="16" height="16" id="icon-bound" fill="none" />
              <path d="M1,9h14V7H1V9z M1,14h14v-2H1V14z M1,2v2h14V2H1z" />
            </svg>
          </button>
          <button id="menu" tabIndex={"0"} style={{ display: "flex", flex: 1 }} className="dropdown-content flex-col w-28 list-none items-start py-1 px-3 shadow bg-base-100 rounded-md">
            {menuLinks.map(link => (
              <li key={link.name}>
                <Link className="flex capitalize text-gray-600 link-accent text-sm font-sans" activeClassName="flex pb-1 ml-2 border-b border-accent" to={link.link}>
                  <svg className="w-2 mr-1" x="0px" y="0px" viewBox="0 0 49.656 49.656">
                    <g>
                      <polygon points="14.535,48.242 11.707,45.414 32.292,24.828 11.707,4.242 14.535,1.414 37.949,24.828" />
                      <path d="M14.535,49.656l-4.242-4.242l20.585-20.586L10.293,4.242L14.535,0l24.829,24.828L14.535,49.656z    M13.121,45.414l1.414,1.414l22-22l-22-22l-1.414,1.414l20.585,20.586L13.121,45.414z" />
                    </g>
                  </svg>
                  {link.name}
                </Link>
              </li>
            ))}
          </button>
        </nav>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header