import React from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
momentDurationFormatSetup(moment);

const TimeLeft = ({ 
    startStopButtonLabel,
    timeLeft,
    handleStartStopClick, 
    timerLabel }) => {
   
  const formattedTimeLeft = moment.duration(timeLeft, "s").format("mm:ss", {trim: false});
  return (
    <div className="timer">
      <h3 className="clock">{formattedTimeLeft}</h3>
      <p>{timerLabel}</p>
      <button className="pomodoro-btn play" onClick={handleStartStopClick}>{startStopButtonLabel}</button>
    </div>
  );
};

export default TimeLeft;
