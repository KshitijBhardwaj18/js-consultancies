"use client"


import React from 'react'
import Image from 'next/image'
import Nav from "@/components/nav/index.jsx"
import Hero from "@/components/hero/index.jsx"
import Solution from '@/components/solution/index.jsx'
import Contact from '@/components/contact'
import Feature from "@/components/features/index.jsx"
import About from "@/components/about/index.jsx"
import Sub from '@/components/sub/index.jsx'
import Footer from '@/components/footer/Footer.jsx'
import Map from '@/components/map/index.jsx'

import Strategic from '@/components/strategic/strategic'
import banner2 from "@/public/assets/scene2.jpg"



const Home = () =>  {
  return (
    <div className=''>
      <Nav />
      
      <Hero />
      <Solution/>
      
      
      <Feature/>
      
      <About/>
      {/* <Sub/> */}
      <Contact />
      {/* <Map/> */}
      <Footer/>
    </div>
  )
}

export default Home;
