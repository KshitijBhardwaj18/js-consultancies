"use client"

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function RandomNumberGenerator() {
    const min = 1;
    const max = 6;
    const randomNumber = getRandomNumber(min, max);
  
    return randomNumber;
  }

  const randomNumber = RandomNumberGenerator();

import React from 'react';
import scene1 from "@/public/assets/scene1.jpg"
import scene2 from "@/public/assets/scene2.jpg"
import scene3 from "@/public/assets/scene3.jpg"
import scene4 from "@/public/assets/scene4.jpg"
import scene5 from "@/public/assets/scene5.jpg"
import Image from 'next/image';




const Post = ({ post }) => {

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      
      function RandomNumberGenerator() {
        const min = 1;
        const max = 6;
        const randomNumber = getRandomNumber(min, max);
      
        return <div>Random Number: {randomNumber}</div>;
      }
    return (
      <div
        className={`rounded-xl mt-10 overflow-hidden bg-[#e6ffff] border  shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${post._id}`}
      >
        
          <Image
            src={
              scene4
            }
            alt="title"
            className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
          />
        
        <div className="p-5">
          
            <h2 className="font-roboto font-bold text-dark-soft font-sans2 text-2xl lg:text-[28px]">
              {post.header}
            </h2>
            <p className="text-dark-light mt-3 text-sm md:text-lg">
              {post.description}
            </p>
          
          {/* <div className="flex justify-between flex-nowrap items-center mt-6">
            <div className="flex items-center gap-x-2 md:gap-x-2.5">
              <img
                src={
                  post.user.avatar
                    ? stables.UPLOAD_FOLDER_BASE_URL + post.user.avatar
                    : images.userImage
                }
                alt="post profile"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full"
              />
              <div className="flex flex-col">
                <h4 className="font-bold italic text-dark-soft text-sm md:text-base">
                  {post.user.name}
                </h4>
                <div className="flex items-center gap-x-2">
                  <span
                    className={`${
                      post.user.verified ? "bg-[#36B37E]" : "bg-red-500"
                    } w-fit bg-opacity-20 p-1.5 rounded-full`}
                  >
                    {post.user.verified ? (
                      <BsCheckLg className="w-1.5 h-1.5 text-[#36B37E]" />
                    ) : (
                      <AiOutlineClose className="w-1.5 h-1.5 text-red-500" />
                    )}
                  </span>
                  <span className="italic text-dark-light text-xs md:text-sm">
                    {post.user.verified ? "Verified" : "Unverified"} writer
                  </span>
                </div>
              </div>
            </div>
            <span className="font-bold text-dark-light italic text-sm md:text-base">
              {new Date(post.createdAt).getDate()}{" "}
              {new Date(post.createdAt).toLocaleString("default", {
                month: "long",
              })}
            </span>
          </div> */}
        </div>
      </div>
    );
  };
  
  export default Post;


