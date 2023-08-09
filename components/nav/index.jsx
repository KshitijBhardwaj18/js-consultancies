"use client";
import React from "react";

import logo from "@/public/assets/logo1.png";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="navebar  rounded-full m-10 mx-3 border-2 border-zinc-200 bg-white p-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <Image className="logo-img h-10 w-auto p-1" src={logo} alt="logo" />
        </div>

        <div className="links  gap-2 hidden sm:visible sm:flex">
            <a href="" className="links-item font-sans ">Solutions</a>
            <a href="" className="links-item font-sans ">About</a>
            <a href="" className="links-item font-sans ">Services</a>
            
        </div>

        <div className="button">
            <div className="button-contact   bg-black p-5 text-white  rounded-full px-10">
                <a href="" className="button-contact-text text-white mx-2 p-2 font-sans">Contact </a>
            </div>
        </div> 

      </div>
    </nav>
  );
};

export default Nav;
