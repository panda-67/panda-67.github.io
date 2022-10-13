import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import SideLink from "../components/sidelink"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function Layout({ title, bread, breadLabel, children }) {
	return (
		<div style={{ margin: `0 auto`, padding: `0` }}>
			<StaticQuery
				query={graphql`
						query SiteQuery {
							site {
								siteMetadata {
									title
									polioPath {
										name
										link
										}
									menuLinks {
										name
										link
										}
									socials {
										name
										url
									}
								}
							}
							siteSearchIndex {
								index
							}
						}
					`}
				render={data => (
					<React.Fragment>
						<Helmet
							title={title + (" | Portfolio | ") + data.site.siteMetadata.title}
							meta={[
								{ name: 'description', content: 'Personal portfolio by Samsul Muarrif' },
								{ name: 'keywords', content: 'resume, portfolio, profile' },
							]}
						>
						</Helmet>
						<div className="px-4 lg:px-16 fixed top-0 z-10 bg-gray-100 bg-opacity-50 w-full">
							<Navbar menuLinks={data.site.siteMetadata.menuLinks} searchData={data.siteSearchIndex.index} />
						</div>
						<div className="mx-8 mt-16 md:mx-6 lg:mx-12">
							<Breadcrumb
								className="text-base font-light font-sans capitalize pl-[9px] border-l border-zinc-400"
								crumbs={bread}
								crumbSeparator=""
								crumbLabel={title}
							/>
						</div>

						{/* <!-- Layout --> */}
						<div className="lg:grid grid-flow-col grid-cols-10 font-edu md:mx-4 lg:mx-12">

							{/* Mobile Menu */}
							<div className="lg:hidden flex justify-between md:justify-start md:mx-4 mx-12 gap-4 my-4">
								{data.site.siteMetadata.polioPath.map(link => (
									<div key={link.name} >
										<Link
											className="btn btn-xs btn-outline font-sans border-zinc-400 font-light capitalize"
											activeClassName="bg-zinc-400 text-white font-medium"
											to={`/portfolio${link.link}`}>
											{link.name}
										</Link>
									</div>
								))}
							</div>

							{/* <!-- Content --> */}
							<div className="col-span-8">
								{children}
							</div>

							{/* <!-- Side Item --> */}
							<div className="hidden h-full col-span-2 pl-4 lg:flex flex-col items-center">
								<div className="sticky top-0">
									<div className=" h-48">
										<StaticImage
											src="../images/profile.png"
											title="Samsul Muarrif"
											alt="profile"
											width={180} />
									</div>
									<div className="flex flex-col gap-2 text-lg text-center font-medium font-teko">
										{data.site.siteMetadata.polioPath.map(link => (
											<div key={link.name} className="capitalize w-full">
												<SideLink href={`/portfolio${link.link}`}>
													{link.name}
												</SideLink>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
						<div className="">
							{/* !-- Footer --> */}
							<Footer socials={data.site.siteMetadata.socials} siteTitle={data.site.siteMetadata.title} />
						</div>
					</React.Fragment>
				)}
			/>
		</div>
	)
}