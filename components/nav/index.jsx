"use client";
import React from "react";
import { useState } from "react";

import logo from "@/public/assets/logo1.png";
import Image from "next/image";

import { Drawer, Box, Button, Typography, IconButton } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import Popup from "@/components/popup/popup.jsx";

const Nav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  return (
    <div>
      <nav className="navebar backdrop-filter-none  rounded-full m-10  border-2 border-zinc-200 bg-white p-3 mx-10 ">
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
              className="links-item font-sans  "
              onMouseEnter={() => setIsPopUpOpen(true)}
              onMouseOut={() => setIsPopUpOpen(false)}
              
            >
              Strategic Consulting
            </a>

            <a href="/quality" className="links-item font-sans ">
              Quality Management
            </a>

            <a href="/process" className="links-item font-sans ">
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

      {isPopUpOpen && <Popup className="absolute   backdrop-blur z-50  " onMouseEnter={() => setIsPopUpOpen(true)}  />}
    </div>
  );
};

export default Nav;
