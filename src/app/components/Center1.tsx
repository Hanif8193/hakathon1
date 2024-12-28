

import Image from "next/image";





import { IoIosStar } from "react-icons/io";

interface Iproducts{
   title:string,
   price:string,
   id:number,
   reting?:string,
   full_price?:string,
   img_url:string
}


const product:Iproducts[]=[
    {
        title:"Vertical Stipped Shirt",
        id:1,
        price:"$212",
        img_url:"/SH1.png",
        full_price:"$232"
    },

    {
        title:"Courage Graphic T-Shirt",
        id:2,
        price:"$145 ",
        img_url:"/TS3.png",
        
    },
    {
        title:"Loose Fit Burmoda Shorts",
        id:3,
        price:"$80",
        img_url:"/NI.png"
    },
    {
        title:"Faded Skinny Jeens",
        id:4,
        price:"$210",
        img_url:"/P2.png",
        
    },


]




const star = [
    <IoIosStar key={1} />,
    <IoIosStar key={2} />,
    <IoIosStar key={3} />,
    <IoIosStar key={4} />,
    <IoIosStar key={5} />
];



export default function Items(){



    return(
    <div className="w-full h-full sm:h-[500px]  px-10 py-10 mt-10 ">
    
  


    <h2 className="text-3xl md:text-4xl text-center font-bold">TOP SALEING</h2>
    
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 mt-10">
    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> */}
  






       {
        product.map((data,index)=>{
            return(
                <div key={index}>
                     
                    <div className="w-[150px]h-[150px] bg-gray-300 rounded-lg">
                    <Image src={data.img_url}alt={data.title}
                    className=" w-full h-full rounded-lg"
                    width={100}height={100}></Image>
                     </div>
                     
                    <p className="font-bold">{data.title}</p>
                    <p className="flex text-yellow-500">{star}</p>
                    <p className="font-bold">{data.price} <span className="text-gray-300 font-bold line-through">{data.full_price}</span></p>
                </div>
                
        

                
            )
        })
       }
       
    </div>
    </div>

    )
}
