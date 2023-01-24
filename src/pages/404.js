import * as React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Frame from '../layouts/main'

const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 6,
};

const NotFoundPage = () => {
  return (
    <div>
      <StaticQuery
        query={graphql`
          query NotFoundQuery {
            site {
              siteMetadata {
                title
                menuLinks {
                  name
                  link
                }
              }
            }
            siteSearchIndex {
              index
            }
          }
        `}
        render={(data) => (
          <Frame>
            <div className="mx-2 md:mx-16 absolute">
            </div>
            <div className="h-screen mx-2 md:mx-16 flex flex-col gap-4 w-full max-w-6xl items-center justify-center">
              <div className="flex items-center mb-8">
                <div className="flex flex-col items-end border-r border-zinc-500 py-2 pr-4 mr-4 text-zinc-400">
                  <p className="text-5xl font-light">404</p>
                </div>
                <div>
                  <p className="font-light transform translate-y-1.5">
                    Page not found
                  </p>
                </div>
              </div>
              <div className="pb-2 font-light flex flex-col items-center gap-2">
                <span className="text-center leading-7">
                  Sorry 😔, we couldn’t find what you were looking for. <br />
                  You might wanna go to link below ... 
                </span>
                <br />
                {process.env.NODE_ENV === "development" ? (
                  <p>
                    Try creating a page in{" "}
                    <code style={codeStyles}>src/pages/</code>
                  </p>
                ) : null}
                <br />
              </div>
              <div className="flex gap-2">
                <Link
                  to="/"
                  className="btn btn-sm btn-outline border-zinc-500 capitalize font-light"
                >
                  Home
                </Link>
                <Link
                  to="/blog"
                  className="btn btn-sm btn-outline border-zinc-500 capitalize font-light"
                >
                  Blogs
                </Link>
              </div>
            </div>
          </Frame>
        )}
      />
    </div>
  );
};

export default NotFoundPage;

export const Head = () => <title>404 | Page Not Found</title>;
