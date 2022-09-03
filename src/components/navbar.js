import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Search from "./search"

const Navbar = ({ menuLinks, searchData }) => (

  <header>
    <div className="flex justify-between">
      <div className="navbar">
        <div className="mr-2 w-8 flex justify-center">
          <Link to="/" activeClassName="rounded-md border border-zinc-500 p-1">
            <StaticImage
              src="../images/icon.svg"
              title="Welcome"
              alt="profile"
              height={28} />
          </Link>
        </div>
        <div className="flex gap-2 justify-between w-full">
          <ul className="menu menu-compact menu-horizontal gap-1 p-0">
            {menuLinks.map(link =>
              <li key={link.name} className="hidden lg:block capitalize">
                <Link
                  activeClassName="bg-zinc-400 text-white"
                  partiallyActive={true}
                  to={link.link}>{link.name}
                </Link>
              </li>
            )}
            <Search searchIndex={searchData} />
          </ul>
        </div>
      </div>
      <div className="dropdown dropdown-left lg:hidden">
        <button tabIndex={"0"} className="mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </button>
        <button tabIndex={"0"} className="menu menu-compact gap-1 dropdown-content mt-6 p-2 shadow bg-base-100 rounded-box w-36">
          <Link
            className="btn btn-sm btn-ghost flex justify-start font-normal capitalize w-full"
            activeClassName="bg-zinc-400 text-white"
            to="/">Welcome
          </Link>
          {menuLinks.map(link =>
            <Link
              className="capitalize w-full"
              activeClassName="bg-zinc-400 text-white"
              partiallyActive={true}
              key={link.name}
              to={link.link}>{link.name}
            </Link>
          )}
        </button>
      </div>
    </div>
  </header >
)

export default Navbar