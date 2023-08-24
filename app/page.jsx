"use client";

import React from "react";
import Image from "next/image";
import Nav from "@/components/nav/index.jsx";
import Hero from "@/components/hero/index2.jsx";
import Solution from "@/components/solution/index.jsx";
import Contact from "@/components/contact";
import Feature from "@/components/features/index.jsx";
import About from "@/components/about/index.jsx";
import Sub from "@/components/sub/index.jsx";
import Footer from "@/components/footer/Footer.jsx";
import Map from "@/components/map/index.jsx";

import Strategic from "@/components/strategic/strategic";
import banner2 from "@/public/assets/scene2.jpg";
import Quality from "@/components/quality/quality";
import Process from "@/components/process/process";
import Training from "@/components/training/training";
import ISO from "@/components/ISO/ISO";
import { Iso } from "@mui/icons-material";
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton } from '@mui/base/MenuButton';
import { MenuItem, menuItemClasses } from '@mui/base/MenuItem';
import Popup from "@/components/popup/popup";

const Home = () => {
  return (
    <div className="">
      {/* <Nav className="relative backdrop-blur blur-md" /> */}

      <Hero className="relative z-50" />
      
      <Solution />

      <Feature />

      <Strategic />
      <Quality />
      <Process />
      <Training />
      <ISO />

      <About />
      {/* <Sub/> */}
      <Contact />
      {/* <Map/> */}
      <Footer />
    </div>
  );
};

export default Home;
