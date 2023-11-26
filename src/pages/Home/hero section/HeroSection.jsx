import React from "react";
import "./HerosectionStyling.css";
import { Menu } from "./Menu/Menu";
import { SliderHero } from "./carousel/SliderHero";

export const HeroSection = () => {
  return (
    <section className="hero-section">
      <SliderHero />
      <Menu />
    </section>
  );
};
