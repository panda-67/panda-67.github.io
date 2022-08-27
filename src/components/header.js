import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle, menuLinks }) => (
  <header className="mx-auto">
    <div className="mb-1">
      <div className="flex max-w-5xl lg:max-w-7xl justify-between items-center mx-8 my-3 lg:hidden">
        <h1 style={{ margin: 0, flex: 1 }}>
          <Link to="/" className="flex" >
            <div className="px-2">
              <StaticImage
                src="../images/icon.svg"
                title="Welcome"
                alt="profile"
                height={25} />
            </div>
            <div className="capitalize link-neutral font-semibold text-xl font-edu text-accent pt-1">
              {siteTitle}
            </div>
          </Link>
        </h1>
        <nav className="dropdown dropdown-left">
          <button tabIndex={"0"}>
            <svg width="16px" height="16px" viewBox="0 0 16 16">
              <rect width="16" height="16" id="icon-bound" fill="none" />
              <path d="M1,9h14V7H1V9z M1,14h14v-2H1V14z M1,2v2h14V2H1z" />
            </svg>
          </button>
          <button id="menu" tabIndex={"0"} style={{ display: "flex", flex: 1 }} className="dropdown-content flex-col w-40 list-none items-start py-2 px-6 shadow bg-base-100 rounded-md">
            {menuLinks.map(link => (
              <li key={link.name}>
                <Link className="flex py-1 capitalize text-gray-600 link-accent text-sm font-sans" activeClassName="flex pb-1 ml-2 border-b border-accent" to={link.link}>                 
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