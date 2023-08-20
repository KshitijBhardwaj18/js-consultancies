import React from "react";

const About = () => {
  return (
    <div className="about m-2 p-5 flex flex-col gap-5 md:flex-row">
      <div className="headings flex flex-col gap-5 text center ">
        <h1 className="heading text-5xl md:text-7xl font-bold font-sans">
          What&apos;s different at Sternberg&apos;s
        </h1>

        <h6 className="subheading text-xl text-co p-2">
          Sternberg&apos;s provide all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital products
        </h6>
      </div>

      <div className="pointers flex flex-col gap-5 ">
        <div className="pointer flex flex-col gap-5 ">
          <div className="pointer-header flex  bg-slate-200 flex-row bg-grey rounded-3xl ">
            <div className="rounded-3xl p-2 text-white bg-black ">01</div>
            <div className="font-bold font-sans p-2">
            Collaborative Approach:
            </div>
          </div>

          <div className="subtext text-co pl-3">
          Content: At our consultancy, collaboration isn&apos;t just a buzzword – it&apos;s a cornerstone of our process. We don&apos;t just advise; we become an extension of your team, working seamlessly to co-create solutions. This approach fosters a deep understanding of your business and ensures our strategies are aligned with your vision.


          </div>
        </div>
      

      <div className="pointer flex flex-col gap-5 ">
        <div className="pointer-header flex flex-row bg-slate-200 rounded-3xl ">
          <div className="rounded-3xl p-2 text-white bg-black ">01</div>
          <div className="font-bold font-sans p-2">
          Agility in Adversity:


          </div>
        </div>

        <div className="subtext text-co pl-3 ">
        Markets change, challenges arise, but our consultancy equips you with the agility to thrive amidst adversity. Our adaptable strategies and contingency planning empower your business to navigate uncertainties and emerge stronger.




        </div>
      </div>

      <div className="pointer flex flex-col gap-5 ">
        <div className="pointer-header flex flex-row bg-slate-200 rounded-3xl ">
          <div className="rounded-3xl p-2 text-white bg-black ">01</div>
          <div className="font-bold font-sans p-2">
          Global Insights, Local Implementation:
          </div>
        </div>

        <div className="subtext text-co pl-3 ">
        Content: Beyond profits, were driven by purpose. Our consultancy integrates sustainability and social responsibility into every solution. From optimizing operations for eco-friendliness to contributing to local communities, we help you make a positive impact while achieving your business goals.




        </div>
      </div>

      <div className="pointer flex flex-col gap-5 ">
        <div className="pointer-header flex flex-row bg-slate-200 rounded-3xl ">
          <div className="rounded-3xl p-2 text-white bg-black ">01</div>
          <div className="font-bold font-sans p-2">
          Data-Driven Precision:

          </div>
        </div>

        <div className="subtext text-co pl-3 ">
        Content: In the era of data, we stand out by harnessing its power with precision. Our analytical prowess transforms raw data into actionable insights, guiding decisions that lead to tangible results. From market trends to customer behavior, we leverage data to steer your success.




        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
