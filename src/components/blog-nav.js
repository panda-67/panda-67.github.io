import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function Navbar() {
  return (
    <div className="flex justify-between bg-base-100">
      <div className="navbar bg-base-100">
        <div className="">
          <Link to="/" className="">
            <StaticImage
              src="../images/icon.svg"
              title="Welcome"
              alt="profile"
              height={40} />
          </Link>
        </div>
        <div className="hidden lg:flex gap-2 justify-between w-full pt-2">
          <ul className="menu menu-compact menu-horizontal gap-1 p-0">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
          </ul>
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-sm input-bordered" />
          </div>
        </div>
      </div>
      <div className="dropdown dropdown-left lg:hidden">
        <button tabIndex={"0"} className="mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </button>
        <button tabIndex={"0"} className="menu menu-compact dropdown-content mt-6 p-2 shadow bg-base-100 rounded-box w-44">
          <div className="form-control w-auto">
            <input type="text" placeholder="Search" className="input input-sm input-bordered" />
          </div>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
        </button>
      </div>
    </div>
  )
}