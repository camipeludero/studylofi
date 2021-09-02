import React, { Component } from "react";
import ReactPlayer from "react-player";
import PlayerControl from "./PlayerControl";

export default class Video extends Component {
  constructor() {
    super();
    this.state = {
      muted: true,
      volume: 0,
      volumeBar: 0,
      url: [
        "https://www.youtube.com/watch?v=5wRWniH7rt8",
        "https://www.youtube.com/embed/gnZImHvA0ME",
        "https://www.youtube.com/embed/_tV5LEBDs7w",
        "https://www.youtube.com/watch?v=BTYAsjAVa3I",
        "https://www.youtube.com/watch?v=iEamJeEwJUA",
      ],
      config: {
        youtube: {
          playerVars: {
            start: 92,
            rel: 0,
          },
        },
      },
    };
    this.Video = React.createRef();
  }

  handleVolumeChange = (e) => {
    this.setState({
      muted: false,
      volume: e.target.value / 100,
      volumeBar: e.target.value,
    });
  };

  handleMuted = (e) => {
    if (this.state.muted) {
      this.setState({
        muted: false,
      });
    } else {
      this.setState({
        muted: true,
      });
    }
  };

  render() {
    const { volume, volumeBar, muted, url, config } = this.state;

    return (
      <>
        <div className="video-container">
          <ReactPlayer
            url={url}
            config={config}
            controls={false}
            muted={muted}
            volume={volume}
            loop={true}
            playing={true}
            ref={this.Video}
          />
        </div>
        <PlayerControl
          volume={volumeBar}
          muted={muted}
          handleVolumeChange={this.handleVolumeChange}
          handleMuted={this.handleMuted}
        />
      </>
    );
  }
}
