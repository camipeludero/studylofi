import React from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import undoIcon from '../img/icons/undo.svg';
momentDurationFormatSetup(moment);

const TimeLeft = ({ 
    startStopButtonLabel,
    timeLeft,
    handleStartStopClick,
    handleResetButtonClick, 
    timerLabel }) => {
   
  const formattedTimeLeft = moment.duration(timeLeft, "s").format("mm:ss", {trim: false});
  return (
    <div className="timer">
      <h3 className="clock">{formattedTimeLeft}</h3>
      <p>{timerLabel}</p>
      <div className="timer-btns">
      <button className="pomodoro-btn play" onClick={handleStartStopClick}>{startStopButtonLabel}</button>
      <button className="pomodoro-btn reset" onClick={handleResetButtonClick}>
      <img src={undoIcon} alt="undo Icon"/>
      </button>
      </div>
    </div>
  );
};

export default TimeLeft;
