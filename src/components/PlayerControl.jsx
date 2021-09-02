import React, { useRef } from 'react';
import './css/PlayerControl.css';
import minIcon from '../img/icons/min.svg';
import maxIcon from '../img/icons/max.svg';
import closeIcon from '../img/icons/close.svg';
import muteIcon from '../img/icons/muted.svg';
import volumeIcon from '../img/icons/volume.svg';
import Draggable from 'react-draggable';

function PlayerControl(props) {
  const window = useRef(null);
    return (
        <>
            <Draggable>
        <div className=" window player-controlls" ref={window}>
          <div className="window-header">
          <p>now playing</p>
          <div className="window-btns">
          <button id="min"><img src={minIcon} alt="Minimize Icon"/></button>
          <button id="max"><img src={maxIcon} alt="Maximize Icon"/></button>
          <button id="close"><img src={closeIcon} alt="Close Window Icon"/></button>
        </div>
          </div>
          
          <div className="player-range">
        <input 
          type="range" 
          min={0} 
          max={100} 
          value={props.volume}
          onInput={(e)=>{props.handleVolumeChange(e)}}/>
        <button id="volumeIcon" onClick={(e)=>{props.handleMuted(e)}}>{props.muted ? <img src={muteIcon} alt="Minimize Icon"/> :<img src={volumeIcon} alt="Minimize Icon"/>}</button>
          </div>
          <div className="window-footer"></div>
          </div>
          </Draggable>
        </>
    )
}

export default PlayerControl
