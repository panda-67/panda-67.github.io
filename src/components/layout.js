import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Header from "./header"

export default function Layout({ title, children }) {
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
							title={title + (" | Samsul Muarrif")}
							meta={[
								{ name: 'description', content: 'Sample' },
								{ name: 'keywords', content: 'sample, something' },
							]}
						>
						</Helmet>
						<Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
						{/* <!-- Layout --> */}
						<div className="md:grid grid-flow-col grid-cols-8 font-edu max-w-7xl mx-auto">
							{/* <!-- Content --> */}
							<div className="col-span-6">
								{children}
							</div>

							{/* <!-- Side Item --> */}
							<div className="hidden col-span-2 h-screen pl-4 sm:flex flex-col items-center">
								<div className="fixed text-center">
									<div className="my-6 h-60 flex items-center">
										<h3 className="text-5xl font-extrabold font-taviraj">Profile</h3>
									</div>
									<div className="flex flex-col gap-2 text-lg font-medium font-teko">
										<div className="w-full">
											<Link to="/" className="btn btn-sm btn-primary">
												Welcome
											</Link>
										</div>
										<div className="w-full">
											<Link to="/expertise">
												Expertise
											</Link>
										</div>
										<div className="w-full">
											<Link to="/experience">
												Experience
											</Link>
										</div>
										<div className="w-full">
											<Link to="/education">
												Education
											</Link>
										</div>
										<div className="w-full">
											<Link to="/about" >
												About
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="md:grid grid-flow-col grid-cols-8">
							{/* !-- Footer --> */}
							<div className="col-span-6 flex justify-center w-full mb-4">© 2022 Samsul Muarrif</div>
						</div>
					</React.Fragment>
				)}
			/>
		</div>
	)
}