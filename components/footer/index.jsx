import React from "react";
import Image from "next/image";
import logo from "@/public/assets/logo1.png";

const Footer = () => {
  return (
    <div className="container max-w-max bg-slate-200">
      <div className="collumns flex flex-col md:flex-row">
        <div className="logo-row flex flex-col">
          <Image src={logo} alt="logo" className="logo " height={10}  width={10}/>
          <h6 className="text-2xl text-black">
            At sternbergs we strive for custumer satisfaction.Quality and
            efficient service is our aim. We work closely with our clients to
            get your business to the next all time hig{" "}
          </h6>
        </div>

        <div className="contact-row  flex flex-col"></div>
      </div>
    </div>
  );
};

export default Footer;
