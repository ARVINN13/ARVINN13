import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import FastRewindIcon from "@material-ui/icons/FastRewind";
import FastForwardIcon from "@material-ui/icons/FastForward";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import FullScreenIcon from "@material-ui/icons/Fullscreen";
import Popover from "@material-ui/core/Popover";

const useStyles = makeStyles({
  controlsWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    zIndex: 1,
  },
  controlIcons: {
    color: "#777",
    fontSize: 50,
    transform: "scale(0.9)",
    "&:hover": {
      color: "#fff",
      transform: "scale(1)",
    },
  },

  bottomIcons: {
    color: "#999",
    "&:hover": {
      color: "#2A398E",
    },
  },
  volumeSlider: {
    width: 100,
  },
});

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const PrettoSlider = withStyles({
  root: {
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export default ({ 
  onPlayPause, 
    playing,
     onRewind, 
     onFastForward,
      muted, 
      onMute, 
      onVolumeChange,
       onVolumeSeekDown,
       volume,
       onToggleFullScreen,
      
    }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "playbackrate-popover" : undefined;

 

  const [name, setName] = useState('Track how product sell over time');
  const myName = () => {
    const val = name;
    val=== "Track how product sell over time" ? 
    setName('Optimal'):
    setName('Track how product sell over time');
  };
  

  return (
    <div className={classes.controlsWrapper}>
      {/* Top controls */}
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="space-between"
        style={{ padding: 16 }}
        
      >
        <Grid item>
          <Typography variant="h2" style={{ color: "#fff" }} >
          {name}
          </Typography>
        </Grid>

       
      </Grid>

      {/* middle controls */}

      <Grid container direaction="row" alignItems="center" justify="center">

        <IconButton onClick={onRewind} className={classes.controlIcons} aria-label="reqind">
          <FastRewindIcon fontSize="inherit" />
        </IconButton>

        <IconButton onClick = {() => {
           onPlayPause()
           myName()}}  className={classes.controlIcons} aria-label="reqind" >
          {playing ? (
              <PauseIcon fontSize="inherit" style={{ color: "#686868" }}/> 
          
          ) : (<PlayArrowIcon fontSize="inherit" style={{ color: "#F3921F" }} />  )} 

          
        </IconButton> 
        

       

        <IconButton onClick={onFastForward} className={classes.controlIcons} aria-label="reqind">
          <FastForwardIcon fontSize="inherit" />
        </IconButton>
      </Grid>

      {/* bottom controls */}
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        style={{ padding: 16 }}
      >
        <Grid item xs={12}>
          <PrettoSlider
            min={0}
            max={100}
            defaultValue={20}
            ValueLabelComponent={ValueLabelComponent}
          />
        </Grid>

        <Grid item>
          <Grid container alignItems="center" direction="row">
            <IconButton onClick = {() => {
              onPlayPause()
              myName()}} className={classes.bottomIcons}>
             {playing ? (
             <PauseIcon fontSize="large" /> 
             ): (
                  <PlayArrowIcon fontSize="large" /> )} 
            </IconButton>

            <IconButton onClick={onMute} className={classes.bottomIcons} >
             {muted ? (<VolumeOffIcon fontSize="large" />) : (<VolumeUpIcon fontSize="large" />
            )} 
            </IconButton>

            <Slider
              min={0}
              max={100}
              value = {volume * 100}
              className={classes.volumeSlider}
              onChange={onVolumeChange}
              onChangeCommitted={onVolumeSeekDown}
            />

            <Button variant="text" style={{ color: "#fff", marginLeft: 16 }}>
              <Typography>05:05</Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            onClick={handlePopover}
            variant="text"
            className={classes.bottomIcons}
          >
            <Typography>1X</Typography>
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          >
            <Grid container direction="column-reverse">
              {[0.5, 1, 1.5, 2].map((rate) => (
                <Button variant="text">
                  <Typography color="secondary">{rate}</Typography>
                </Button>
              ))}
            </Grid>
          </Popover>
          <IconButton onClick={onToggleFullScreen} className={classes.bottomIcons}>
            <FullScreenIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};