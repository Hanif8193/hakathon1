import React from "react";
import Image from "next/image";

function Footer1() {
  return (
    <div>
      <div>
        <div>
          <div className="flex  bg-black text-white font-bold rounded-xl  ">
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

      <section>
        <div className=" w-full h-full  grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 px-10  gap-5">
          <div>
            <h2 className="text-2xl font-bold">SHOP.CO</h2>
            <p className="text-sm">
              {" "}
              We have clothes that suits your style and which you are proud to
              wear. From women to men.
            </p>
            <div>
              <Image src={"/Social.png"} alt="SM" width={210} height={210} />
            </div>
          </div>
          <div className="">
            <h2 className="text-xl font-bold">COMPANY</h2>
            <h2>About</h2>
            <h2>Features</h2>
            <h2>Works</h2>
            <h2>Career</h2>
          </div>
          <div className="">
            <p className="text-xl font-bold ">HELP</p>
            <h2>Customer Suport</h2>
            <h2>Deliver Details</h2>
            <h2>Terms and Conditions</h2>
            <h2>Privacy Policy</h2>
          </div>
          <div>
            <p className="text-xl font-bold">FAQ</p>
            <h2>Account</h2>
            <h2>Manage Deliveris</h2>
            <h2>Orders</h2>
            <h2>Payments</h2>
          </div>
          <div>
            <p className="text-xl font-bold">RESOURCES</p>
            <h2>Free eBooks</h2>
            <h2>Devlopment Tutorial</h2>
            <h2>How to -Blog</h2>
            <h2>Youtube Playlist</h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer1;
