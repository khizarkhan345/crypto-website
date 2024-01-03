import React from "react";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";
import image5 from "../images/image5.png";

const Logos = () => {
  return (
    <div className="mt-[40px]">
      <p className="text-[20px] text-center font-['Roboto'] bold uppercase text-offWhite mb-[20px]">
        featured on
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-0 mx-[40px] md:mx-[70px] xl:mx-[180px]">
        <div className="bg-[#28235D] flex items-center justify-center  h-[100px]">
          <img
            src={image4}
            alt="logo1"
            className="sm:w-[140px] md:w-[172px] h-[60px]"
          />
        </div>
        <div className="bg-[#28235D] flex items-center justify-center h-[100px]">
          <img
            src={image5}
            alt="logo2"
            className="sm:w-[110px] md:w-[154px] h-[23px]"
          />
        </div>
        <div className="bg-[#28235D] flex items-center justify-center  h-[100px] ">
          <img
            src={image3}
            alt="logo3"
            className="sm:w-[40px] md:w-[62px] h-[33px]"
          />
        </div>
        <div className="bg-[#28235D] flex items-center justify-center  h-[100px]">
          <img
            src={image2}
            alt="logo4"
            className="sm:w-[80] md:w-[104px] h-[25px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Logos;
