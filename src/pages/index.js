import * as React from "react";
import { Link } from "gatsby"
import Frame from "../components/layout";

export const Head = () => <title>Profile | Samsul Muarrif</title>;
export default function IndexPage() {
  return (
    <Frame>
      <main>
        {/* <!-- Welcome --> */}
        <div className="h-2/6 md:h-screen p-6 md:p-10">
          <div style={imgbgStyles}>
            <div
              className="
            flex flex-col
            justify-center
            items-center
            w-full
            h-full
            rounded-xl
            bg-gradient-to-tr
            from-slate-900
            to-transparent
          "
            >
              <div
                className="
              text-gray-300 text-center
              md:text-left
              font-semibold
              mx-6
              my-10
            "
              >
                <p className="text-4xl md:text-6xl break-words mb-4 md:mb-2">
                  Hello, I am Samsul Muarrif
                </p>
                <p className="text-4xl lg:m-0 font-teko">GIS Expert</p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Recent Activity --> */}
        <div className="text-gray-800 text-center md:text-left font-semibold mx-10 my-2">
          <p className="text-xl md:text-3xl break-words mb-4 md:mb-2">Recent Work</p>
        </div>
        <div className="mx-6 md:mx-10 mb-8 grid gap-2 md:gap-6 md:grid-cols-2">
          <div className="rounded-lg hover:border border-indigo-600">
            <Link to="/" className="relative w-full flex flex-col transform hover:translate-x-1 hover:translate-y-1">
              <img
                className="rounded-lg object-fill"
                src="https://cdn.pixabay.com/photo/2018/03/24/08/56/colorful-3256055_960_720.jpg"
                alt=""
              />
              <div className="flex items-center justify-center absolute inset-x-0 bottom-0">
                <div
                  className="  w-full        text-center
                font-bold
                text-lg
                hover:text-2xl
                pt-5
                pl-3
                hover:pt-10
                h-16
                hover:h-24
                transition-all
                ease-in-out
                duration-600
                delay-100
                rounded-b-lg
                bg-gradient-to-t
                from-indigo-500
                to-transparent
                text-gray-200
              "
                >
                  Graphic Desain
                </div>
              </div>
            </Link>
          </div>
          <div className="rounded-lg hover:border border-indigo-600">
            <Link to="/" 
              className="
            relative
            w-full
            flex flex-col
            transform
            hover:translate-x-1 hover:translate-y-1
          "
            >
              <img
                className="rounded-lg object-fill"
                src="https://cdn.pixabay.com/photo/2020/05/06/12/01/compass-5137269_960_720.jpg"
                alt=""
              />
              <div className="flex items-center justify-center absolute inset-x-0 bottom-0">
                <div
                  className="
                w-full
                text-center
                font-bold
                text-lg
                hover:text-2xl
                pt-5
                pl-3
                hover:pt-10
                h-16
                hover:h-24
                transition-all
                ease-in-out
                duration-600
                delay-100
                rounded-b-lg
                bg-gradient-to-t
                from-indigo-500
                to-transparent
                text-gray-200
              "
                >
                  Mapping Expert
                </div>
              </div>
            </Link>
          </div>
          <div className="rounded-lg hover:border border-indigo-600">
            <Link to="/" 
              className="
            relative
            w-full
            flex flex-col
            transform
            hover:translate-x-1 hover:translate-y-1
          "
            >
              <img
                className="rounded-lg object-fill"
                src="https://cdn.pixabay.com/photo/2019/09/19/17/40/insect-4489864_960_720.jpg"
                alt=""
              />
              <div className="flex items-center justify-center absolute inset-x-0 bottom-0">
                <div
                  className="
                w-full
                text-center
                font-bold
                text-lg
                hover:text-2xl
                pt-5
                pl-3
                hover:pt-10
                h-16
                hover:h-24
                transition-all
                ease-in-out
                duration-600
                delay-100
                rounded-b-lg
                bg-gradient-to-t
                from-indigo-500
                to-transparent
                text-gray-200
              "
                >
                  Entomology Expert
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </Frame>
  );
};

const imgbgStyles = {
  backgroundImage:
    "url('https://cdn.pixabay.com/photo/2016/12/15/20/21/texture-1909992_960_720.jpg')",
  backgroundBlendMode: "multiply",
  backgroundSize: "cover",
  justifyContent: "center",
  alignItems: "flex-start",
  borderRadius: "0.75rem",
  height: "100%",
};
