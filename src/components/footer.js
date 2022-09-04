import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'


const Footer = ({ socials, siteTitle }) => {
  return (
    <div>
      <div className="mt-8 py-8 px-6 lg:px-16 bg-zinc-400 md:grid grid-flow-col font-teko text-sm">
        <div className='grid grid-flow-col'>
          <div>
            <h2 className='font-edu'>Social Links</h2>
            <div className='flex gap-2 m-2 px-2 items-center'>
              <ul className='space-y-2'>
                <li>
                  <svg viewBox="0 0 310 310" className='w-5'>
                    <g>
                      <path id="XMLID_827_" d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73   c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783   c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598   C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467   c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977   c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889   c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597   c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961   c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895   c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367   c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998   C307.394,57.037,305.009,56.486,302.973,57.388z" />
                    </g>
                  </svg>
                </li>
                <li>
                  <svg viewBox="0 0 16 16" className=" w-5">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </li>
                <li>
                  <svg className='w-5' x="0px" y="0px" viewBox="0 0 455 455" >
                    <path d="M246.4,204.35v-0.665c-0.136,0.223-0.324,0.446-0.442,0.665H246.4z" />
                    <path d="M0,0v455h455V0H0z M141.522,378.002H74.016V174.906h67.506V378.002z    M107.769,147.186h-0.446C84.678,147.186,70,131.585,70,112.085c0-19.928,15.107-35.087,38.211-35.087   c23.109,0,37.31,15.159,37.752,35.087C145.963,131.585,131.32,147.186,107.769,147.186z M385,378.002h-67.524V269.345   c0-27.291-9.756-45.92-34.195-45.92c-18.664,0-29.755,12.543-34.641,24.693c-1.776,4.34-2.24,10.373-2.24,16.459v113.426h-67.537   c0,0,0.905-184.043,0-203.096H246.4v28.779c8.973-13.807,24.986-33.547,60.856-33.547c44.437,0,77.744,29.02,77.744,91.398V378.002   z" />
                  </svg>
                </li>
                <li>
                  <svg className='w-5' x="0px" y="0px" viewBox="0 0 551.034 551.034" >
                    <path d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722   c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156   C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156   c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722   c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z" />
                    <path d="M275.517,133C196.933,133,133,196.933,133,275.516   s63.933,142.517,142.517,142.517S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6   c-48.095,0-87.083-38.988-87.083-87.083s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083   C362.6,323.611,323.611,362.6,275.517,362.6z" />
                    <circle cx="418.306" cy="134.072" r="34.149" />
                  </svg>
                </li>
              </ul>
              <ul className='space-y-2'>
                {socials.map(akun =>
                  <li key={akun.name}>
                    <Link to={akun.url} target="_blank">{akun.name}</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div>
            <h2 className='font-edu'>Contact Us</h2>
            <div className='m-2 px-2 space-y-2'>
              <Link to='mailto:samuarrif@gmail.com' target="_blank" className='flex gap-2'>
                <svg className='w-5' xmlns="http://www.w3.org/2000/svg" viewBox="52 42 88 66">
                  <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
                  <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
                  <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" />
                  <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
                  <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2" />
                </svg>
                Gmail
              </Link>
              <Link to='https://wa.me/6285159606776?text=Hello+Samsul+Muarrif' target="_blank" className='flex gap-2'>
                <svg className='w-5' viewBox="0 0 512 512">
                  <rect width="512" height="512" rx="15%" fill="#25d366" />
                  <path fill="#25d366" stroke="#fff" stroke-width="26" d="M123 393l14-65a138 138 0 1150 47z" />
                  <path fill="#fff" d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18" />
                </svg>
                Whatsapp
              </Link>
            </div>
          </div>
        </div>
        <div className='grid grid-flow-col mt-4 lg:mt-0'>
          <div>
            <h2 className='font-edu'>Services</h2>
            <div className='m-2 px-2 space-y-2'>
              <ul>
                <li>Mapping</li>
                <li>Web Promming</li>
                <li>Statistics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row items-start justify-end gap-2 bg-gradient-to-b from-zinc-400 to-zinc-300 py-2 px-8 w-full'>
        <h5 className='mr-2 -ml-2'>Sponsored:</h5>
        <ul className='sm:flex gap-4 items-center'>
          <li><Link className='flex items-center' to='https://nodejs.org/en/' target={"_blank"}><StaticImage src='../images/nodejs.svg' className='w-[24px] mr-1' />Nodejs</Link></li>
          <li><Link className='flex items-center' to='https://reactjs.org/' target={"_blank"}><StaticImage src='../images/react.svg' className='w-5 mr-2' />Reactjs</Link></li>
          <li><Link className='flex items-center' to='https://www.gatsbyjs.com/' target={"_blank"}><StaticImage src='../images/gatsbyjs.png' className='w-[18px] ml-[2px] mr-2' />Gatsbyjs</Link></li>
          <li><Link className='flex items-center' to='https://graphql.org/' target={"_blank"}><StaticImage src='../images/graphql.svg' className='w-5 mr-2' />GraphQL</Link></li>
          <li><Link className='flex items-center' to='https://tailwindcss.com/' target={"_blank"}><StaticImage src='../images/tailwindcss-icon.svg' className='w-5 mr-2' />Tailwindcss</Link></li>
          <li><Link className='flex items-center' to='https://code.visualstudio.com' target={"_blank"}><StaticImage src='../images/vscode.svg' className='w-5 mr-2' />VS Code</Link></li>
        </ul>
      </div>
      <div className="col-span-6 flex justify-center w-full py-2 bg-zinc-300">© 2022 {siteTitle}</div>
    </div>
  )
}

export default Footer
