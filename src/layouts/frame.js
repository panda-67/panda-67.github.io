import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function Layout({ title, path, children }) {
	const bgImage = {
		backgroundImage:
			"url('https://cdn.pixabay.com/photo/2016/12/15/20/21/texture-1909992_960_720.jpg')",
	}
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
						<div className="h-full">
							{/* <!-- Welcome --> */}
							{path === '/' && (
								<div div className="h-screen -mb-16">
									<div style={bgImage} className="bg-cover bg-blend-multiply bg-center h-full flex justify-start ">
										<div className="flex flex-col justify-center items-center w-full h-full pb-20 bg-gradient-to-tr from-slate-900 to-transparent">
											<div className="text-gray-100 lg:text-left font-semibold font-sans mx-6 my-32 lg:my-2">
												<p className="text-2xl md:text-4xl lg:text-6xl break-words lg:mb-2">
													Hello, I am Samsul Muarrif
												</p>
												<p className="font-normal text-lg md:text-2xl lg:text-4xl lg:m-0 font-serif">Traveler</p>
											</div>
										</div>
									</div>
								</div>
							)}
						</div>
						<div className="px-4 lg:px-16 sticky top-0 z-10 bg-gray-100 bg-opacity-60 w-full">
							<Navbar menuLinks={data.site.siteMetadata.menuLinks} searchData={data.siteSearchIndex.index} path={path}/>
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
							<Footer socials={data.site.siteMetadata.socials} siteTitle={data.site.siteMetadata.title} />
						</div>
					</React.Fragment>
				)
				}
			/>
		</div >
	)
}