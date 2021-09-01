import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import PlayerControl from './PlayerControl';

export default class Video extends Component {
    constructor(){
        super()
        this.state = {
            muted: true,
            volume: 0,
            volumeBar: 0
        }
        this.Video = React.createRef()
    }

        handleVolumeChange = (e) => {
            this.setState({
                muted: false,
                volume: e.target.value/100, 
                volumeBar: e.target.value
            })
        }

    render(){    
        const {volume, volumeBar, muted} = this.state;
        
        return(
            <>
            <div className="video-container">
            <ReactPlayer 
            url={['https://www.youtube.com/embed/gnZImHvA0ME?t=92',
            'https://www.youtube.com/embed/_tV5LEBDs7w?t=92']}
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
            handleVolumeChange={this.handleVolumeChange}
            />
            </>
        )

        
    }



   
}
