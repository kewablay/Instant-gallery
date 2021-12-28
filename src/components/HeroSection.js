import React from "react";
import hero from "../images/img-post.svg";

export const HeroSection = () => {
  return (
    <div className="intro-container">
      <h3 className="intro-text">
        CAP<span id="text-design">TURE</span> <br />
        <span id="desc">every moment</span>
      </h3>
      <img className="hero-img" src={hero} alt="" />
    </div>
  );
};
