import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle, menuLinks }) => (
  <header className="mx-auto">
    <div className="mb-1">
      <div className="flex max-w-7xl justify-between items-center mx-6 md:mx-auto md:hidden">
        <h1 style={{ margin: 0, flex: 1 }}>
          <Link to="/" className="uppercase font-bold text-xl font-teko text-purple-600 link-primary">
            {siteTitle}
          </Link>
        </h1>
        <div>
          <nav>
            <ul style={{ display: "flex", flex: 1 }}>
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                  }}
                >
                  <Link className="capitalize text-purple-600 font-teko" to={link.link}>
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