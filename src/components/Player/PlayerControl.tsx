import React, { useRef } from "react";
import "../css/PlayerControl.css";
import CustomIcon from "../Basic/CustomIcon";
import Window from "../Basic/Window";

type PlayerControlProps = {
  volume: number;
  muted: boolean;
  handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleMuted: () => void;
  onNext: () => void;
  onPrev: () => void;
};

function PlayerControl({
  volume,
  muted,
  handleVolumeChange,
  handleMuted,
  onNext, 
  onPrev
}: PlayerControlProps) {
  return (
    <>
      <Window title="now" className="player-controlls">
        <div className="player-range">
          <input
            type="range"
            min={0}
            max={100}
            value={volume}
            onInput={handleVolumeChange}
          />
          <button id="volumeIcon" onClick={handleMuted}>
            {muted ? (
              <CustomIcon name="muted" color="#FC6095" />
            ) : (
              <CustomIcon name="volume" color="#FC6095" />
            )}
          </button>
        </div>
        <button onClick={onPrev}>Prev</button>
        <button onClick={onNext}>Next</button>
      </Window>
    </>
  );
}

export default PlayerControl;
