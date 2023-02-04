import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { StaticImage } from "gatsby-plugin-image";
import { useScroll } from "../hooks/use-navbar";

export default function Layout({ path, children }) {

  const bgImage = "https://cdn.pixabay.com/photo/2019/01/17/23/14/work-3938875_640.jpg"
  const scrolled = useScroll()

  return (
    <div style={{ margin: `0 auto`, padding: `0` }}>
      <header>
        {/* <!-- Welcome --> */}
        <section className="h-full">
          {path === "/" ? (
            <div div className="h-screen mb-10 md:-mb-16">
              <div className="bg-cover bg-blend-multiply bg-center h-screen flex justify-start ">
                <StaticImage
                  width={1920}
                  height={1080}
                  transformOptions={{ grayscale: true }}
                  placeholder={"dominantColor"}
                  alt="Welcome"
                  src="../images/dendelion.jpg"
                  className="relative object-cover"
                />
                <div className="absolute flex flex-col justify-center items-center w-full h-screen pb-20 bg-gradient-to-tr from-slate-900 to-transparent">
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
          ) : null}
        </section>

        {/* Navbar */}
        <div data-active={scrolled} className={`${path === '/' ? '' : 'md:top-0 md:fixed'} m-nav h-nav z-30`}>
          <Navbar path={path} />
        </div>

        {/* Blog */}
        {path === "/blog/" ? (
          <div className="lg:h-screen md:-mb-16 h-[19rem] sm:h-96">
            <div className="bg-cover bg-blend-multiply bg-center h-screen flex justify-start ">
              <img
                src={bgImage}
                alt="Blog"
                loading="lazy"
                className="object-cover w-full h-80 sm:h-96 md:max-w-[720] md:max-h-[480] lg:h-full object-left"
                width="1920" height="1080"
              />
              <div className="absolute w-full h-80 md:h-full bg-gradient-to-tl from-stone-900 to-transparent flex justify-end items-center px-12 lg:px-28">
                <h1 className="lg:text-7xl sm:text-5xl text-white font-edu transform translate-y-16">
                  Welcome to Blog Post
                </h1>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      {/* <!-- Content --> */}
      <main className="mt-2 md:mt-16">{children}</main>
      <div className="divider divider-vertical my-12 mx-4 px-4 md:px-8 text-2xl md:text-4xl"></div>

      {/* !-- Footer --> */}
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  )
}
