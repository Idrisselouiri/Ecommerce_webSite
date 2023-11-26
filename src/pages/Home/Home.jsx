import React from "react";
import { HeroSection } from "./hero section/HeroSection";
import Todays from "./today's/Todays";
import { Categories } from "./categories/Categories";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <Todays countdownTimestampMs={100000000} />
      <Categories />
    </>
  );
};
