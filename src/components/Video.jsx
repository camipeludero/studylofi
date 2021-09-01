import React, { Component } from 'react';
import YouTube from 'react-youtube';

export default class Video extends Component {
    render(){    
        
        let videoUrl = "gnZImHvA0ME";
        const opts = {
            playerVars: {
              autoplay: 1,
              start: 95,
              controls: 0,
            },
          };
        
        return(
            <>
            <div className="video-container">
            <YouTube opts={opts}
            videoId={videoUrl}
            onReady={(e) => e.target.playVideo()}
            onPause={(e) => e.target.playVideo()}
          />
            </div>
            </>
        )

        
    }



   
}
<iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="100%" height="100%" src="https://www.youtube.com/embed/Yrm0UCCipU0?autoplay=1&amp;mute=1&amp;controls=0&amp;start=80&amp;origin=https%3A%2F%2Flifeat.io&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1" id="widget2"></iframe>