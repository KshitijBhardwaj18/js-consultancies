import React from "react";
import hero from "@/public/assets/hero.svg";

import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero container flex flex-col-reverse items-center   mt-1 mx-auto  space-y-0 md:space-y-0 md:flex-row">
      <div className="left flex flex-col space-y-12 md:w-1/2 md:pl-20">
        <h1 className="max-w-md text-5xl font-bold text-center md:text-7xl md:text-left md:max-w-xl  ">
          We make businesses go viral
        </h1>

        <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
          sternbergs consultancy is solution to every business problem you are
          tackiling with. We are here to provide you customized solutions for
          your need.
        </p>

        <div className="button-contact   bg-black p-5 text-white  rounded-full px-10 w-36 ">
          <a
            href=""
            className="button-contact-text text-white font-sans "
          >
            Contact
          </a>
        </div>
      </div>

      <div className="right p-4">
        <Image src={hero} alt="image"/>
      </div>
    </div>
  );
};

export default Hero;
