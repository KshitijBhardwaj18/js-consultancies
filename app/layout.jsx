"use client"

import "@/styles/global.css";

import { gsap } from "gsap";
import SplitType from 'split-type'

import Script from "next/script";

export const metadata = {
  title: "js-consultancy",
  description: "Consultancy Services",
};

const RootLayout = ({ children }) => {

  
  return (
    <html lang="en">
      
      
      <body>
        {/* <div className="main">
          <div className="bg-white"></div>
  </div> */}

        <main className="app">
          {children}
        </main>
        
      </body>
    </html>
  );
};

export default RootLayout;
