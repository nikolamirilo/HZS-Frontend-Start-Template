import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Hero = () => {
  return (
    <div className="hero">
      <h1>Welcome to Unsplash Photo Gallery!</h1>
      <button className="scroll-down-btn">
        <IoIosArrowDown size={50} />
      </button>
    </div>
  );
};

export default Hero;
