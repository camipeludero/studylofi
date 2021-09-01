import React from 'react'

function PlayerControl(props) {
    return (
        <>
        <div className="player-controlls">
        <input 
          type="range" 
          min={0} 
          max={100} 
          value={props.volume}
          onInput={(e)=>{props.handleVolumeChange(e)}}/>
          </div>
        </>
    )
}

export default PlayerControl
