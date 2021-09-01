import React from 'react'
import moment from 'moment';

const Break = ({
    breakLength,
    decrementBreakLengthByOneMinute,
    incrementBreakLengthByOneMinute
}) => {
    const breakLengthInMinutes = moment.duration(breakLength, 's').minutes()
    
    return (
        <div  className="pomodoro-controlls">
            <p id="break-label">Break</p>
            <p id="break-length">{breakLengthInMinutes}</p>
            <button className="pomodoro-btn break" onClick={decrementBreakLengthByOneMinute}>-</button>
            <button className="pomodoro-btn break" onClick={incrementBreakLengthByOneMinute}>+</button>
        </div>
    )
}

export default Break
