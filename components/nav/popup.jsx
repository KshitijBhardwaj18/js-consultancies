import React from "react";
import scene1 from '@/public/assets/scene1.jpg'
import Image from "next/image";

const Popup = ({ Lpointers, rtext, rimage }) => {
  return (
    <div className="popup h-52 w-auto rounded-3xl flex p-3 backdrop-blur-sm bg-opacity-80 ">
      <div className="left flex flex-col gap-3 ">

        <div className="pointer">
        <h1 className="header font-sans2 text-sm">Analysis of companies</h1>
        <h2 className="font-sans  text-gray-400 text-xs">Strategic alignment for sustainable success</h2>
        </div>

        <div className="pointer">
        <h1 className="header font-sans2 text-sm">Analysis of companies</h1>
        <h2 className="font-sans  text-gray-400 text-xs">Strategic alignment for sustainable success</h2>
        </div>

        <div className="pointer">
        <h1 className="header font-sans2 text-sm">Analysis of companies</h1>
        <h2 className="font-sans  text-gray-400 text-xs">Strategic alignment for sustainable success</h2>
        </div>


    
      </div>

      <div className="left flex flex-col gap-3 ">
        <div className="up">Strategic alignment for sustainable success</div>

        <div className="down">
        <Image src={scene1} className="image  h-40" alt="banner"/>
        </div>
      </div>
    </div>
  );
};

export default Popup;
