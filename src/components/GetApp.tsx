import React from "react";
import app from "../images/app.png";

const GetApp = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  sm:flex-row sm:justify-center sm:items-center sm:mx-[40px] md:mx-[70px] xl:mx-[180px] pb-10">
      <div className="flex flex-col order-2 sm:order-1 items-center sm:items-start mt-[40px]">
        <p className="hidden sm:inline sm:text-[20px] sm:text-left sm:font-['Roboto'] sm:uppercase sm:text-offWhite">
          get our app
        </p>
        <h1 className="text-[38px] mx-[13px] sm:mx-[0] md:text-[42px] lg:text-[45px] font-bold text-offWhite sm:w-[95%] text-center sm:text-left">
          Browse Nfts From Your Phone
        </h1>
        <p className="text-[20px] mx-[13px] sm:mx-[0] font-['Roboto'] text-offWhite sm:w-[80%] md:w-[380px]  text-center sm:text-left">
          Our Crypto app is the easiest way to keep track of your assets when
          you’re on the go.
        </p>
        <button className="w-[246px] sm:w-[140px] md:w-[246px] text-offWhite text-center bg-light-blue px-2 py-4 rounded-full mt-[20px] hover:bg-[#A9A8FF]">
          Download now
        </button>
      </div>
      <div className="flex flex-col order-1 sm:order-2 justify-center items-center">
        <p className="flex text-[20px] text-center font-['Roboto'] uppercase text-offWhite mt-[30px] sm:hidden">
          get our app
        </p>
        <img src={app} alt="app" className="flex justify-center items-center" />
      </div>
    </div>
  );
};

export default GetApp;
