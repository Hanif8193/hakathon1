import React from "react";
import Image from "next/image";
import PIC3 from "../../../public/PIC3.png";
import TS4 from "../../../public/TS4.png";
import S from "../../../public/S.png";
import PR from "../../../public/Frame 12.png";
import CO from "../../../public/Frame 77.png";
import BU from "../../../public/Frame 16.png";
import BU1 from "../../../public/Frame 17.png";
import BU2 from "../../../public/Frame 21.png";
import RE from "../../../public/Frame 22 (1).png";
import RE1 from "../../../public/Frame 23.png";
import RE2 from "../../../public/Frame 24.png";
import RE3 from "../../../public/Frame 25.png";
import RE4 from "../../../public/Frame 26.png";
import RE5 from "../../../public/Frame 27.png";
import T from '../../../public/Frame 32 (2).png'
import T1 from '../../../public/Frame 33 (2).png'
import T2 from '../../../public/Frame 34 (2).png'
import T4 from '../../../public/Frame 38 (2).png'
import S1 from '../../../public/S1.png'
import S4 from '../../../public/S4.png'
import S5 from '../../../public/S5.png'
function OnSale() {
  return (
    <div id="on-sale">
      <section className="text-gray-600 body-font cover">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <div className="flex justify-between items-center">
              <div>
                <Image src={TS4} alt="Ts" width={100} height={100} />
                <Image src={TS4} alt="Ts" width={100} height={100} />
                <Image src={PIC3} alt="Ts" width={100} height={100} />
              </div>

              <Image src={TS4} alt="PIC" width={300} height={300} />
            </div>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <div className="title-font sm:text-xl text-xl mb-4 font-medium text-gray-900">
              ONE LIFE GRAPHIC T-SHIRT
            </div>
            <div className="mb-8 leading-relaxed">
              <Image src={S} alt="S" width={150} height={150} />
              <div className="flex justify-between items-center">
                <Image src={PR} alt="PR" width={150} height={150} />
                <button className="px-1 bg-pink-100 rounded-3xl">-40%</button>
              </div>
            </div>
            <div>
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </div>
            <div className="border-t w-full">Select Color</div>
            <Image src={CO} alt="CO" width={100} height={100} />
            <div className="flex w-full md:justify-start justify-center items-end">
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4"></div>
            </div>
            <div className="border-t">
              {" "}
              Choose Size
              <Image src={BU} alt="BU" width={300} height={300} />
            </div>
            <div className="flex  mt-4 border-t-2 ">
              <Image src={BU1} alt="BU" width={100} height={100} />
              <button className="bg-black text-white px-12 ml-5 py-1 rounded-3xl">
                Add To Cart
              </button>
            </div>

            <div className="flex lg:flex-row md:flex-col"></div>
          </div>
        </div>

        <div>
          <ul className="flex justify-between items-center border-b-2  ml-16 mr-16">
            <li>Product Detail </li>
            <li>Rating And Reviews</li>
            <li> FAQ</li>
          </ul>

          <div className="flex justify-between items-center ml-16 mr-16">
            All Reviews
            <Image src={BU2} alt="BU" width={300} height={300} />
          </div>
          <div className="flex gap-2">
            <div>
              <Image src={RE} alt="RE" width={500} height={500} />
              <Image src={RE1} alt="RE" width={500} height={500} />
            </div>
            <div>
              <Image src={RE2} alt="RE" width={500} height="500" />
              <Image src={RE3} alt="RE" width={500} height={500} />{" "}
            </div>
            <div>
              <Image src={RE4} alt="RE" width={500} height={500} />
              <Image src={RE5} alt="RE" width={500} height={500} />
            </div>
          </div>
        </div>
      </section>
      <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-5">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <div className="sm:text-3xl text-2xl font-medium title-font mb-2 text-center text-gray-900">
          YOU MIGHT ALS LIKE
        </div>
       
       </div>
     
     
    </div>
    <div className="flex justify-between items-center  sm:flex-wrap ">
      
    <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg  ">
         <Image src={T}alt="T"width={200}height={200}/>
         
         
         
          <div className="text-xs text-gray-900 font-medium title-font mb-4">
            Polo With Contrast Trim
          </div>
          <p className="leading-relaxed text-base">
            
          <Image src={S4}alt="S"width={150}height={150}/>
          </p>
          <div className="text-lg text-gray-900 font-medium title-font mb-4">
            <div> $212  $242 <button className="px-1 bg-pink-100 rounded-3xl">-20%</button> </div>
          </div>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">
        <Image src={T1}alt="T"width={200}height={200}/>
          
        
        
          <div className="text-xs text-gray-900 font-medium title-font mb-4">
            Gradient Graphic T-shirt
          </div>
          <p className="leading-relaxed text-base">
            
            <Image src={S1}alt="S"width={150}height={150}/>
          </p>
          <div className="text-lg text-gray-900 font-medium title-font mb-4">
            $145
          </div>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">
         
        <Image src={T2}alt="T"width={200}height={200}/>
        
        
          <div className="text-xs text-gray-900 font-medium title-font mb-4">
            Polo With Tipping Details
          </div>
          <p className="leading-relaxed text-base">
           <Image src={S}alt="S"width={150}height={150} />
          
          </p>
          <div className="text-lg text-gray-900 font-medium title-font mb-4">
            $180
          </div>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">
         
        <Image src={T4}alt="T"width={200}height={200}/>
         
         
          <div className="text-xs text-gray-900 font-medium title-font mb-4">
          Black Striped T-shirt
          </div>
          <p className="leading-relaxed text-base">
          <Image src={S5}alt="S5"width={150}height={150} />
           
          </p>
          <div className="text-lg text-gray-900 font-medium title-font mb-4">
          <div> $120  $150 <button className="px-1 bg-pink-100 rounded-3xl">-30%</button> </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      </div>
    </div>
  );
}

export default OnSale;
