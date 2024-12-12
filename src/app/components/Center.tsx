import React from "react";
import Image from "next/image";
import TS from "../../../public/TS.png";
import P1 from "../../../public/P1.png";
import TS1 from "../../../public/TS1.png";
import TS2 from "../../../public/TS2.png";
import S from "../../../public/S.png";
import S1 from "../../../public/S1.png";

function Center() {
  return (
    <div>
      <div className="bg-black text-white ml-16 mr-16 py-3">
        <ul className="flex justify-between items-center">
          <li> VERSAC</li>
          <li> ZARA</li>
          <li>GUCCI</li>
          <li className="font-bold">PARADA</li>
          <li>Calvin Klein</li>
        </ul>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-1 py-2 mx-auto">
          <div className="flex flex-wrap w-full mb-6">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <p className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900 text-center">
                NEW ARRIVAL
              </p>
              <div className="h-1 w-20  rounded" />
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500"></p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className=" p-6 rounded-lg">
                <Image src={TS} alt="TS" width={200} height={200} />
                <p className="tracking-widest text-indigo-500 text-xs font-medium title-font"></p>
                <p className="text-lg text-gray-900 font-medium title-font mb-4">
                  T-shirt with Tape Details
                </p>
                <p className="leading-relaxed text-base">
                  <Image src={S} alt="S" width={150} height={150} />
                </p>
                <div className="text-lg text-gray-900 font-medium title-font mb-4">
                  $120
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className=" p-6 rounded-lg">
                <Image src={P1} alt="P" width={200} height={200} />
                <p className="tracking-widest text-indigo-500 text-xs font-medium title-font"></p>
                <p className="text-lg text-gray-900 font-medium title-font mb-4">
                  Skinny Fit Jeans
                </p>
                <div className="leading-relaxed text-base">
                  <Image src={S1} alt="S" width={150} height={150} />
                </div>

                <div>
                  {" "}
                  $240 $260{" "}
                  <button className="px-3 py-2 bg-pink-100 rounded-3xl">
                    20%
                  </button>{" "}
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className=" p-6 rounded-lg">
                <Image src={TS1} alt="TS" width={200} height={200} />
                <p className="text-lg text-gray-900 font-medium title-font mb-4"></p>

                <p className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  {" "}
                </p>
                <p className="text-lg text-gray-900 font-medium title-font mb-4">
                  Checkered Shirt
                </p>

                <p className="leading-relaxed text-base">
                  <Image src={S1} alt="S" width={150} height={150} />
                </p>

                <p className="text-lg text-gray-900 font-medium title-font mb-4">
                  $180
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className=" p-6 rounded-lg">
                <Image src={TS2} alt="TS" width={200} height={200} />
                <p className="tracking-widest text-indigo-500 text-xs font-medium title-font"></p>
                <p className="text-lg text-gray-900 font-medium title-font mb-4">
                  Sleeve Strped T-Shirt
                </p>
                <p className="leading-relaxed text-base">
                  <Image src={S1} alt="S" width={150} height={150} />
                </p>
                <div>
                  {" "}
                  $130 $160{" "}
                  <button className="px-3 py-2 bg-pink-100 rounded-3xl">
                    30%
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Center;
