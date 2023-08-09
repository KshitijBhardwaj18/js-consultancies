import React from "react";
import Image from "next/image";
import feature1 from "@/public/assets/feature1.png";

const Feature = () => {
  return (
    <div className="box flex flex-col gap-3 text-center mt-10">
      <h1 className="heading mx-auto text-5xl font-sans ">
        Beyond Consultancy, here what you get
      </h1>
      <h3 className="heading text font-sans">
        The tools you need to turbocharge your operation
      </h3>

      <div className="cards flex flex-col  pt-0 sm:pt-0  sm:p-20 lg:pt-0 lg:p-40 lg:grid lg:grid-cols-2 gap-2">
      <div className="card1 flex flex-col md:flex-row gap-4 p-10">
          <Image className="md:h-40 md:w-auto " src={feature1} alt="feature1" />

          <div className="flex flex-col">
            <h4 className="head text-3xl font-sans text-left">Tips</h4>
            <h6 className="subtext text-co text-left  ">
              Attract, reward and retain staff thanks to sunday tips –
              guaranteed to be higher than your current solution.
            </h6>
          </div>
        </div>

        <div className="card1 flex flex-col md:flex-row gap-4 p-10">
          <Image className="md:h-40 md:w-auto " src={feature1} alt="feature1" />

          <div className="flex flex-col">
            <h4 className="head text-3xl font-sans text-left">Tips</h4>
            <h6 className="subtext text-co text-left  ">
              Attract, reward and retain staff thanks to sunday tips –
              guaranteed to be higher than your current solution.
            </h6>
          </div>
        </div>

        <div className="card1 flex flex-col md:flex-row gap-4 p-10">
          <Image className="md:h-40 md:w-auto " src={feature1} alt="feature1" />

          <div className="flex flex-col">
            <h4 className="head text-3xl font-sans text-left">Tips</h4>
            <h6 className="subtext text-co text-left  ">
              Attract, reward and retain staff thanks to sunday tips –
              guaranteed to be higher than your current solution.
            </h6>
          </div>
        </div>

        <div className="card1 flex flex-col md:flex-row gap-4 p-10">
          <Image className="md:h-40 md:w-auto " src={feature1} alt="feature1" />

          <div className="flex flex-col">
            <h4 className="head text-3xl font-sans text-left">Tips</h4>
            <h6 className="subtext text-co text-left  ">
              Attract, reward and retain staff thanks to sunday tips –
              guaranteed to be higher than your current solution.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
