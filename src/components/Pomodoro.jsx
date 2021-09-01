import React, { useState, useEffect, useRef } from "react";
import Break from "./Break";
import Session from "./Session";
import TimeLeft from "./TimeLeft";
import bellSound from '../sounds/bell.wav';
import minIcon from '../img/icons/min.svg';
import maxIcon from '../img/icons/max.svg';
import closeIcon from '../img/icons/close.svg';
import './css/Pomodoro.css'
import playIcon from '../img/icons/play.svg';
import stopIcon from '../img/icons/stop.svg';
import undoIcon from '../img/icons/undo.svg';
import volumeIcon from '../img/icons/volume.svg';

const Pomodoro = () => {
  const audioElement = useRef(null);
  const [currentSessionType, setCurrentSessionType] = useState("Session");
  const [intervalId, setIntervalId] = useState(null);
  const [sessionLength, setSessionLength] = useState(60 * 25);
  const [breakLength, setBreakLength] = useState(300);
  const [timeLeft, setTimeLeft] = useState(sessionLength);

  useEffect(() => {
    setTimeLeft(sessionLength);
  }, [sessionLength]);

  useEffect(()=>{
    if(timeLeft===0){
      audioElement.current.play();
          if (currentSessionType === "Session") {
            setCurrentSessionType("Break");
            setTimeLeft(breakLength);
          } else if (currentSessionType === "Break") {
            setCurrentSessionType("Session");
            setTimeLeft(sessionLength);
    }
  }
  }, [breakLength, currentSessionType, sessionLength, timeLeft])

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
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1)
      }, 1000);
      setIntervalId(newIntervalId);
    }
  };

  const handleResetButtonClick = () => {
    audioElement.current.load();
    clearInterval(intervalId);
    setIntervalId(null);
    setCurrentSessionType("Session");
    setSessionLength(60 * 25);
    setBreakLength(300);
  };

  return (
    <>
    <div className="pomodoro window">
      <div className="window-header">
        <p className="window-title">pomodoro</p>
        <div className="window-btns">
          <button id="min"><img src={minIcon} alt="Minimize Icon"/></button>
          <button id="max"><img src={maxIcon} alt="Maximize Icon"/></button>
          <button id="close"><img src={closeIcon} alt="Close Window Icon"/></button>
        </div>
        </div>
      <TimeLeft
        timeLeft={timeLeft}
        handleStartStopClick={handleStartStopClick}
        timerLabel={currentSessionType}
        startStopButtonLabel={isStarted ? <img src={stopIcon} alt="Stop Icon"/> : <img src={playIcon} alt="Play Icon"/>}
      />
      <div className="timer-controlls">
      <Break
        breakLength={breakLength}
        decrementBreakLengthByOneMinute={decrementBreakLengthByOneMinute}
        incrementBreakLengthByOneMinute={incrementBreakLengthByOneMinute}
      />
      <Session
        sessionLength={sessionLength}
        decrementSessionLengthByOneMinute={decrementSessionLengthByOneMinute}
        incrementSessionLengthByOneMinute={incrementSessionLengthByOneMinute}
      />
      </div>
      <div className="pomodoro-settings">
      <button className="pomodoro-btn reset" onClick={handleResetButtonClick}>
      <img src={undoIcon} alt="undo Icon"/>
      </button>
      <button className="pomodoro-btn config">
      <img src={volumeIcon} alt="volume Icon"/>
      </button>
      </div>
      <audio id="beep" ref={audioElement}>
        <source
          src={bellSound}
          type="audio/wav"
        />
      </audio>
      <div className="window-footer"></div>
      </div>
    </>
  );
}

export default Pomodoro
