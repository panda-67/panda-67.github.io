import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import SideLink from "../components/sidelink"
import { StaticImage } from "gatsby-plugin-image"
import Navbar from "../components/navbar"

export default function Layout({ title, children }) {
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
								}
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
						<div className="px-4 lg:px-16 z-10 bg-gray-100 bg-opacity-50 w-full">
							<Navbar />
						</div>
						<div className="w-full flex justify-center gap-4 lg:hidden my-4">
							{data.site.siteMetadata.polioPath.map(link => (
								<div key={link.name} >
									<Link
										className="btn btn-xs btn-outline border-zinc-400 font-light capitalize"
										activeClassName="bg-zinc-400 text-white font-medium"
										to={`/portfolio${link.link}`}>
										{link.name}
									</Link>
								</div>
							))}
						</div>
						{/* <!-- Layout --> */}
						<div className="lg:grid grid-flow-col grid-cols-8 font-edu max-w-7xl mx-auto">
							{/* <!-- Content --> */}
							<div className="col-span-6">
								{children}
							</div>
							{/* <!-- Side Item --> */}
							<div className="hidden col-span-2 h-screen pl-4 lg:flex flex-col items-center">
								<div className="fixed flex flex-col items-center mt-4 pt-10">
									<div className="my-2 h-48">
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
						<div className="lg:grid grid-flow-col grid-cols-8">
							{/* !-- Footer --> */}
							<div className="col-span-6 flex justify-center w-full mb-4">© 2022 {data.site.siteMetadata.title}</div>
						</div>
					</React.Fragment>
				)}
			/>
		</div>
	)
}