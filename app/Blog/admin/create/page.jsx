'use client'

import React, { useState } from "react";

import Nav from "@/components/nav";
import { OutlinedInput } from "@mui/material";

const Create = () => {
  const [header, setHeader] = useState("");
  const [description, setDescription] = useState("");

  const handleHeaderChange = (event) => {
    setHeader(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newBlog = { header, description };
    console.log(newBlog);

    try {
      const response = await fetch("https://js-consultancy.onrender.com/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        
        body: JSON.stringify(newBlog),
      });

      if (response.ok) {
        console.log("Blog created successfully");
        // Optionally, you can reset the input fields here
        setHeader("");
        setDescription("");
      } else {
        console.error("Error creating blog");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  return (
    <div>
      <Nav />
      <div className="p-10">
        <h1 className="heading font-sans text-6xl p-30">Create Blog</h1>
      </div>

      <div className="p-7">
        <div className="container bg-black rounded-3xl mx-auto   p-5 m-50   ">
          <div className="box p-10 flex flex-col gap-3">
            <h1 className="heading font-sans text-4xl text-white mx-auto ">
              Push Blog
            </h1>
            <h1 className="heading font-sans text-xl text-white mx-auto ">
              Only for admins
            </h1>

            <form>
              <div className="text-fields flex flex-col gap-3 mt-10">
                <OutlinedInput
                  className="input bg-white rounded-xl text-blue placeholder:text-white placeholder:capitalize p-2 "
                  label="Outlined"
                  placeholder="Heading"
                  id="header"
                  value={header}
                  onChange={handleHeaderChange}
                  required
                />
                <OutlinedInput
                  className="input bg-white rounded-xl text-blue fontsans2 placeholder:text-white placeholder:capitalize  p-2 h-96 text-2xl text-center"
                  label="Text"
                  multiline="true"
                  placeholder="Description"
                  id="description"
                  value={description}
                  onChange={handleDescriptionChange}
                  required
                />
                
              </div>

              <div className="button mt-5">
                <div className="button-contact   bg-white p-5 text-white  rounded-full px-10 text-center">
                  <button
                  type="submit"
                  onClick={handleSubmit}
                    href=""
                    className="button-contact-text text-black mx-2 p-2 font-sans"
                  >
                    Publish{" "}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
