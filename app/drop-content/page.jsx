"use client";

import { Diversity1, ExpandLess } from "@mui/icons-material";
import React, { useState } from "react";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Drop = () => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div>
      {showContent && (
        <div className="flex felx-row gap-1">
          <div className="m-10">
            <div
              className="dropIcon  rounded-full   border-2 border-zinc-200 hover:bg-orange-200 bg-white p-4 "
              onClick={() => setShowContent(!showContent)}
            >
              <ExpandMoreIcon className="" />
            </div>
          </div>
          <div className="font-sans text-black text-xl text-center my-auto">
            Analysis of Companies: Strategic alignment for sustainable success
          </div>
        </div>
      )}

      {!showContent && <div className="bg-[#faf4f4ed] flex flex-col rounded-3xl   border-2 border-zinc-200 animate-fadeInSlideDownFromTop ">
        <div className="header">
          <div className="flex felx-row gap-1">
            <div className="m-10">
              <div
                className="dropIcon  rounded-full   border-2 border-zinc-200 bg-white p-4 "
                onClick={() => setShowContent(!showContent)}
              >
                <ExpandLess className="" />
              </div>
            </div>
            <div className="font-sans text-black text-xl text-center my-auto">
              Analysis of Companies: Strategic alignment for sustainable success
            </div>
          </div>
        </div>

        <div className="content font-sans text-xl px-10 pb-10">
        A stable foundation is the basis for any successful structure. The
            same applies to businesses: a thorough understanding of one s own
            structures, strengths, and weaknesses forms the foundation for
            sustainable business success. With our business analysis, we offer
            you precisely this solid foundation—a clear and precise view of your
            company that allows you to act with certainty and foresight.
        </div>
      </div>}
    </div>
  );
};

export default Drop;
