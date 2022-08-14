import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 gap-2 justify-between">
        <Link to="/">
          <h3 className="lg:text-2xl font-extrabold">Home</h3>
        </Link>
        <div className="hidden lg:block form-control">
          <input type="text" placeholder="Search" className="input input-sm input-bordered" />
        </div>
      </div>
      <div className="hidden lg:block flex-none">
        <ul className="menu menu-compact menu-horizontal p-0">
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
      <div className="dropdown dropdown-left lg:hidden">
        <button tabindex="0" className="">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </button>
        <button tabindex="0" className="menu menu-compact dropdown-content mt-6 p-2 shadow bg-base-100 rounded-box w-44">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-sm input-bordered" />
          </div>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/about">About</Link></li>
        </button>
      </div>
    </div>
  )
}