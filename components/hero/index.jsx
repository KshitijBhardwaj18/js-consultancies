"use client";
import React from "react";

import hero from "@/public/assets/hero.svg";
import Image from "next/image";
import banner2 from "@/public/assets/scene2.jpg"

const Hero = () => {
  return (
    <div className="hero  flex flex-col-reverse items-center   mt-1 mx-auto  space-y-0 md:space-y-0 md:flex-row justify-between">
      
      <div className="left flex flex-col space-y-12 md:w-1/2 md:pl-50 ">
        <h1 className="max-w-md font-sans text-5xl font-bold text-center md:text-7xl md:text-left  reveal-text md:pl-20  md:max-w-7xl md:text-10xl ">
          Sternberg Consultancy
        </h1>

        <div>
          <p class="max-w-sm mx-auto text-center md:mx-0 text-darkGrayishBlue md:text-left md:pl-20">
            Sternbergs consultancy is solution to every business problem you are
            tackiling with. We are here to provide you customized solutions for
            your need.
          </p>
        </div>

        <div className="button-contact   bg-black p-5 text-white  rounded-full px-10 w-36 md:ml-20 mx-auto ">
          <a href="" className="button-contact-text text-white font-sans  ">
            Contact
          </a>
        </div>
      </div>

      <div className="right p-4 xl:mr-10">
        <Image src={hero} alt="image" className="image" />
      </div>
    </div>
  );
};

export default Hero;
