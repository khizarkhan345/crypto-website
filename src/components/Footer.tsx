import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-10 justify-items-center gap-y-[25px] mt-[70px] pb-[5px] mx-[10px]">
      <div className="md:col-span-1 order-2 md:order-1 ">
        <p className="text-[22px] uppercase text-[#fff]">crypto</p>
      </div>
      <div className="md:col-span-2 order-3 md:order-2">
        <p className="text-[16px] uppercase font-semibold text-[#fff]">
          crypto
        </p>
        <div className="flex flex-col justify-start mt-[10px]">
          <a href="/" className="text-[16px] text-[#fff] hover:text-darkWhite">
            Home
          </a>
          <a href="/" className="text-[16px] text-[#fff] hover:text-darkWhite">
            About
          </a>
          <a href="/" className="text-[16px] text-[#fff] hover:text-darkWhite">
            Buy NFTs
          </a>
          <a href="/" className="text-[16px] text-[#fff] hover:text-darkWhite">
            Sell NFTs
          </a>
        </div>
      </div>
      <div className="md:col-span-2 order-4 md:order-3">
        <div>
          <p className="text-[16px] font-semibold text-[#fff]">Market</p>
          <div className="flex flex-col justify-start mt-[10px]">
            <a
              href="/"
              className="text-[16px] text-[#fff] hover:text-darkWhite"
            >
              Browse NFTs
            </a>
            <a
              href="/"
              className="text-[16px] text-[#fff] hover:text-darkWhite"
            >
              Buy NFTs
            </a>
            <a
              href="/"
              className="text-[16px] text-[#fff] hover:text-darkWhite"
            >
              Sell NFTs
            </a>
          </div>
        </div>
      </div>
      <div className="md:col-span-2 order-5 md:order-4">
        <div>
          <p className="text-[16px] uppercase font-semibold text-[#fff]">
            Contact
          </p>
          <div className="flex flex-col justify-start mt-[10px]">
            <a
              href="/"
              className="text-[16px] text-[#fff] hover:text-darkWhite"
            >
              Email
            </a>
            <a
              href="/"
              className="text-[16px] text-[#fff] hover:text-darkWhite"
            >
              LinkedIn
            </a>
            <a
              href="/"
              className="text-[16px] text-[#fff] hover:text-darkWhite"
            >
              Instagram
            </a>
            <a
              href="/"
              className="text-[16px] text-[#fff]  hover:text-darkWhite"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
      <div className="col-span-1 sm:col-span-2 w-[350px] md:w-[265px] lg:w-[300px] md:col-span-3 order-1 md:order-5 ">
        <h3 className="text-[22px] font-semibold text-[#fff] mb-[10px]">
          join our newsletter
        </h3>
        <div className="flex flex-row relative mb-[20px]">
          <input
            type="text"
            placeholder="Email Address"
            className="w-[345px] h-[53px] bg-[#0C0C41] pl-[10px] rounded-full text-offWhite"
          />
          <button className=" w-[130px] md:w-[100px] lg:w-[130px] text-offWhite text-center bg-light-blue px-2 py-4 rounded-full absolute right-0 hover:bg-[#A9A8FF]">
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
