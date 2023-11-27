import { useState, useEffect } from "react";
import "./CountdownTimer.css";
import { getRemainingTimeUntilMsTimestamp } from "./utils/CountdownTimerUtils";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const CountdownTimer = ({ countdownTimestampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestampMs]);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  return (
    <div className="countdown-timer">
      <div className="title">
        <div></div>
        <p>Today's</p>
      </div>
      <div className="box-rectangular">
        <h1>Flash Sales</h1>
        <span>days:</span>
        <span className="numbers">{remainingTime.days}</span>
        <span>hours:</span>
        <span className="numbers">{remainingTime.hours}</span>
        <span>minutes:</span>
        <span className="numbers">{remainingTime.minutes}</span>
        <span>seconds:</span>
        <span className="numbers">{remainingTime.seconds}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
