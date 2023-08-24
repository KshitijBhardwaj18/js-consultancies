
import React from "react";
import scene1 from "@/public/assets/scene2.jpg";
import Image from "next/image";

const popup = (props) => {
  return (
    <div className={`popup absolute  ${props.top}   ${props.left}  rounded-xl bg-white flex flex-row max-w-max backdrop-blur-sm bg-opacity-80  border-2 border-zinc-200 `}>
        <div className="left flex flex-col p-10  ">
          <div className="pointer">
            <a href="/">
              <h5 className="font-sans2 text-black text-xl  hover:text-blue-500 hover:underline ">
                Analysis of Companies
              </h5>
            </a>
            <h6 className="font-sans2 text-gray-500 text-l ">
              Get your company analysed
            </h6>
          </div>

          <div className="pointer mt-5">
            <a href="/">
              <h5 className="font-sans2 text-black text-xl  hover:text-blue-500 hover:underline ">
                Analysis of Companies
              </h5>
            </a>
            <h6 className="font-sans2 text-gray-500 text-l ">
              Get your company analysed
            </h6>
          </div>

          <div className="pointer mt-5">
            <a href="/">
              <h5 className="font-sans2 text-black text-xl  hover:text-blue-500 hover:underline ">
                Analysis of Companies
              </h5>
            </a>
            <h6 className="font-sans2 text-gray-500 text-l ">
              Get your company analysed
            </h6>
          </div>
        </div>

        <div className="center ">
          <div class="w-1 m-3 h-72 bg-gray-300"></div>
        </div>

        <div className="right  p-5  bg-[#dae0e3] m-5 gap-10 rounded-3xl">
          <h6 className="font-sans2 text-gray-500 text-2xl text w-96 ">
            Get more from payments: more tips, more reviews, more data, more
            time..
          </h6>
          <div className="Image  max-w-sm p-0">
            {" "}
            <Image
              src={scene1}
              alt="banner "
              className=" image object-cover h-40 mb-0 p-0 rounded-xl"
            />
          </div>
        </div>
      </div>
  )
}

export default popup
