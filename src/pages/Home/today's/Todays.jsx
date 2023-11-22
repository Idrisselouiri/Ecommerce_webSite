import React from "react";
import CountdownTimer from "./Countdown Timer/CountdownTimer";
import Carousel from "./slider/Carousel";

const Todays = ({ countdownTimestampMs }) => {
  return (
    <div>
      <CountdownTimer countdownTimestampMs={countdownTimestampMs} />
      <Carousel />
    </div>
  );
};
export default Todays;
