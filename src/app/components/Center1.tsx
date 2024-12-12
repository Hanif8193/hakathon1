import React from "react";
import Image from "next/image";
import SH from "../../../public/SH1.png";
import TS3 from "../../../public/TS3.png";
import NI from "../../../public/NI.png";
import P2 from "../../../public/P2.png";
import S5 from "../../../public/S5.png";
import S4 from "../../../public/S4.png";
import S3 from "../../../public/S3.png";
import S1 from "../../../public/S1.png";

function Center1() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-5">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <p className="sm:text-3xl text-2xl font-medium title-font mb-2 text-center text-gray-900">
                TOP SELLING
              </p>{" "}
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className=" p-6 rounded-lg">
                <Image src={SH} alt="SH" width={200} height={200} />

                <p className="tracking-widest text-indigo-500 text-xs font-medium title-font"></p>
                <p className="text-lg text-gray-900 font-medium title-font mb-4">
                  Vertical Striped Shirt
                </p>
                <p className="leading-relaxed text-base">
                  <Image src={S5} alt="S" width={150} height={150} />
                </p>
                <p className="text-lg text-gray-900 font-medium title-font mb-4">
                  <div>
                    $212 $232{" "}
                    <button className="bg-pink-100 px-1 rounded-xl">
                      -20%
                    </button>
                  </div>
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className=" p-6 rounded-lg">
                <Image src={TS3} alt="TS" width={200} height={200} />

                <p className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  <p className="text-lg text-gray-900 font-medium title-font mb-4">
                    Courage Graphic T-shirt
                  </p>
                </p>
                <p className="leading-relaxed text-base">
                  <Image src={S4} alt="S" width={150} height={150} />
                </p>
                <p className="text-lg text-gray-900 font-medium title-font mb-4">
                  $145
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4 cover">
              <div className=" p-6 rounded-lg">
                <Image src={NI} alt="SH" width={200} height={200} />

                <p className="tracking-widest text-indigo-500 text-xs font-medium title-font"></p>
                <p className="text-lg text-gray-900 font-medium title-font mb-4">
                  Loose Fit Burmoda Shorts
                </p>
                <p className="leading-relaxed text-base">
                  <Image src={S3} alt="S" width={150} height={150} />
                </p>
                <p className="text-lg text-gray-900 font-medium title-font mb-4">
                  $80
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className=" p-6 rounded-lg">
                <Image src={P2} alt="SH" width={200} height={200} />
                <p className="tracking-widest text-indigo-500 text-xs font-medium title-font"></p>
                <p className="text-lg text-gray-900 font-medium title-font mb-4">
                  Faded Skinny Jeans
                </p>
                <p className="leading-relaxed text-base">
                  <Image src={S1} alt="S" width={150} height={150} />
                </p>
                <p className="text-lg text-gray-900 font-medium title-font mb-4">
                  $210
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Center1;
