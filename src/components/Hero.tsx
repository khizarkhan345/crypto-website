import React from "react";
import image1 from "../images/image1.png";
import "../index.css";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:mx-[40px] md:mx-[70px] xl:mx-[180px] pb-10">
      <div className="flex-1 order-2 sm:order-1 flex-col sm:w-1/2">
        <span className="flex sm:w-[95%] md:w-[394px] justift-center items-center sm:justify-start sm:items-start mt-[15px]">
          <h1 className="text-center sm:text-left text-[50px] md:text-[67px] text-offWhite leading-[67px] mx-[2px] sm:mx-0">
            Discover And Collect Rare NFTs
          </h1>
        </span>
        <span className="flex sm:w-[80%] md:w-[373px] justify-start items-start mt-[30px]">
          <p className="text-center sm:text-left text-[20px] mx-[5px] sm:mx-[0] text-offWhite">
            The most secure marketplace for buying and selling crypto assets.
          </p>
        </span>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-start sm:items-start mt-5">
          <button className="w-[246px] sm:w-[140px] md:w-[246px] text-offWhite text-center bg-light-blue px-2 py-4 rounded-full hover:bg-[#A9A8FF]">
            BUY NFTS
          </button>
          <button className="w-[246px] sm:w-[140px] md:w-[246px] text-offWhite text-center mt-[20px] sm:mt-0 sm:ml-[25px] px-2 py-4 rounded-full border-solid border border-[#88d0d1] hover:bg-[#8E8DDB] hover:border-0">
            SELL NFTS
          </button>
        </div>
      </div>

      <div className="flex-1 justify-center items-center order-1 sm:order-2 ml-[20px] sm:w-1/2">
        <div className="flex justify-center items-center">
          <img
            src={image1}
            alt="main"
            className="w-[455px] h-[440px] max-w-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
