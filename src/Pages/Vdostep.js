import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import ReactPlayer from "react-player";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import PlayerControls from "../components/PlayerControls";
import screenfull from "screenfull";



const useStyles = makeStyles({
  playerWrapper: {
    width: "100%",
    position: "relative",
    marginBottom: '5.9rem',
   
      
  },
});

function Vdostep() {
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
   
    <div className="demo-row row">
    <NavLink class="nav-link" aria-current="page" to="/login">                
    <h4 className="text-right mt-4" style={{color:'#ffff'}}> 
    <i className="fa fa-angle-double-left" aria-hidden="true"></i> back to Home</h4>
    </NavLink>

    
    <div className="demo-col1 col-12 col-lg-8 text-center">
     
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
      </div> 

      <div className="demo-col2 col-12 col-lg-4 text-center">
        <h1> Step:1 hello this is demo steps</h1>
        <h1> Step:2 hello this is demo steps</h1>
        <h1> Step:3 hello this is demo steps</h1>
        <h1> Step:4 hello this is demo steps</h1>
      </div> 

    </div>  

     

    </>

  );
}

export default Vdostep;