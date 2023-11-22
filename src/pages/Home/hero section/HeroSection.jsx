import React from "react";
import "./HerosectionStyling.css";
import { Menu } from "./Menu/Menu";
import { CarouselHero } from "./carousel/CarouselHero";

export const HeroSection = () => {
  return (
    <section className="hero-section">
      <CarouselHero />
      <Menu />
    </section>
  );
};
