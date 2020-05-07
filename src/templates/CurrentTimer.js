import React, { useState } from "react";
import { AppLayout, Button } from "../components";

// let countClock;
export const CurrentTimer = () => {
  const now = new Date().toLocaleTimeString();
  // const [isPaused, setPaused] = useState(false);
  const [time, setTime] = useState(now);

  const handleClick = () => {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);

    // console.log(isPaused);
  };
  return (
    <AppLayout title="Timer">
      <h2>{time ? time : "hit the button"}</h2>
      <Button onClick={handleClick}>Get time</Button>
    </AppLayout>
  );
};
