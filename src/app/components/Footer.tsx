
import React from 'react'
import Image from 'next/image'
import SM from "../../../public/Social.png"
import DC from "../../../public/DC.png"

function Footer() {
  return (
    <div>
      <div>
          <div>
        <div className="flex  bg-black text-white font-bold rounded-xl cover ">
        <div className="flex justify-between items-center ml-10 sm:flex flex-wrap ">
          STAY UP TO DATE ABOUT <br />
          OUR LATEST OFFERS
          <div className="ml-24 flex gap-2 flex-col-reverse mb-2">
            <button className="px-6 bg-white text-black rounded-3xl  ">
              Enter your email address
            </button>
            <button className="px-8 bg-white text-black rounded-3xl mt-1">
              Suscribe to Newsletter
            </button>
          </div>{" "}
        </div>{" "}
      </div>  
      
      </div> 
      </div>
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        
        
        <span className="ml-3 text-xl">SHOP.CO</span>
      </a>
      <p className="mt-2 text-sm text-gray-500">
        We have clothes that suits your style and which you are proud to wear.
        From women to men.
      </p >
      <div ><Image src={SM}alt='SM'width={210}height={210}/></div>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          COMPANY
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">About</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Features</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Works</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Career</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          HELP
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Customer Suport</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Deliver Details</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Terms and Conditions</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          FAQ
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Account</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Manage Deliveris</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Orders</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Payments</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          RESOURCES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Free eBooks</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Devlopment Tutorial</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">How to -Blog</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Youtube Playlist</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500  text-sm text-center sm:text-left flex justify-between items-center sm:flex flex-wrap ">
        Shop co © 2000 - 2023, All Rights Reserved
        <a className='ml-64'>
         
        <Image src={DC}alt='DC'width={400}height={400}/>
         
        </a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        
        
       
       
        
        
       
       
      </span>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
export interface Iproducts {
    title: string;
    price: string;
    id: number;
    rating?: string;
    full_price?: number;
    img_url: string;
}
