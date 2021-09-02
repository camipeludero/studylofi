import React from 'react'
import moment from 'moment';

const Session = ({
        sessionLength,
        decrementSessionLengthByOneMinute,
        incrementSessionLengthByOneMinute
    }) => {

    const sessionLengthInMinutes = moment.duration(sessionLength, 's').minutes()
    
    return (
        <div className="pomodoro-controlls">
            <p id="session-label">Session</p>
            <div className="time-ctrl">
            <button className="pomodoro-btn session" onClick={decrementSessionLengthByOneMinute}>-</button>
            <p id="session-length">{sessionLengthInMinutes}</p>
            <button className="pomodoro-btn session" onClick={incrementSessionLengthByOneMinute}>+</button>
        </div>
        </div>
    )
}

export default Session
