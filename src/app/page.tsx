import React from "react";

import Hero from "./components/Hero";
import Center from "./components/Center";
import Center1 from "./components/Center1"
import { CarouselDemo } from "./components/Carosell";
import Products from "./products/page";
import Dress from "./components/Dress";



function Home() {
  return (
    <div>
      <Hero />
      <Center />
      <Products/>
      <Center1/>
      <Dress/>
      <CarouselDemo/>
      
    </div>
  );
}


export default Home;
