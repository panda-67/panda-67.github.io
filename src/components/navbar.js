import React, { useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { themeChange } from 'theme-change'
import { Theme, Nav, useScroll, useMenuLink} from "../hooks/use-navbar"
import { useSearch } from "../hooks/use-search"
import Search from "./search"

export default function Navbar({ path }) {

	useEffect(() => { themeChange(false) }, [])
	const { themeOpen, themeToggle } = Theme()
	const { navOpen, navToggle } = Nav()
	const { menuLinks } = useMenuLink()
	const { index } = useSearch()
	const scrolled = useScroll()

	return (
		<div className="px-4 lg:px-16 bg-base-100 bg-opacity-50 w-full sticky">
			<div className="flex justify-between">
				{/* main navigate */}
				<nav className="navbar">
					{/* logo */}
					<div className="mr-2 w-8 flex justify-center">
						<Link
							to="/"
							activeClassName="rounded-md border border-zinc-500 p-1"
						>
							<StaticImage
								src="../images/icon.svg"
								title="Welcome"
								alt="profile"
								height={28}
							/>
						</Link>
					</div>
					{/* menu link */}
					<div className="flex gap-2 justify-between w-full">
						<ul className="menu menu-compact menu-horizontal gap-1">

							{menuLinks.map((link) => (
								<li key={link.name} className="hidden md:inline-flex capitalize">
									<Link
										className="rounded-lg"
										activeClassName="bg-zinc-400 text-white"
										partiallyActive={true}
										to={link.link}
									>
										{link.name}
									</Link>
								</li>
							))}

							{/* Contact */}
							{/* <li className="dropdown dropdown-open hidden lg:block capitalize">
								<button className="rounded-lg">Contact</button>
								<ul className="dropdown-content p-2 space-y-1 shadow bg-base-100 rounded-box w-max">
									<li>
										<Link
											to="mailto:samuarrif@gmail.com"
											target="_blank"
											className="rounded-lg"
										>
											Gmail
										</Link>
									</li>
									<li>
										<Link
											to="https://wa.me/6285159606776?text=Hello+Samsul+Muarrif"
											target="_blank"
											className="rounded-lg"
										>
											Whatsapp
										</Link>
									</li>
								</ul>
							</li> */}

						</ul>

						<div className="flex items-center">

							{/* The button theme modal */}
							<button onClick={themeToggle} className="btn btn-sm btn-ghost font-[400] capitalize">
								<svg width="20" height="20" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
								<span className="hidden ml-1 md:inline-flex">Theme</span>
							</button>

							{/* Support */}
							<Link to="https://sociabuzz.com/panda67/tribe">
								<button className="btn btn-sm btn-ghost">
									<svg className="w-5" viewBox="0 0 24 24" fill="none">
										<path
											clipRule="evenodd"
											d="M6.47358 1.96511C8.27963 1.93827 10.2651 2.62414 12 4.04838C13.7349 2.62414 15.7204 1.93827 17.5264 1.96511C19.5142 1.99465 21.3334 2.90112 22.2141 4.68531C23.0878 6.45529 22.9326 8.87625 21.4643 11.7362C19.9939 14.6003 17.1643 18.0021 12.4867 21.8566C12.4382 21.898 12.3855 21.9324 12.3298 21.9596C12.1243 22.0601 11.8798 22.0624 11.6702 21.9596C11.6145 21.9324 11.5618 21.898 11.5133 21.8566C6.83565 18.0021 4.00609 14.6003 2.53569 11.7362C1.06742 8.87625 0.912211 6.45529 1.78589 4.68531C2.66659 2.90112 4.4858 1.99465 6.47358 1.96511Z"
											fill="red"
											fillRule="evenodd"
										/>
									</svg>
								</button>
							</Link>

							{/* Contact */}
							<div className="dropdown lg:hidden capitalize flex items-center">
								<button tabIndex={0} className="btn btn-sm btn-ghost">
									<svg
										className="w-5 stroke-current"
										viewBox="0 0 24 24"
									>
										<g
											fill="none"
											fillRule="evenodd"
											stroke="none"
											strokeWidth="1"
										>
											<g transform="translate(-251.000000, -207.000000)">
												<g transform="translate(251.000000, 207.000000)">
													<rect
														fill="currentColor"
														fillOpacity="0.01"
														fillRule="nonzero"
														height="24"
														width="24"
														x="0"
														y="0"
													/>
													<path d="M18,16 C20.20915,16 22,14.20915 22,12 C22,9.79085 20.20915,8 18,8" />
													<path
														d="M18,16 L18,16 C20.20915,16 22,14.20915 22,12 C22,9.79085 20.20915,8 18,8"
														stroke="currentColor"
														strokeLinejoin="round"
														strokeWidth="1.5"
													/>
													<path d="M6,8 C3.79086,8 2,9.79085 2,12 C2,14.20915 3.79086,16 6,16" />
													<path
														d="M6,8 C3.79086,8 2,9.79085 2,12 C2,14.20915 3.79086,16 6,16 L6,16"
														stroke="currentColor"
														strokeLinejoin="round"
														strokeWidth="1.5"
													/>
													<path
														d="M6,16 L6,15.75 L6,14.5 L6,12 L6,8 C6,4.68629 8.6863,2 12,2 C15.3137,2 18,4.68629 18,8 L18,16 C18,19.3137 15.3137,22 12,22"
														stroke="currentColor"
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="1.5"
													/>
												</g>
											</g>
										</g>
									</svg>
								</button>
								<button tabIndex={0}>
									<ul className="dropdown-content -mt-28 md:mt-10 transform -translate-x-24 p-2 space-y-2 shadow bg-base-100 bg-opacity-80 rounded-box w-max">
										<li className="px-2">
											<Link
												to="mailto:samuarrif@gmail.com"
												target="_blank"
												className="flex gap-2"
											>
												Gmail
											</Link>
										</li>
										<li className="px-2">
											<Link
												to="https://wa.me/6285159606776?text=Hello+Samsul+Muarrif"
												target="_blank"
												className="flex gap-2"
											>
												Whatsapp
											</Link>
										</li>
									</ul>
								</button>
							</div>

							{/* Search Bar */}
							{path === `/` ? null : <Search searchIndex={index} />}

						</div>
					</div>
				</nav>

				{/* dropdown navigate */}
				<div className=" flex items-center md:hidden">
					<button onClick={navToggle}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h7"
							/>
						</svg>
					</button>
					<menu className={`${navOpen ? '-translate-x-20 ease-in duration-200' : ` translate-x-24  ease-out duration-300`} absolute gap-1 bottom-16 mb-1 md:top-16 md:mt-1 p-2 shadow bg-gradient-to-bl from-slate-300 to-transparent text-slate-800 rounded-lg w-max z-30`} >
						<Link
							className="btn btn-sm btn-ghost flex justify-start font-normal capitalize w-full"
							activeClassName="bg-zinc-400 text-white"
							to="/"
						>
							Welcome
						</Link>
						{menuLinks.map((link) => (
							<Link
								className="btn btn-sm btn-ghost flex justify-start font-normal capitalize w-full"
								activeClassName="bg-zinc-400 text-white"
								partiallyActive={true}
								key={link.name}
								to={link.link}
							>
								{link.name}
							</Link>
						))}
					</menu>
				</div>
			</div>

			{/* Theme modal toggle */}
			<div data-active={scrolled} className={`${themeOpen ? 'ease-in duration-200' : ` translate-x-96  ease-out duration-300`} ${path === '/' ? 'theme-toggle' : 'bottom-16 mb-1 md:top-16 md:mt-1'} absolute right-32  z-30`}>
				<div className="rounded-lg bg-gradient-to-tl from-error to-transparent w-max p-2">
					<div className="flex flex-col gap-2 w-min">
						<button onClick={themeToggle} className="btn btn-sm btn-accent capitalize" data-set-theme="" data-act-class="ACTIVECLASS">Default</button>
						<button onClick={themeToggle} className="btn btn-sm btn-neutral capitalize" data-set-theme="coffee" data-act-class="ACTIVECLASS">Coffee</button>
						<button onClick={themeToggle} className="btn btn-sm btn-danger capitalize" data-set-theme="night" data-act-class="ACTIVECLASS">Night</button>
						<button onClick={themeToggle} className="btn btn-sm btn-success capitalize" data-set-theme="forest" data-act-class="ACTIVECLASS">Forest</button>
						<button onClick={themeToggle} className="btn btn-sm btn-primary capitalize" data-set-theme="garden" data-act-class="ACTIVECLASS">Garden</button>
						<button onClick={themeToggle} className="btn btn-sm btn-error capitalize" data-set-theme="autumn" data-act-class="ACTIVECLASS">Autumn</button>
						<button onClick={themeToggle} className="btn btn-sm btn-info capitalize" data-set-theme="winter" data-act-class="ACTIVECLASS">Winter</button>
					</div>
				</div>
			</div>
		</div>
	)
}
