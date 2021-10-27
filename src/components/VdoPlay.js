import React, { useState, useRef } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import ReactPlayer from "react-player";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import PlayerControls from "./PlayerControls";
import screenfull from "screenfull";

const useStyles = makeStyles({
  playerWrapper: {
    width: "100%",
    position: "relative",
  },
});

function VdoPlay() {
  const classes = useStyles();
  const [state, setState] = useState({
      playing:false,
      muted: false,
      volume: 0.5,
      
     
  });

  const {playing, muted, volume,} = state;

  

 


  const playerRef = useRef( null );

  const playerContainerRef = useRef( null );

  const handlePlayPause = () => {
      setState({...state,playing:!state.playing});
     
  };

  const handleRewind = () => {
      playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10)
  };

  const handleFastForward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10)
};

const handleMute = () => {
    setState({...state,muted:!state.muted});
  };

  const handleVolumeChange = (e, newValue) => {
    setState({...state,
        volume:parseFloat(newValue/100), 
        muted: newValue=== 0 ? true : false,
    });
  };

  const handleVolumeSeekDown = (e, newValue) => {
    setState({...state,
        volume:parseFloat(newValue/100), 
        muted: newValue=== 0 ? true : false,
    });
  };

  const toggleFullScreen = () => {
      screenfull.toggle(playerContainerRef.current)
  };

  
 


  return (
    <>        
    

   <Toolbar />
      <Container maxWidth="md">
        <div ref= {playerContainerRef} className={classes.playerWrapper}>
          <ReactPlayer
          ref = {playerRef}
            width={"100%"}
            height={"100%"}
            url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            muted={muted}
            playing={playing}
            volume={volume}            
          />

          <PlayerControls 
          onPlayPause={handlePlayPause}
         
         
          playing={ playing }
          onRewind = { handleRewind } 
          onFastForward={handleFastForward}
          muted={muted}
          onMute={ handleMute}
          onVolumeChange={ handleVolumeChange }
          onVolumeSeekDown={ handleVolumeSeekDown }
          volume={volume}
          onToggleFullScreen={ toggleFullScreen }
          />
        </div>
      </Container>
    </>
  );
}

export default VdoPlay;