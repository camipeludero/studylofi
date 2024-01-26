import React, { useState, useEffect, useRef } from "react";
import Break from "./Break";
import Session from "./Session";
import TimeLeft from "./TimeLeft";
import bellSound from "../../sounds/bell.wav";
import "../css/Pomodoro.css";
import CustomIcon from "../Basic/CustomIcon";
import Window from "../Basic/Window";

type SessionType = "session" | "break";

const Pomodoro = () => {
  const audioElement = useRef<HTMLAudioElement>(null);
  const window = useRef(null);
  const [currentSessionType, setCurrentSessionType] =
    useState<SessionType>("session");
  const [intervalId, setIntervalId] = useState<number | null>(null);
  const [sessionLength, setSessionLength] = useState<number>(60 * 25);
  const [breakLength, setBreakLength] = useState<number>(300);
  const [timeLeft, setTimeLeft] = useState<number>(sessionLength);

  useEffect(() => {
    setTimeLeft(sessionLength);
  }, [sessionLength]);

  useEffect(() => {
    if (timeLeft === 0 && audioElement.current) {
      audioElement.current.play();
      if (currentSessionType === "session") {
        setCurrentSessionType("break");
        setTimeLeft(breakLength);
      } else if (currentSessionType === "break") {
        setCurrentSessionType("session");
        setTimeLeft(sessionLength);
      }
    }
  }, [breakLength, currentSessionType, sessionLength, timeLeft]);

  const decrementSessionLengthByOneMinute = () => {
    const newSessionLength = sessionLength - 60;

    if (newSessionLength < 0) {
      setSessionLength(0);
    } else {
      setSessionLength(newSessionLength);
    }
  };

  const incrementSessionLengthByOneMinute = () => {
    setSessionLength(sessionLength + 60);
  };

  const decrementBreakLengthByOneMinute = () => {
    const newBreakLength = breakLength - 60;

    if (newBreakLength < 0) {
      setBreakLength(0);
    } else {
      setBreakLength(newBreakLength);
    }
  };

  const incrementBreakLengthByOneMinute = () => {
    setBreakLength(breakLength + 60);
  };

  const isStarted = intervalId != null;

  const handleStartStopClick = () => {
    if (isStarted) {
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      const newIntervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
      setIntervalId(newIntervalId);
    }
  };

  const handleResetButtonClick = () => {
    if (audioElement.current) audioElement.current.load();
    if (intervalId) clearInterval(intervalId);
    setIntervalId(null);
    setCurrentSessionType("session");
    setSessionLength(60 * 25);
    setBreakLength(300);
    setTimeLeft(60 * 25);
  };

  return (
    <>
      <Window className="pomodoro" title="pomodoro">
        <div>
          <TimeLeft
            timeLeft={timeLeft}
            handleStartStopClick={handleStartStopClick}
            handleResetButtonClick={handleResetButtonClick}
            timerLabel={currentSessionType}
            startStopButtonLabel={
              isStarted ? (
                <CustomIcon name="stop" color="#FC6095" />
              ) : (
                <CustomIcon name="play" color="#FC6095" />
              )
            }
          />
          <div className="timer-controlls">
            <Session
              sessionLength={sessionLength}
              decrementSessionLengthByOneMinute={
                decrementSessionLengthByOneMinute
              }
              incrementSessionLengthByOneMinute={
                incrementSessionLengthByOneMinute
              }
            />
            <Break
              breakLength={breakLength}
              decrementBreakLengthByOneMinute={decrementBreakLengthByOneMinute}
              incrementBreakLengthByOneMinute={incrementBreakLengthByOneMinute}
            />
          </div>

          <audio id="beep" ref={audioElement}>
            <source src={bellSound} type="audio/wav" />
          </audio>
        </div>
      </Window>
    </>
  );
};

export default Pomodoro;
