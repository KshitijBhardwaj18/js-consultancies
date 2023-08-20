import React from "react";
import Image from "next/image";
import feature1 from "@/public/assets/feature1.png";
import feature2 from "@/public/assets/feature2.png";
import feature3 from "@/public/assets/feature3.png";
import feature4 from "@/public/assets/feature4.png";

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
            <h4 className="head text-3xl font-sans text-left">
              Strategic Partnership for Growth:
            </h4>
            <h6 className="subtext text-co text-left  ">
              Unlock your business&apos;s true potential with our consultancy
              services that extend beyond traditional boundaries. We forge
              strategic partnerships that drive growth, leveraging your
              strengths and our expertise to create lasting success.
            </h6>
          </div>
        </div>

        <div className="card1 flex flex-col md:flex-row gap-4 p-10">
          <Image className="md:h-40 md:w-auto " src={feature2} alt="feature1" />

          <div className="flex flex-col">
            <h4 className="head text-3xl font-sans text-left">
              {" "}
              Innovative Problem Solving:
            </h4>
            <h6 className="subtext text-co text-left  ">
              Experience consultancy redefined. Beyond the ordinary, we thrive
              on solving complex challenges through innovative thinking. Our
              experts craft tailor-made solutions that pave the way for your
              business to outshine competitors.
            </h6>
          </div>
        </div>

        <div className="card1 flex flex-col md:flex-row gap-4 p-10">
          <Image className="md:h-40 md:w-auto " src={feature3} alt="feature1" />

          <div className="flex flex-col">
            <h4 className="head text-3xl font-sans text-left">
              Holistic Organizational Transformation:
            </h4>
            <h6 className="subtext text-co text-left  ">
              Embark on a journey of holistic transformation. Our consultancy
              goes beyond the surface to revitalize your entire organization. We
              instill a culture of innovation, efficiency, and adaptability,
              ensuring you&apos;re ready for tomorrow&apos;s challenges.
            </h6>
          </div>
        </div>

        <div className="card1 flex flex-col md:flex-row gap-4 p-10">
          <Image className="md:h-40 md:w-auto " src={feature4} alt="feature1" />

          <div className="flex flex-col">
            <h4 className="head text-3xl font-sans text-left">
              Tech-Driven Future-Proofing:
            </h4>
            <h6 className="subtext text-co text-left  ">
              Stay ahead of the curve in a rapidly evolving digital landscape.
              Beyond consultancy, we offer tech-driven insights and strategies
              that future-proof your business. Embrace cutting-edge technologies
              confidently with our expert guidance.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
