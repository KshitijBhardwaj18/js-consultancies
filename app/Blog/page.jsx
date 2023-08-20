"use client"

import React, { useState, useEffect } from 'react';

import Footer from "@/components/footer/Footer";

import Nav from "@/components/nav/index";
import Banner from "@/components/banner/index";
import banner2 from "@/public/assets/scene2.jpg";
import Image from "next/image";
import Post from "@/components/blog/post";



const Blog = () => {

    const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch blog posts from the API
    fetch('https://js-consultancy.onrender.com/api/blogs/g')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

    
  
  return (
    <>
      <Nav />
      <Image src={banner2} className="image object-cover h-40" alt="banner" />

      <div className="flex flex-col gap-9 p-10">
        <div className="header">
          <h1 className="heading font-sans text-6xl p-30">Blog</h1>
          <h3 className="sub-heading  font-sans2 text-3xl pt-5 ">
            Elevate Your Insights: Exploring the Expertise of Our Consultancy
            Blog
          </h3>
        </div>

        <div>
      
      {posts.map(post => (
        <Post key={post._id} post={post} />
      ))}
    </div>

      </div>
      <Footer/>
    </>
  );
};

export default Blog;
