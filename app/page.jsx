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



const Home = () =>  {
  return (
    <div>
      <Nav />
      <Hero />
      <Solution/>
      <Contact />
      <Feature/>
      <About/>
      <Sub/>
      {/* <Map/> */}
      <Footer/>
    </div>
  )
}

export default Home;
