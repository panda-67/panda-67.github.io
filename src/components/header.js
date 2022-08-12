import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle, menuLinks }) => (
  <header className="mx-auto">
    <div className="mb-1">
      <div className="flex max-w-5xl lg:max-w-7xl justify-between items-center mx-8 lg:hidden">
        <h1 style={{ margin: 0, flex: 1 }}>
          <Link to="/" className="capitalize font-semibold text-md font-edu text-accent link-neutral">
            {siteTitle}
          </Link>
        </h1>
        <div>
          <nav>
            <ul style={{ display: "flex", flex: 1 }}>
              {menuLinks.map(link => (
                <li key={link.name} className="py-4 px-2">
                  <Link className="capitalize text-gray-500 link-hover text-sm font-serif" to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
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