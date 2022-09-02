import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Navbar from "../components/navbar"

export default function Layout({ title, children }) {
	return (
		<div style={{ margin: `0 auto`, padding: `0` }}>
			<StaticQuery
				query={graphql`
						query MetaQuery {
							site {
								siteMetadata {
									title
								}
							}
						}
					`}
				render={data => (
					<React.Fragment>
						<Helmet
							title={title + (" | ") + data.site.siteMetadata.title}
							meta={[
								{ name: 'description', content: 'Personal portfolio by Samsul Muarrif' },
								{ name: 'keywords', content: 'resume, portfolio, profile' },
							]}
						>
						</Helmet>
						<div className="px-4 lg:px-16 absolute z-10 bg-gray-100 bg-opacity-80 w-full">
							<Navbar />
						</div>
						{/* <!-- Layout --> */}
						<div className="font-edu">
							{/* <!-- Content --> */}
							<div className="">
								{children}
							</div>
						</div>
						<div className="">
							{/* !-- Footer --> */}
							<div className="flex justify-center w-full mb-4">© 2022 {data.site.siteMetadata.title}</div>
						</div>
					</React.Fragment>
				)}
			/>
		</div>
	)
}