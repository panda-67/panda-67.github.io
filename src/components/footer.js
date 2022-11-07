import { Link, StaticQuery, graphql } from "gatsby";
import React from "react";

const Footer = () => {
  return (
    <StaticQuery
      query={graphql`
        query FooterQuery {
          site {
            meta: siteMetadata {
              title
              twitter
              github
              instagram
              linkedin
            }
          }
        }
      `}
      render={(data) => (
        <div className="bg-zinc-400 mt-4">
          <div className="flex flex-wrap gap-x-12 gap-y-4 mx-12 justify-around pt-8 pb-4">
            <div>
              <h2 className="font-edu">Social Links</h2>
              <div className="flex gap-2 items-center">
                <Link to={data.site.meta.github}>
                  <svg viewBox="0 0 16 16" className=" w-5">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </Link>
                <Link to={data.site.meta.linkedin}>
                  <svg viewBox="0 0 310 310" className="w-5">
                    <path d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73   C77.16,101.969,74.922,99.73,72.16,99.73z" />
                    <path
                      id="XMLID_803_"
                      d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4   c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
                    />
                    <path
                      id="XMLID_804_"
                      d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599   c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319   c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995   C310,145.43,300.549,94.761,230.454,94.761z"
                    />
                  </svg>
                </Link>
                <Link to={data.site.meta.twitter}>
                  <svg viewBox="0 0 310 310" className="w-5">
                    <path
                      id="XMLID_827_"
                      d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73   c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783   c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598   C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467   c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977   c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889   c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597   c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961   c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895   c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367   c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998   C307.394,57.037,305.009,56.486,302.973,57.388z"
                    />
                  </svg>
                </Link>
                <Link to={data.site.meta.instagram}>
                  <svg viewBox="0 0 551.034 551.034" className="w-5">
                    <path d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722   c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156   C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156   c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722   c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z" />
                    <path d="M275.517,133C196.933,133,133,196.933,133,275.516   s63.933,142.517,142.517,142.517S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6   c-48.095,0-87.083-38.988-87.083-87.083s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083   C362.6,323.611,323.611,362.6,275.517,362.6z" />
                    <circle cx="418.306" cy="134.072" r="34.149" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h2 className="font-edu">Contact Us</h2>
              <div className="flex flex-wrap gap-x-4">
                <Link
                  to="mailto:samuarrif@gmail.com"
                  target="_blank"
                  className="flex gap-2"
                >
                  <svg
                    className="w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="52 42 88 66"
                  >
                    <path
                      fill="#4285f4"
                      d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"
                    />
                    <path
                      fill="#34a853"
                      d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"
                    />
                    <path
                      fill="#fbbc04"
                      d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"
                    />
                    <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
                    <path
                      fill="#c5221f"
                      d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"
                    />
                  </svg>
                </Link>
                <Link
                  to="https://wa.me/6285159606776?text=Hello+Samsul+Muarrif"
                  target="_blank"
                  className="flex gap-2"
                >
                  <svg className="w-5" viewBox="0 0 512 512">
                    <rect width="512" height="512" rx="15%" fill="#25d366" />
                    <path
                      fill="#25d366"
                      stroke="#fff"
                      stroke-width="26"
                      d="M123 393l14-65a138 138 0 1150 47z"
                    />
                    <path
                      fill="#fff"
                      d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18"
                    />
                  </svg>
                </Link>
                <Link
                  to="https://sociabuzz.com/panda67/tribe"
                  target="_blank"
                  className="flex gap-2"
                >
                  <svg className="w-5" viewBox="0 0 24 24" fill="none">
                    <path
                      clip-rule="evenodd"
                      d="M6.47358 1.96511C8.27963 1.93827 10.2651 2.62414 12 4.04838C13.7349 2.62414 15.7204 1.93827 17.5264 1.96511C19.5142 1.99465 21.3334 2.90112 22.2141 4.68531C23.0878 6.45529 22.9326 8.87625 21.4643 11.7362C19.9939 14.6003 17.1643 18.0021 12.4867 21.8566C12.4382 21.898 12.3855 21.9324 12.3298 21.9596C12.1243 22.0601 11.8798 22.0624 11.6702 21.9596C11.6145 21.9324 11.5618 21.898 11.5133 21.8566C6.83565 18.0021 4.00609 14.6003 2.53569 11.7362C1.06742 8.87625 0.912211 6.45529 1.78589 4.68531C2.66659 2.90112 4.4858 1.99465 6.47358 1.96511Z"
                      fill="red"
                      fill-rule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            {/* <div className='-ml-2'>
          <h2 className='font-edu'>Services</h2>
          <ul className='space-y-2'>
            <li>Mapping</li>
            <li>Web Dev</li>
            <li>Statistics</li>
          </ul>
        </div> */}
            {/* <div>
          <h2 className='font-edu'>Sponsored</h2>
          <ul className='space-y-2 '>
            <li><Link className='flex items-center' to='https://nodejs.org/en/' target={"_blank"}><StaticImage src='../images/nodejs.svg' className='w-[24px] mr-1' />Nodejs</Link></li>
            <li><Link className='flex items-center' to='https://reactjs.org/' target={"_blank"}><StaticImage src='../images/react.svg' className='w-5 mr-2' />Reactjs</Link></li>
            <li><Link className='flex items-center' to='https://www.gatsbyjs.com/' target={"_blank"}><StaticImage src='../images/gatsbyjs.png' className='w-[18px] ml-[2px] mr-2' />Gatsbyjs</Link></li>
            <li><Link className='flex items-center' to='https://graphql.org/' target={"_blank"}><StaticImage src='../images/graphql.svg' className='w-5 mr-2' />GraphQL</Link></li>
            <li><Link className='flex items-center' to='https://tailwindcss.com/' target={"_blank"}><StaticImage src='../images/tailwindcss-icon.svg' className='w-5 mr-2' />Tailwindcss</Link></li>
            <li><Link className='flex items-center' to='https://code.visualstudio.com' target={"_blank"}><StaticImage src='../images/vscode.svg' className='w-5 mr-2' />VS Code</Link></li>
          </ul>
        </div> */}
          </div>
          <div className="col-span-6 flex justify-center w-full py-2 bg-zinc-300">
            © 2022 {data.site.meta.title}
          </div>
        </div>
      )}
    />
  );
};

export default Footer;
