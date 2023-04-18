import React from "react";
import { AcademicCapIcon, UserIcon } from "@heroicons/react/24/solid";

const Cards = () => {
  return (
    <div className="flex items-center mt-4 justify-between m-auto w-[60%] md:max-w-[90%]  md:gap-2 sm:max-w-[100%] xs:w-[100%] xs:flex-col xs:gap-2 z-[999px] mb-4">
      <div className="bg-white gap-[1em] shadow-bs rounded-3xl flex items-center px-[2.5em] py-[1.5em] cursor-pointer xs:w-[90%]">
        <span class="material-icons">person</span>

        <p>Expert Concellors</p>
      </div>
      <div className="bg-white gap-[1em] shadow-bs rounded-3xl flex items-center px-[2.5em] py-[1.5em] cursor-pointer xs:w-[90%]">
        {/* <AcademicCapIcon className="h-6 w-6 text-blue-500" /> */}
        <span class="material-icons">psychology_alt</span>
        <p>IQ Test</p>
      </div>
      <div className="bg-white gap-[1em] shadow-bs rounded-3xl flex items-center px-[2.5em] py-[1.5em]  cursor-pointer xs:w-[90%]">
        {/* <AcademicCapIcon className="h-6 w-6 text-blue-500" /> */}
        <span class="material-icons">schedule</span>
        <p>Life Time Access</p>
      </div>
    </div>
  );
};

export default Cards;
