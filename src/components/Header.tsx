import React, { useState } from "react";
import Menu from "../images/Menu.png";

const Header = () => {
  const [showNavBar, setShowNavBar] = useState(false);

  const toggleNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  return (
    <div className=" mx-[30px] sm:mx-[40px] md:mx-[70px] xl:mx-[180px] py-[40px] mb-[40px]">
      <div className="flex flex-row justify-between items-center ">
        <div>
          <a
            href="/"
            className="text-offWhite text-[32px] bold uppercase hover:cursor-pointer"
          >
            Crypto
          </a>
        </div>
        <div className="sm:hidden mt-[10px]">
          <button onClick={toggleNavBar}>
            <img src={Menu} alt="Menu" />
          </button>
        </div>
        <div className="hidden sm:justify-center sm:items-center sm:block">
          <a
            href="/"
            className="sm:mr-[50px] md:mr-[60px] lg:mr-[80px] text-offWhite text-[20px] hover:cursor-pointer hover:text-darkWhite"
          >
            about
          </a>
          <a
            href="/"
            className="sm:mr-[50px] md:mr-[60px] lg:mr-[80px] text-offWhite text-[20px] hover:cursor-pointer  hover:text-darkWhite"
          >
            pricing
          </a>
          <a
            href="/"
            className="sm:mr-[50px] md:mr-[60px] lg:mr-[80px] text-offWhite text-[20px] hover:cursor-pointer  hover:text-darkWhite"
          >
            contact
          </a>
          <a
            href="/"
            className="p-[2px] text-offWhite text-[20px] hover:cursor-pointer  hover:text-darkWhite"
          >
            buy nfts
          </a>
        </div>
      </div>
      <div
        className={`flex flex-col justify-center mt-[30px] sm:hidden ${
          showNavBar ? "block" : "hidden"
        }`}
      >
        <a
          href="/"
          className="mb-[30px] text-offWhite text-[20px] hover:cursor-pointer  hover:text-darkWhite"
        >
          about
        </a>
        <a
          href="/"
          className="mb-[30px] text-offWhite text-[20px] hover:cursor-pointer  hover:text-darkWhite"
        >
          pricing
        </a>
        <a
          href="/"
          className="mb-[30px] text-offWhite text-[20px] hover:cursor-pointer  hover:text-darkWhite"
        >
          contact
        </a>
        <a
          href="/"
          className="p-[2px] text-offWhite text-[20px] hover:cursor-pointer  hover:text-darkWhite"
        >
          buy nfts
        </a>
      </div>
    </div>
  );
};

export default Header;
