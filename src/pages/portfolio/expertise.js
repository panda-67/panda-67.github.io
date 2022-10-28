import { Link } from "gatsby";
import * as React from "react";
import Frame from "../../layouts/layout";

const ExpertisePage = (
  {
    pageContext: { breadcrumb: { crumbs } }
  }
) => {
  return (
    <Frame title="Expertise" bread={crumbs}>
      <div className="divider divider-vertical my-12 mx-6 md:mx-0 px-2 text-2xl md:text-4xl">Skills</div>
      <div className="mx-6 md:mx-0 mb-8 grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-lg hover:border border-indigo-600">
          <Link to="https://arrifusman.github.io/" target={"_blank"} noreferer noopener className="relative w-full flex flex-col transform hover:translate-x-1 hover:translate-y-1">
            <img className="rounded-lg object-fill"
              src="https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_960_720.jpg"
              alt=""
            />
            <div className="flex items-center justify-center absolute inset-x-0 bottom-0">
              <div className="w-full text-center font-bold text-lg md:hover:text-2xl pt-5 pl-3 hover:pt-10 h-16 hover:h-24 transition-all ease-in-out duration-600 delay-100 rounded-b-lg bg-gradient-to-t from-indigo-500 to-transparent text-gray-200">
                Programming
              </div>
            </div>
          </Link>
        </div>

        <div className="rounded-lg hover:border border-indigo-600">
          <Link to="/" className="relative w-full flex flex-col transform hover:translate-x-1 hover:translate-y-1">
            <img className="rounded-lg object-fill"
              src="https://cdn.pixabay.com/photo/2020/05/06/12/01/compass-5137269_960_720.jpg"
              alt=""
            />
            <div className="flex items-center justify-center absolute inset-x-0 bottom-0">
              <div className="w-full text-center font-bold text-lg md:hover:text-2xl pt-5 pl-3 hover:pt-10 h-16 hover:h-24 transition-all ease-in-out duration-600 delay-100 rounded-b-lg bg-gradient-to-t from-indigo-500 to-transparent text-gray-200">
                Mapping Expert
              </div>
            </div>
          </Link>
        </div>

        <div className="rounded-lg hover:border border-indigo-600">
          <Link to="/" className="relative w-full flex flex-col transform hover:translate-x-1 hover:translate-y-1">
            <img className="rounded-lg object-fill"
              src="https://cdn.pixabay.com/photo/2018/03/24/08/56/colorful-3256055_960_720.jpg"
              alt=""
            />
            <div className="flex items-center justify-center absolute inset-x-0 bottom-0">
              <div className="w-full text-center font-bold text-lg md:hover:text-2xl pt-5 pl-3 hover:pt-10 h-16 hover:h-24 transition-all ease-in-out duration-600 delay-100 rounded-b-lg bg-gradient-to-t from-indigo-500 to-transparent text-gray-200">
                Graphic Desain
              </div>
            </div>
          </Link>
        </div>

        <div className="rounded-lg hover:border border-indigo-600">
          <Link to="/" className="relative w-full flex flex-col transform hover:translate-x-1 hover:translate-y-1">
            <img className="rounded-lg object-fill"
              src="https://cdn.pixabay.com/photo/2019/09/19/17/40/insect-4489864_960_720.jpg"
              alt=""
            />
            <div className="flex items-center justify-center absolute inset-x-0 bottom-0">
              <div className="w-full text-center font-bold text-lg md:hover:text-2xl pt-5 pl-3 hover:pt-10 h-16 hover:h-24 transition-all ease-in-out duration-600 delay-100 rounded-b-lg bg-gradient-to-t from-indigo-500 to-transparent text-gray-200">
                Entomology Expert
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Frame>
  )
}

export default ExpertisePage