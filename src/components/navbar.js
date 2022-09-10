import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Search from "./search"

const Navbar = ({ menuLinks, searchData }) => (
  <header>
    <div className="flex justify-between">
      {/* main navigate */}
      <div className="navbar">
        {/* logo */}
        <div className="mr-2 w-8 flex justify-center">
          <Link to="/" activeClassName="rounded-md border border-zinc-500 p-1">
            <StaticImage
              src="../images/icon.svg"
              title="Welcome"
              alt="profile"
              height={28} />
          </Link>
        </div>
        {/* menu link */}
        <div className="flex gap-2 justify-between w-full">
          <ul className="menu menu-compact menu-horizontal gap-1 p-0">
            {menuLinks.map(link =>
              <li key={link.name} className="hidden md:block capitalize">
                <Link
                  activeClassName="bg-zinc-400 text-white"
                  partiallyActive={true}
                  to={link.link}>{link.name}
                </Link>
              </li>
            )}
            {/* Services */}
            <li className="dropdown dropdown-hover hidden md:block capitalize">
              <button tabIndex={0} className="">Services</button>
              <button tabIndex={0} className="dropdown-content p-2 shadow bg-base-100 rounded-box w-max">
                <ul className='space-y-2'>
                  <li>
                    <Link>Mapping</Link>
                  </li>
                  <li>
                    <Link>Web Programming</Link>
                  </li>
                  <li>
                    <Link>Statistics</Link>
                  </li>
                </ul>
              </button>
            </li>
            {/* Contact */}
            <li className="dropdown dropdown-hover hidden md:block capitalize">
              <button tabIndex={0} className="">Contact</button>
              <button tabIndex={0} className="dropdown-content p-2 shadow bg-base-100 rounded-box w-max">
                <ul>
                  <li>
                    <Link to='mailto:samuarrif@gmail.com' target="_blank" className='flex gap-2'>
                      Gmail
                    </Link>
                  </li>
                  <li>
                    <Link to='https://wa.me/6285159606776?text=Hello+Samsul+Muarrif' target="_blank" className='flex gap-2'>
                      Whatsapp
                    </Link>
                  </li>
                </ul>
              </button>
            </li>
          </ul>
          <div className="md:hidden w-full font-edu text-lg">Samsul Muarrif</div>
          <div className="flex">
            <div className="dropdown md:hidden capitalize flex items-center">
              <button tabIndex={0} className="">
                <svg className="w-5 text-zinc-300 mx-2" viewBox="0 0 24 24" >
                  <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                    <g transform="translate(-251.000000, -207.000000)">
                      <g transform="translate(251.000000, 207.000000)"><rect fill="current" fill-opacity="0.01" fill-rule="nonzero" height="24" width="24" x="0" y="0" />
                        <path d="M18,16 C20.20915,16 22,14.20915 22,12 C22,9.79085 20.20915,8 18,8" />
                        <path d="M18,16 L18,16 C20.20915,16 22,14.20915 22,12 C22,9.79085 20.20915,8 18,8" stroke="#212121" stroLinejoin="round" strokeWidth="1.5" />
                        <path d="M6,8 C3.79086,8 2,9.79085 2,12 C2,14.20915 3.79086,16 6,16" />
                        <path d="M6,8 C3.79086,8 2,9.79085 2,12 C2,14.20915 3.79086,16 6,16 L6,16" stroke="#212121" stroLinejoin="round" strokeWidth="1.5" />
                        <path d="M6,16 L6,15.75 L6,14.5 L6,12 L6,8 C6,4.68629 8.6863,2 12,2 C15.3137,2 18,4.68629 18,8 L18,16 C18,19.3137 15.3137,22 12,22" stroke="#212121" stroLinecap="round" stroLinejoin="round" strokeWidth="1.5" />
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
              <button tabIndex={0}>
                <ul className="dropdown-content mt-[36px] transform -translate-x-16 p-2 space-y-2 shadow bg-base-100 bg-opacity-80 rounded-box w-max">
                  <li className="px-2">
                    <Link to='mailto:samuarrif@gmail.com' target="_blank" className='flex gap-2'>
                      Gmail
                    </Link>
                  </li>
                  <li className="px-2">
                    <Link to='https://wa.me/6285159606776?text=Hello+Samsul+Muarrif' target="_blank" className='flex gap-2'>
                      Whatsapp
                    </Link>
                  </li>
                </ul>
              </button>
            </div>
            <Search searchIndex={searchData} />
          </div>
        </div>
      </div>

      {/* dropdown navigate */}
      <div className="dropdown flex items-center dropdown-left md:hidden">
        <button tabIndex={0} className="">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </button>
        <button tabIndex={0} className="gap-1 dropdown-content mt-6 p-2 shadow bg-base-100 rounded-box w-max">
          <Link
            className="btn btn-sm btn-ghost flex justify-start font-normal capitalize w-full"
            activeClassName="bg-zinc-400 text-white"
            to="/">Welcome
          </Link>
          {menuLinks.map(link =>
            <Link
              className="btn btn-sm btn-ghost flex justify-start font-normal capitalize w-full"
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