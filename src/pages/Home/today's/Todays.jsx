import React from "react";
import CountdownTimer from "./Countdown Timer/CountdownTimer";
import CarouselTodays from "./slider/CarouselTodays";

const Todays = ({ countdownTimestampMs }) => {
  return (
    <div>
      <CountdownTimer countdownTimestampMs={countdownTimestampMs} />
      <CarouselTodays />
    </div>
  );
};
export default Todays;
