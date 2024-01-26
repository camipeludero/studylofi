import React from "react";

type SessionComponentProps = {
  sessionLength: number;
  incrementSessionLengthByOneMinute: () => void;
  decrementSessionLengthByOneMinute: () => void;
};

const Session = ({
  sessionLength,
  decrementSessionLengthByOneMinute,
  incrementSessionLengthByOneMinute,
}: SessionComponentProps) => {
  const sessionLengthInMinutes = sessionLength

  return (
    <div className="pomodoro-controlls">
      <p id="session-label">Session</p>
      <div className="time-ctrl">
        <button
          className="pomodoro-btn session"
          onClick={decrementSessionLengthByOneMinute}
        >
          -
        </button>
        <p id="session-length">{sessionLengthInMinutes}</p>
        <button
          className="pomodoro-btn session"
          onClick={incrementSessionLengthByOneMinute}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Session;
