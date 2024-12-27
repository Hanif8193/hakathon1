import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import TS4 from "../../../public/TS4.png";
import { Check, Minus, Plus } from "lucide-react";

const star = [
  <IoIosStar key={1} />,
  <IoIosStar key={2} />,
  <IoIosStar key={3} />,
  <IoIosStar key={4} />,
  <IoIosStar key={5} />,
];

// interface Iproducts 
//   title: string;
//   price: string;
//   id: number;
//   reting?: string;
//   full_price?: string;
//   img_url: string;
//   img1: string;
//   img2: string;
//   img3: string;
// }

// const product: Iproducts[] = [
//   {
//     title: "T-shirt with Tape Details",
//     id: 1,
//     price: "$120",
//     img_url: "/TS.png",
//     img1: "/image2.png",
//     img2: "/image2.png",
//     img3: "/image2.png",
//   },
//   {
//     title: "Skinny Fit Jeans",
//     id: 2,
//     price: "$240 ",
//     img_url: "/P1.png",
//     full_price: "$260",

//     img1: "/image2.png",
//     img2: "/image2.png",
//     img3: "/image2.png",
//   },
//   {
//     title: "Checkered Shirt",
//     id: 3,
//     price: "$180",
//     img_url: "/TS1.png",
//     img1: "/image2.png",
//     img2: "/image2.png",
//     img3: "/image2.png",
//   },
//   {
//     title: "Sleeve Strped T-Shirt",
//     id: 4,
//     price: "$130",
//     img_url: "/TS2.png",
//     full_price: "$160",
//     img1: "/image2.png",
//     img2: "/image2.png",
//     img3: "/image2.png",
//   },
// ];
export default function Onsale() {
  return (
    <div className="flex flex-col md:flex-row justify-between sm:mt-10 p-5 px-10 ">
      {/* Left Section */}
      <div className=" flex flex-col  justify-center items-center w-full  sm:w-[152px] order-2 sm:order-1 ">
        <Image
          src={TS4}
          alt="T"
          width={500}
          height={500}
          className=" w-[100px} sm:w-full h-[100px] sm:h-[150px] "
        ></Image>
        <Image
          src={TS4}
          alt="T"
          width={300}
          height={300}
          className=" w-[100px} sm:w-full h-[100px] sm:h-[150px] mt-3"
        ></Image>
        <Image
          src={TS4}
          alt="T"
          width={300}
          height={300}
          className=" w-[100px} sm:w-full h-[100px] sm:h-[150px] mt-3"
        ></Image>
      </div>
      {/* Mid Section */}
      <div className=" w-full sm:w-[444px] h-[500px] order-1 sm:order-2">
        <Image
          src={TS4}
          alt="T"
          width={100}
          height={100}
          className="w-full h-[95%]"
        ></Image>
      </div>
      {/* Right Section */}
      <div className="w-full sm:w-[600px]h-[500px] order-3">
        <h2 className="text-2xl md:text-3xl font-bold">
          One Life Graphic T-Shirt
        </h2>
        <div className="flex text-yellow-500 font-bold">{star}</div>
        <div className="">
          <h2 className="font-bold flex">
            {" "}
            {"$260"}{" "}
            <span className="text-gray-300 font-bold line-through">
              {"$300"}
            </span>
          </h2>
          <p>
            This is grphic T-shirt which is perfect on any occasion, Crafted
            fron soft and breathable fabric, it offer superior comfort and style
          </p>
          <div className=" mt-5">
            <p className="text-gray-400">Select Color</p>
            <div className="flex gap-3 mt-2">
              <div className="w-[37px] h-[37px] bg-[#4f4631] rounded-full  flex justify-center items-center">
                <Check className="text-white opacity-0 hover:opacity-100 cursor-pointer " />{" "}
              </div>
              <div className="w-[37px] h-[37px] bg-[#314f4A] rounded-full flex justify-center items-center">
                <Check className="text-white opacity-0 hover:opacity-100 cursor-pointer " />{" "}
              </div>
              <div className="w-[37px] h-[37px] bg-[#31344f] rounded-full flex justify-center items-center">
                <Check className="text-white opacity-0 hover:opacity-100 cursor-pointer " />{" "}
              </div>
            </div>
          </div>
          <div>
            <p className="text-gray-400 mt-5">Choose Size</p>
            <div className="flex gap-5 ">
              <div className="w-12 h-7 flex justify-center items-center bg-gray-200 text-gray-400 rounded-xl">
                Small
              </div>
              <div className="w-14 h-7 flex justify-center items-center bg-gray-200 text-gray-400 rounded-xl">
                Medium
              </div>
              <div className="w-12 h-7 flex justify-center items-center bg-gray-200 text-gray-400 rounded-xl">
                Large
              </div>
              <div className="w-14 h-7 flex justify-center items-center bg-gray-200 text-gray-400 rounded-xl">
                X-Large
              </div>
            </div>
            {/* Buton */}
            <div className="flex justify-start items-center mt-3">
              <div className="w-14 h-7  flex justify-center p-3 items-center bg-gray-200 text-gray-400 rounded-xl">
                <Minus />
                1
                <Plus />
              </div>

              <button className="bg-black text-white w-[180px] rounded-md ml-8">
                Add to Card
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
