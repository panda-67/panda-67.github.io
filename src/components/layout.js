import React from "react"
import { Link } from "gatsby"

export default function Layout({ children }) {
    return (
        <div style={{ margin: `0 auto`, padding: `0 1rem` }}>
            {/* <!-- Layout --> */}
            <div className="md:grid grid-flow-col grid-cols-8 font-edu">
                {/* <!-- Content --> */}
                <div className="col-span-6">
                    {children}
                </div>

                {/* <!-- Side Item --> */}
                <div className="hidden col-span-2 h-screen sm:flex flex-col items-center">
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
        </div>
    )
}