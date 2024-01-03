import React from "react";
import TestimonialImage1 from "../images/TestimonialImage1.png";
// import TestimonialImage2 from "../images/TestimonialImage2.png";

const Testimonial = () => {
  return (
    <div className="mt-[25px] sm:mx-[40px] md:mx-[70px] xl:mx-[180px]">
      <div className="flex flex-col justify-center items-center">
        <p className="text-[20px] text-[#88D0D1] text-center">Testimonials</p>
        <h2 className="text-[35px] mx-[13px] sm:mx-[0] md:text-[42px] lg:text-[45px] mx-[15px] sm:m-0 font-bold text-offWhite sm:w-[468px] text-center">
          Read What Others Have To Say
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-[100px] mt-[100px]">
        <div className="flex flex-col justify-center items-center relative">
          <img
            src={TestimonialImage1}
            alt="testimonial"
            className="absolute left-50 -top-[68px]"
          />
          <div className="w-[344px] sm:w-[220px] md:w-[290px] lg:[344px]  h-[290px] bg-[#0C0C41] px-[10px]">
            <p className="pt-[110px] text-[20px] text-offWhite text-center uppercase">
              Olivia Cole
            </p>
            <p className="sm:text-[80%] md:text-[16px] text-offWhite text-center font-['Roboto']">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ullamcorper scelerisque mi, in malesuada felis malesuada vel.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center relative">
          <img
            src={TestimonialImage1}
            alt="testimonial"
            className="absolute left-50 -top-[68px]"
          />
          <div className="w-[344px] sm:w-[220px] md:w-[290px] lg:[344px] h-[290px] bg-[#0C0C41] px-[10px]">
            <p className="pt-[110px] text-[20px] text-offWhite text-center uppercase">
              Olivia Cole
            </p>
            <p className="sm:text-[80%] md:text-[16px] text-offWhite text-center font-['Roboto']">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ullamcorper scelerisque mi, in malesuada felis malesuada vel.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center relative">
          <img
            src={TestimonialImage1}
            alt="testimonial"
            className="absolute left-50 -top-[68px]"
          />
          <div className="w-[344px] sm:w-[220px] md:w-[290px] lg:[344px]  h-[290px] bg-[#0C0C41] px-[10px]">
            <p className="pt-[110px] text-[20px] text-offWhite text-center uppercase">
              Olivia Cole
            </p>
            <p className="sm:text-[80%] md:text-[16px] text-offWhite text-center font-['Roboto']">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ullamcorper scelerisque mi, in malesuada felis malesuada vel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
