import React from "react";
import Food from "./components/food/Food";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

//import images

import Cheese from "./assets/food1.jpg"
import Mushroom from "./assets/food2.jpg"
import Pepperoni from "./assets/food3.jpg"
import Sausage from "./assets/food4.jpg"
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Food bgImg1={Cheese} bgImg2={Mushroom} />
      <Food bgImg={Pepperoni}/>
      <Food bgImg={Sausage}/> 
      <Footer/>
    </div>
  );
}

export default App;
