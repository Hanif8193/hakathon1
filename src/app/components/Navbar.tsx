import React from "react";
import MUT from "../../../public/Mut.png";
import Image from "next/image";
import IC1 from "../../../public/IC1.png";
import IC2 from "../../../public/IC2.png";
import IC3 from "../../../public/IC3.png";
import Link from "next/link";


function Navbar() {
  return (
    <div >
      
      
      
      <header className="text-gray-600 body-font  cover">
        <div className="container mx-auto  flex-wrap p-5  md:flex-row items-center ">
          <a className="flex title-font font-medium items-center bg-black text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl  text-white">
              Sign up and get 20% off to you first order.
            </span>
            <div className="text-2xl font-bold underline underline-offset-2 text-white ml-5">
              Sign Up Now
            </div>
            <Image
              className="text-white ml-24 "
              src= {MUT}
              alt="MUT"
              width={30}
              height={30}
            />
          </a>
        </div>
      </header>
      <div >
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <span className="ml-3 text-xl">SHOP. CO</span>
            </a>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
              <Link href={"/"} className="mr-5 hover:text-gray-900"> Shop
                
              </Link>
              <Link href={"/on-sale"} className="mr-5 hover:text-gray-900">
                On Sale
              </Link>
              <Link href={"/new-arrival"} className="mr-5 hover:text-gray-900">
                New Arrival
              </Link>
              <Link href={"/brands"} className="mr-5 hover:text-gray-900">
                Brands
              </Link>
            </nav>
            <button
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-4 focus:outline-none
     hover:bg-gray-200 text-base mt-4 md:mt-0 rounded-3xl"
            >
              <Image src={IC1} alt="IC" width={30} height={30} />
              Search for products
            </button>
            <Image src={IC2} alt="IC" width={30} height={30} className="ml-5" />
            <Image src={IC3} alt="IC" width={30} height={30} />
          </div>
        </header>
      </div>
    </div>
    
  );
}

export default Navbar;
