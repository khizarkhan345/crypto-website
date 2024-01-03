import React from "react";
import acces from "../images/acces.png";

const Access = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  sm:flex-row sm:justify-center sm:items-center sm:mx-[40px] md:mx-[70px] xl:mx-[180px] pb-10">
      <div className="flex-1">
        <div className="flex flex-col justify-center items-center">
          <p className="flex text-[20px] text-center font-['Roboto'] uppercase text-offWhite mt-[30px] sm:hidden">
            24/7 access
          </p>
          <img
            src={acces}
            alt="access"
            className="flex justify-center items-center"
          />
        </div>
      </div>
      <div className="flex flex-col items-center sm:items-start mt-[40px]">
        <p className="hidden sm:inline sm:text-[20px] sm:text-left sm:font-['Roboto'] sm:uppercase sm:text-offWhite">
          24/7 access
        </p>
        <h2 className="text-[38px] mx-[13px] sm:mx-[0] md:text-[42px] lg:text-[45px] font-bold text-offWhite sm:w-[95%] text-center sm:text-left">
          Sell Your NFTs From Any Where Any Time
        </h2>
        <p className="text-[20px] mx-[13px] sm:mx-[0] font-['Roboto'] text-offWhite sm:w-[80%] md:w-[380px]  text-center sm:text-left">
          With our easy-to-use platform, you can buy or sell assets from
          anywhere in the world, at any time.
        </p>
        <button className="w-[246px] sm:w-[140px] md:w-[246px] text-offWhite text-center bg-light-blue px-2 py-4 rounded-full mt-[20px] hover:bg-[#A9A8FF]">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Access;
