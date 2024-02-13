import React, { useState, useEffect } from "react";
import "../App.css";

const Timer = () => {
  const [seconds, setSeconds] = useState(600);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <div className="timer">
        <h1 style={{ backgroundColor: "#fada50" }}>Hurry Up!</h1>
        <p style={{ marginTop: "10px", backgroundColor: "#fada50" }}>
          Grab the best offers!
        </p>
        <div style={{ backgroundColor: "#fada50" }} id="clock">
          {formatTime(seconds)}
        </div>
        <button className="join_btn_2">Join Us</button>
      </div>
    </div>
  );
};

export default Timer;
