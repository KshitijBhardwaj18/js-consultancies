import React from "react";
import strategy from "@/public/assets/strategy.png";
import solution2 from "@/public/assets/solution2.png";
import scene1 from "@/public/assets/scene1.jpg"

import Image from "next/image";

const Solution = () => {
  return (
    <div className="solution flex flex-col p-6  mb-20 gap-4 mx-auto ">
      <h1 className=" text-4xl font-sans font-bold text-center mt-10 mx-auto md:text-5xl md:text-left ">
        A full solution to your business needs
      </h1>

      <div className="cards flex flex-col gap-3 mx-auto md:max-w-7xl md:flex-row md:gap-5 md:mx-auto">
      <div className="card p-5 mx-auto">
          <div className="image">
            <Image src={solution2} alt="image" className="image rounded-3xl w-fit" />
          </div>
          <div className="heading text-3xl font-sans2 p-3 text-center ">Strategic Analysis</div>
          <p className="text text-center text-gradient-to-r from-blue-500 ">
            Get your business full consultancy and make your buisness boom. We
            deal in business decks and financial plans{" "}
          </p>
        </div>

        <div className="card p-5 mx-auto">
          <div className="image">
            <Image src={solution2} width={900} height={300} alt="image" className="image rounded-3xl" />
          </div>
          <div className="heading text-3xl font-sans2 p-3 text-center ">Quality Management</div>
          <p className="text text-center text-gradient-to-r from-blue-500 ">
            Get your business full consultancy and make your buisness boom. We
            deal in business decks and financial plans{" "}
          </p>
        </div>

        <div className="card p-5 mx-auto">
          <div className="image">
            <Image src={solution2} alt="image" className="image rounded-3xl" />
          </div>
          <div className="heading text-3xl text-center font-sans2 p-3 ">Process Management</div>
          <p className="text text-center text-gradient-to-r from-blue-500 ">
            Get your business full consultancy and make your buisness boom. We
            deal in business decks and financial plans{" "}
          </p>
        </div>

        <div className="card p-5 mx-auto">
          <div className="image">
            <Image src={solution2} alt="image" className="image rounded-3xl" />
          </div>
          <div className="heading text-3xl text- font-sans2 p-3 text-center">Training</div>
          <p className="text text-gradient-to-r text-center from-blue-500 ">
            Get your business full consultancy and make your buisness boom. We
            deal in business decks and financial plans{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Solution;
