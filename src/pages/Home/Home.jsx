import React from "react";
import { HeroSection } from "./hero section/HeroSection";
import Todays from "./today's/Todays";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <Todays countdownTimestampMs={100000000} />
    </>
  );
};
