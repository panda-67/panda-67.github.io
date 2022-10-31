import * as React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ data, search, path, children }) => {
	return (
		<>
			<div style={{ margin: `0 auto`, padding: `0` }}>				
				<div className="h-full">
					{/* <!-- Welcome --> */}
					{path === '/' && (
						<div div className="h-screen -mb-16">
							<div className="bg-cover bg-blend-multiply bg-center h-full flex justify-start ">
								<StaticImage src="../images/dendelion.jpg" className="relative" />
								<div className="absolute flex flex-col justify-center items-center w-full h-full pb-20 bg-gradient-to-tr from-slate-900 to-transparent">
									<div className="text-gray-100 md:text-center font-semibold font-sans space-y-2 lg:space-y-8 mx-6 my-32 lg:my-2">
										<p className="text-3xl md:text-5xl lg:text-6xl break-words lg:mb-2">
											Hello, I am Samsul Muarrif
										</p>
										<p className="font-normal text-lg lg:text-3xl lg:m-0">Forester | Tech Eunthusiast | Traveler | Scientist</p>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
				<div className="px-4 lg:px-16 sticky top-0 z-10 bg-gray-100 bg-opacity-60 w-full">
					<Navbar menuLinks={data.menuLinks} searchData={search.index} path={path} />
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
					<Footer socials={data.socials} siteTitle={data.title} />
				</div>
			</div >
		</>
	)
}

export default Layout