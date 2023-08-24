"use client";
import React from "react";

import hero from "@/public/assets/hero.svg";
import Image from "next/image";
import banner2 from "@/public/assets/scene2.jpg";
import { useState } from "react";

import logo from "@/public/assets/logo1.png";

import { Drawer, Box, Button, Typography, IconButton } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import Popup from "@/components/popup/popup.jsx";
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton } from '@mui/base/MenuButton';
import { MenuItem, menuItemClasses } from '@mui/base/MenuItem';


const Hero = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const[left,setLeft] = useState("");
  const[Top,setTop] = useState("");
  



  return (
    <>
    <div>
      <nav className="navebar backdrop-filter-none  rounded-full m-10  border-2 border-zinc-200 bg-white p-3 mx-10  backdrop-blur-sm bg-opacity-80">
        <div className=" mx-auto flex justify-between items-center">
          <div className="logo">
            <a href="/">
              <Image
                className="logo-img h-10 w-auto p-1"
                src={logo}
                alt="logo"
              />
            </a>
          </div>

          <div className="links  gap-5 font-sans2 hidden   xl:flex ">
            <a
              href="/strategy"
              classN0ame="links-item font-sans  "
              onMouseEnter={() =>{ setIsPopUpOpen(true);
              setLeft("left-36");
            setTop("top-36")}
            }
              onMouseOut={() => {setIsPopUpOpen(false)
              }}
              
              
            >
              Strategic Consulting
            </a>

            <a href="/quality" className="links-item font-sans " onMouseEnter={() =>{ setIsPopUpOpen(true);
              setLeft("left-[25rem]");
            setTop("top-36")}
            }
              onMouseOut={() => {setIsPopUpOpen(false)
              }}>
            Quality Management
            </a>

            <a href="/process" className="links-item font-sans  "  onMouseEnter={() =>{ setIsPopUpOpen(true);
              setLeft("left-[30rem]");
            setTop("top-36")}
            }
              onMouseOut={() => {setIsPopUpOpen(false)
              }}>
              Process Management
            </a>

            <a href="/ISO" className="links-item font-sans ">
              ISO Certification
            </a>

            <a href="/Training" className="links-item font-sans ">
              Training
            </a>

            <a href="/Blog" className="links-item font-sans ">
              Blog
            </a>
          </div>

          <div className="button hidden   xl:flex ">
            <div className="button-contact   bg-black p-5 text-white  rounded-full px-10">
              <a
                href=""
                className="button-contact-text text-white mx-2 p-2 font-sans"
              >
                Contact{" "}
              </a>
            </div>
          </div>

          {/* <div className="drop-down rounded-full border border-solid border-zinc-200 p-2 xl:hidden  ">
        
    


          
        </div> */}

          <div className="xl:hidden">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
              onClick={() => setIsDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
            >
              <Box p={2} width="400px" textAlign="center" role="presentation">
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="logo"
                  onClick={() => setIsDrawerOpen(false)}
                  className="sm:hidden"
                >
                  <MenuIcon />
                </IconButton>
                <div className="card rounded-xl m-10  border-2 border-zinc-200 bg-white shadow-sm p-7">
                  <a href="/strategy" className="font-sans">
                    Strategic Consulting
                  </a>
                </div>
                <div className="card rounded-xl m-10  border-2 border-zinc-200 bg-white shadow-sm p-7">
                  <a href="/quality" className="font-sans">
                    Quality Management
                  </a>
                </div>
                <div className="card rounded-xl m-10  border-2 border-zinc-200 bg-white shadow-sm p-7">
                  <a href="/process" className="font-sans">
                    Process Management
                  </a>
                </div>
                <div className="card rounded-xl m-10  border-2 border-zinc-200 bg-white shadow-sm p-7">
                  <a href="/ISO" className="font-sans">
                    ISO Certification
                  </a>
                </div>
                <div className="card rounded-xl m-10  border-2 border-zinc-200 bg-white shadow-sm p-7">
                  <a href="/Training" className="font-sans">
                    Training
                  </a>
                </div>
                <div className="card rounded-xl m-10  border-2 border-zinc-200 bg-white shadow-sm p-7">
                  <a href="/Blog" className="font-sans">
                    Blog
                  </a>
                </div>
                <div className="card rounded-xl m-10  border-2 border-zinc-200 bg-white shadow-sm p-7">
                  <a href="/about" className="font-sans">
                    About
                  </a>
                </div>
              </Box>
            </Drawer>
          </div>
        </div>
      </nav>

      

      <div className="hero  flex flex-col-reverse items-center   mt-1 mx-auto  space-y-0 md:space-y-0 md:flex-row justify-between">
        <div className="left flex flex-col space-y-12 md:w-1/2 md:pl-50 ">
          <h1 className="max-w-md font-sans text-5xl font-bold text-center md:text-7xl md:text-left  reveal-text md:pl-20  md:max-w-7xl md:text-10xl ">
            Sternberg Consultancy
          </h1>

          <div>
            <p class="max-w-sm mx-auto text-center md:mx-0 text-darkGrayishBlue md:text-left md:pl-20">
              Sternbergs consultancy is solution to every business problem you
              are tackiling with. We are here to provide you customized
              solutions for your need.
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
      {isPopUpOpen && <Popup top={Top} left={left}  
      className="" onMouseEnter={() => setIsPopUpOpen(true)}  />}
    </div>
    </>
  );
};

export default Hero;

