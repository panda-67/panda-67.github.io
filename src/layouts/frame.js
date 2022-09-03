import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function Layout({ title, children }) {
	return (
		<div style={{ margin: `0 auto`, padding: `0` }}>
			<StaticQuery
				query={graphql`
					query MetaQuery {
						site {
							siteMetadata {
								title
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
							title={title + (" | ") + data.site.siteMetadata.title}
							meta={[
								{ name: 'description', content: 'Personal portfolio by Samsul Muarrif' },
								{ name: 'keywords', content: 'resume, portfolio, profile' },
							]}
						>
						</Helmet>
						<div className="px-4 lg:px-16 absolute z-10 bg-gray-100 bg-opacity-80 w-full">
							<Navbar menuLinks={data.site.siteMetadata.menuLinks} searchData={data.siteSearchIndex.index} />
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
							<Footer socials={data.site.siteMetadata.socials} siteTitle={data.site.siteMetadata.title}/>
						</div>
					</React.Fragment>
				)}
			/>
		</div>
	)
}