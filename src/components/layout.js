import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Header from "./header"
import SideLink from "./sidelink"

export default function Layout({ title, children, menuLinks }) {
	return (
		<div style={{ margin: `0 auto`, padding: `0` }}>
			<StaticQuery
				query={graphql`
						query SiteTitleQuery {
							site {
								siteMetadata {
									title
			            menuLinks {
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
							title={title + (" | ") + data.site.siteMetadata.title}
							meta={[
								{ name: 'description', content: 'Sample' },
								{ name: 'keywords', content: 'sample, something' },
							]}
						>
						</Helmet>
						<Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
						{/* <!-- Layout --> */}
						<div className="lg:grid grid-flow-col grid-cols-8 font-edu max-w-7xl mx-auto">
							{/* <!-- Content --> */}
							<div className="col-span-6">
								{children}
							</div>

							{/* <!-- Side Item --> */}
							<div className="hidden col-span-2 h-screen pl-4 lg:flex flex-col items-center">
								<div className="fixed text-center">
									<div className="my-6 h-36 flex items-center">
										<h3 className="text-5xl text-center font-extrabold font-serif">Profile</h3>
									</div>
									<div className="flex flex-col gap-2 text-lg font-medium font-teko">
										<div className="w-full">
											<SideLink href="/">
												Welcome
											</SideLink>
										</div>
										<div className="w-full">
											<SideLink href="/expertise">
												Expertise
											</SideLink>
										</div>
										<div className="w-full">
											<SideLink href="/experience">
												Experience
											</SideLink>
										</div>
										<div className="w-full">
											<SideLink href="/education">
												Education
											</SideLink>
										</div>
										<div className="w-full">
											<SideLink href="/blogs">
												Blogs
											</SideLink>
										</div>
										<div className="w-full">
											<SideLink href="/about" >
												About
											</SideLink>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="lg:grid grid-flow-col grid-cols-8">
							{/* !-- Footer --> */}
							<div className="col-span-6 flex justify-center w-full mb-4">© 2022 Samsul Muarrif</div>
						</div>
					</React.Fragment>
				)}
			/>
		</div>
	)
}