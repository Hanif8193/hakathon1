import React from "react";
import Image from "next/image";
import Pic from "../../../public/Pic.png";

import { PiStarFourFill } from "react-icons/pi";

function Hero() {
  return (
    <div className=" w-full h-full md:h-[500px] flex flex-col md:flex-row justify-between items-center">
      {/* Left Section  */}
      <div className="w-full md:w-[500px] mt-3 md:mt-10 ml-10 pl-3">
        <h3 className="text-2xl md:text-5xl font-bold">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h3>
        <h3 className="text-sm mt-3">
          Browse through our diverse range of meticulious crafted garments,
          designed to bring out your individuality and cater to sense of style
        </h3>
        <button className="bg-black px-5 py-2 text-sm text-white rounded-[16px] mt-4">
          Shop Now
        </button>
      </div>
      {/* Right Section */}
      <div className="relative">
        <Image
          src={Pic}
          alt="Pic"
          width={200}
          height={200}
          className="w-[500px] mr-4"
        />

        <p className="text-5xl absolute top-[135px] md: top-[300px] md: left-[-1px]">
          {" "}
          <PiStarFourFill />{" "}
        </p>
        <p className="text-5xl absolute top-[20px] md: top-[100px] md: right-[-1px]">
          {" "}
          <PiStarFourFill />{" "}
        </p>
      </div>
    </div>
  );
}

export default Hero;
