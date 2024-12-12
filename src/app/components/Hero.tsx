import React from "react";
import Image from "next/image";
import Pic from "../../../public/Pic.png"; 




function Hero() {
  return (
    <div>
      <section className="text-gray-600 body-font cover cover">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              FIND CLOTHES THATS MATCHES YOUR STYLE
              <br className="hidden lg:inline-block" />
            </p>
            <p className="mb-8 leading-relaxed ">
              Browse through our diverse range of meticulously. carfted garments
              design to bring out your indivisiduality and cater to your sense
              of style.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Shop Now
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image src={Pic} alt="PIC" width={300} height={300} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
