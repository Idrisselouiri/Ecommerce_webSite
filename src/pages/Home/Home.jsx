import React from "react";
import { HeroSection } from "./hero section/HeroSection";
import Todays from "./today's/Todays";
import { Categories } from "./categories/Categories";
import Store from "./shopingCart/Store";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <Todays countdownTimestampMs={1000000000000} />
      <Categories />
      <Store />
    </>
  );
};
