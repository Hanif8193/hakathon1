import React from "react";

import Hero from "./components/Hero";
import Center from "./components/Center";
import Center1 from "./components/Center1"

import Products from "./products/page";

function Home() {
  return (
    <div>
      <Hero />
      <Center />
      <Products/>
      <Center1/>
    
    </div>
  );
}

export default Home;
