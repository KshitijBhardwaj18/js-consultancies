"use client";

import { Diversity1, ExpandLess } from "@mui/icons-material";
import React, { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Drop = (props) => {
  const [showContent, setShowContent] = useState(true);
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
          <div className="font-sans2 text-black text-2xl text-center my-auto">
            {props.head}
          </div>
        </div>
      )}

      {!showContent && (
        <div className="bg-[#faf4f4ed] flex flex-col rounded-3xl animate-fadeIn  border-2 border-zinc-200             ">
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
              <div className="font-sans2  text-black text-3xl text-center my-auto">
                {props.head}
              </div>
            </div>
          
          {props.text}

          </div>
        </div>
      )}
    </div>
  );
};

export default Drop;
