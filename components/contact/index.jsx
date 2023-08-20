"use client"

import react from "react";
import { OutlinedInput } from "@mui/material";

const Contact = () => {
  return (
    <div className="p-7">
      <div className="container bg-black rounded-3xl mx-auto   p-5 m-50   ">
        <div className="box p-10 flex flex-col gap-3">
          <h1 className="heading font-sans text-4xl text-white mx-auto ">
            Get in touch with us
          </h1>
          <h1 className="heading font-sans text-xl text-white mx-auto ">
            Drop us your details below and we’ll reach out within the next 24h
          </h1>

          <div className="text-fields flex flex-col gap-3 mt-10">
            <div className="md:flex md:flex-row     md:gap-3 gap-4">
              <OutlinedInput
                className="input bg-white rounded-xl text-blue mb-3 md:mb-0 placeholder:text-white p-2 placeholder:capitalize "
                placeholder="First Name"
                fullWidth
              />
              <OutlinedInput
                className="input bg-white rounded-xl text-blue   placeholder:text-white p-2 placeholder:capitalize "
                placeholder="Last Name"
                fullWidth
              />
            </div>
            <OutlinedInput
              className="input bg-white rounded-xl text-blue placeholder:text-white placeholder:capitalize p-2 "
              placeholder="Email"
            />
            <OutlinedInput
              className="input bg-white rounded-xl text-blue placeholder:text-white placeholder:capitalize p-2 "
              placeholder="Address"
            />
            <OutlinedInput
              className="input bg-white rounded-xl text-blue placeholder:text-white placeholder:capitalize p-2 "
              placeholder="First Name"
            />
          </div>

          <div className="button">
            <div className="button-contact   bg-white p-5 text-white  rounded-full px-10 text-center">
              <a
                href=""
                className="button-contact-text text-black mx-2 p-2 font-sans"
              >
                Contact{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
