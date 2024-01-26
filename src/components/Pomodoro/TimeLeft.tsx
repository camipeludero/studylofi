import React from "react";
import CustomIcon from "../Basic/CustomIcon";
import { formatNumberToCountdownTime } from "@/helpers";

type TimerComponentProps = {
  startStopButtonLabel: React.ReactNode;
  timeLeft: number;
  handleStartStopClick: () => void;
  handleResetButtonClick: () => void;
  timerLabel: string;
};

const TimeLeft = ({
  startStopButtonLabel,
  timeLeft,
  handleStartStopClick,
  handleResetButtonClick,
  timerLabel,
}: TimerComponentProps) => {
  const formattedTimeLeft = formatNumberToCountdownTime(timeLeft)
  return (
    <div className="timer">
      <h3 className="clock">{formattedTimeLeft}</h3>
      <p>{timerLabel}</p>
      <div className="timer-btns">
        <button className="pomodoro-btn play" onClick={handleStartStopClick}>
          {startStopButtonLabel}
        </button>
        <button className="pomodoro-btn reset" onClick={handleResetButtonClick}>
          <CustomIcon name="undo" color="#FC6095" />
        </button>
      </div>
    </div>
  );
};

export default TimeLeft;
