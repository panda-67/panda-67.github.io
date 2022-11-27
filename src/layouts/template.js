import * as React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { StaticImage } from "gatsby-plugin-image";

const Layout = ({ path, children }) => {
  return (
    <div style={{ margin: `0 auto`, padding: `0` }}>
      <header>
        {/* <!-- Welcome --> */}
        <hero className="h-full">
          {path === "/" && (
            <div div className="h-screen -mb-16">
              <div className="bg-cover bg-blend-multiply bg-center h-full flex justify-start ">
                <StaticImage
                  src="../images/dendelion.jpg"
                  className="relative"
                />
                <div className="absolute flex flex-col justify-center items-center w-full h-full pb-20 bg-gradient-to-tr from-slate-900 to-transparent">
                  <div className="text-gray-100 md:text-center font-semibold font-sans space-y-2 lg:space-y-8 mx-6 my-32 lg:my-2">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl break-words lg:mb-2">
                      Hello, I am Samsul Muarrif
                    </h1>
                    <h2 className="font-normal text-lg lg:text-3xl lg:m-0">
                      Forester | Tech Eunthusiast | Traveler | Scientist
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          )}
        </hero>

        {/* Navbar */}
        <div className="sticky top-0">
          <Navbar path={path} />
        </div>
      </header>

      {/* <!-- Content --> */}
      <main>{children}</main>
      <div className="divider divider-vertical my-12 mx-4 px-4 md:px-8 text-2xl md:text-4xl"></div>

      {/* !-- Footer --> */}
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
