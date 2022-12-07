import "../App.css";
import React, { Component } from "react";
import { Grid, IconButton } from "@material-ui/core";
import PlayCircleFilled from "@material-ui/icons/PlayCircleFilled";
import ContinuousSlider from '../MaterialUI/VolumeSlider';
import MediaCard from "../MaterialUI/MusicCard";
import { withStyles } from "@material-ui/core";
import Replay10Icon from '@material-ui/icons/Replay10';
import Forward10Icon from '@material-ui/icons/Forward10';
import SkipPreviousTwoToneIcon from '@material-ui/icons/SkipPreviousTwoTone';
import SkipNextTwoToneIcon from '@material-ui/icons/SkipNextTwoTone';
import QueueMusicRoundedIcon from '@material-ui/icons/QueueMusicRounded';
import { MuiThemeProvider, unstable_createMuiStrictModeTheme } from '@material-ui/core';

const theme = unstable_createMuiStrictModeTheme({
  typography: {
    fontSize: 19 ,
  },
});
const useStyles = theme => ({
  icon: {
    color: 'white'
  },
  slider: {
    color: 'white',
  },
});

class MusicControlBar extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div >
        <Grid container className="music-bar" >
            <Grid 
            item md={3} xs={2}
            className="centerColumn"
            >
                {<MediaCard />}
            </Grid>
            <MuiThemeProvider theme={theme}>
            <Grid
            item md={6} xs={2}
            className="centerColumn"
            >
                <IconButton  className={classes.icon} ><Replay10Icon /></IconButton>
                <IconButton  className={classes.icon} ><SkipPreviousTwoToneIcon /></IconButton>
                <IconButton  className={classes.icon} ><PlayCircleFilled/></IconButton>
                <IconButton  className={classes.icon} ><SkipNextTwoToneIcon/></IconButton>
                <IconButton  className={classes.icon} ><Forward10Icon/></IconButton> 
            </Grid>
            <Grid 
            item md={3} xs={2}
            className="centerColumn"
              >
                <IconButton  className={classes.icon} ><QueueMusicRoundedIcon/></IconButton> 
                <IconButton  className={classes.slider} ><ContinuousSlider/></IconButton> 
            </Grid>
            </MuiThemeProvider>
        </Grid>
      </ div>
    );
  }
}

export default withStyles(useStyles) (MusicControlBar);