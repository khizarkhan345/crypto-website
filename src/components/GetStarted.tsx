import React from "react";

const GetStarted = () => {
  return (
    <div className="flex justify-center mt-[70px] ">
      <div className="justify-center sm:mx-[40px] md:mx-[70px] xl:mx-[180px] w-[90%] sm:w-[85%] md:w-[80%] lg:w-[80%] h-[350px] sm:h-[402px] bg-[#8E8DDB] mx-auto sm:mx-[40px] md:mx-[70px] xl:mx-[180px]">
        <p className="text-[20px] text-center font-['Roboto'] uppercase text-[#000000] mt-[40px] sm:mt-[80px]">
          are you ready?
        </p>
        <div className="justify-center items-center">
          <h2 className="justify-center items-center text-center text-[38px] mx-[13px] sm:mx-[0] md:text-[42px] lg:text-[45px] text-center font-bold text-offWhite px-[10px] sm:px-[100px] md:px-[180px] lg:px-[250px]">
            Be A Part Of The Next Big Thing
          </h2>
        </div>
        <button className="justify-center items-center w-[246px] sm:w-[140px] md:w-[246px] text-offWhite text-center bg-[#000000] px-2 py-4 rounded-full mt-[20px] hover:bg-[#333333]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
