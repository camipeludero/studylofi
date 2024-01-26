import React from "react";

type BreakComponentProps = {
  breakLength: number;
  decrementBreakLengthByOneMinute: () => void;
  incrementBreakLengthByOneMinute: () => void;
};

const Break = ({
  breakLength,
  decrementBreakLengthByOneMinute,
  incrementBreakLengthByOneMinute,
}: BreakComponentProps) => {
  const breakLengthInMinutes = breakLength;

  return (
    <div className="pomodoro-controlls">
      <p id="break-label">Break</p>
      <div className="time-ctrl">
        <button
          className="pomodoro-btn break"
          onClick={decrementBreakLengthByOneMinute}
        >
          -
        </button>
        <p id="break-length">{breakLengthInMinutes}</p>
        <button
          className="pomodoro-btn break"
          onClick={incrementBreakLengthByOneMinute}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Break;
