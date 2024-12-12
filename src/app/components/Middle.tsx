import React from "react";
import Image from "next/image";
import PIC1 from "../../../public/PIC1.png";
import CU1 from "../../../public/CU1.png";
import CU2 from "../../../public/CU2.png";
import CU3 from "../../../public/CU3.png";
import CU4 from "../../../public/CU4.png";
function Middle() {
  return (
    <div>
      <section className="text-gray-600 body-font cover">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Image src={PIC1} alt="PIC" width={600} height={600} />

          <div className="text-center lg:w-2/3 w-full">
            <p className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              OUR HAPPY CUSTOMERS
            </p>
            <p className="mb-8 leading-relaxed">
              <div className="flex justify-between items-center">
                <Image src={CU1} alt="CU" width={200} height={200} />
                <Image src={CU2} alt="CU" width={200} height={200} />
                <Image src={CU3} alt="CU" width={200} height={200} />
                <Image src={CU4} alt="CU" width={40} height={40} />
              </div>
            </p>
             <div>
       
       
           
           </div>  
          </div> 
        </div>
      </section>
    </div>
  );
}

export default Middle;
