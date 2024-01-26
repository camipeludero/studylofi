import React, { useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import PlayerControl from "./PlayerControl";

export default function VideoPlayer() {
  const urls = [
    "https://www.youtube.com/watch?v=5wRWniH7rt8",
    "https://www.youtube.com/embed/gnZImHvA0ME",
    "https://www.youtube.com/embed/_tV5LEBDs7w",
    "https://www.youtube.com/watch?v=BTYAsjAVa3I",
    "https://www.youtube.com/watch?v=iEamJeEwJUA",
  ];
  const [url, setUrl] = useState<number>(0)
  const video = useRef<any>();
  const [muted, setMuted] = useState<boolean>(true);
  const [volume, setVolume] = useState<number>(0);
  const [volumeBar, setVolumeBar] = useState<number>(0);
  const config = {
    playerVars: {
      start: 92,
      rel: 0,
    },
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value)
    setMuted(false);
    setVolume( newValue / 100);
    setVolumeBar(newValue);
  };

  const handleMuted = () => {
    setMuted((prev) => !prev);
  };

  console.log(url, urls.length)
  return (
    <>
      <div className="video-container">
        <ReactPlayer
          url={urls[url]}
          config={config}
          controls={false}
          muted={muted}
          volume={volume}
          loop={true}
          playing={true}
          ref={video}
        />
      </div>
      <PlayerControl
        volume={volumeBar}
        muted={muted}
        handleVolumeChange={handleVolumeChange}
        handleMuted={handleMuted}
        onNext={() => setUrl(prev => prev < urls.length - 1 ? prev + 1 : 0)}
        onPrev={() => setUrl(prev => prev === 0 ? urls.length - 1 : prev - 1)}
      />
    </>
  );
}
