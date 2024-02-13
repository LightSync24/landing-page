import "../App.css";
import React from "react";
import { background } from "../assets";

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero_sub">
          <div className="hero_text">
            <h1>Revolutionizing Tomorrow, Crafting Today.</h1>
            <p>
              We're not just dreaming of tomorrow, we're shaping it. Together,
              let's unleash the power of innovation and creativity to transform
              the world around us.
            </p>
          </div>
          <button className="join_btn">Join Us</button>
        </div>
        <img src={background}></img>
      </div>
    </div>
  );
};

export default Hero;
