import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";
import SideLink from "../components/sidelink";
import Frame from "./main"

const Layout = ({ bread, children}) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            meta: siteMetadata {
              title
              aboutPath {
                name
                link
              }
            }
          }
        }
      `}
      render={(data) => (
        <Frame>
          <div style={{ margin: `0 auto`, padding: `0` }}>
            <div className="mx-6 md:mx-10 lg:mx-20">
              <Breadcrumb
                className="text-base font-light font-sans capitalize pl-[9px] border-l border-zinc-400"
                crumbs={bread}
                crumbSeparator=""
              />
            </div>

            {/* <!-- Layout --> */}
            <div className="lg:grid grid-flow-col grid-cols-10 font-edu md:mx-4 lg:mx-12">
              {/* Mobile Menu */}
              <ul className="lg:hidden flex justify-start md:justify-start mx-8 gap-4 my-4">
                {data.site.meta.aboutPath.map((link) => (
                  <li key={link.name}>
                    <Link
                      className="btn btn-xs btn-outline font-sans border-zinc-400 font-light capitalize"
                      activeClassName="bg-zinc-400 text-white font-medium"
                      to={`/about${link.link}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* <!-- Content --> */}
              <div className="col-span-8">{children}</div>

              {/* <!-- Side Item --> */}
              <div className="hidden h-full col-span-2 pl-4 lg:flex flex-col items-center">
                <div className="sticky top-20">
                  <figure className=" h-48">
                    <StaticImage
                      src="../images/profile.png"
                      title="Samsul Muarrif"
                      alt="Profile"
                      width={160}
                    />
                  </figure>
                  <ul className="flex flex-col gap-2 text-lg text-center font-medium font-edu">
                    {data.site.meta.aboutPath.map((link) => (
                      <li key={link.name} className="capitalize w-full">
                        <SideLink href={`/about${link.link}`}>
                          {link.name}
                        </SideLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Frame>
      )}
    />
  );
};

export default Layout;
