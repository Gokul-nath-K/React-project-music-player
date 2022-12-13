import "../App.css";
import React, { useState } from "react";
import {
  Button,
  Grid,
  IconButton,
  makeStyles,
  Slider,
} from "@material-ui/core";
import PlayCircleFilled from "@material-ui/icons/PlayCircleFilled";
import ContinuousSlider from "../MaterialUI/VolumeSlider";
import MediaCard from "../MaterialUI/MusicCard";
import { withStyles } from "@material-ui/core";
import Replay10Icon from "@material-ui/icons/Replay10";
import Forward10Icon from "@material-ui/icons/Forward10";
import SkipPreviousTwoToneIcon from "@material-ui/icons/SkipPreviousTwoTone";
import SkipNextTwoToneIcon from "@material-ui/icons/SkipNextTwoTone";
import QueueMusicRoundedIcon from "@material-ui/icons/QueueMusicRounded";
import { PauseCircleFilledRounded } from "@material-ui/icons";

const useStyles = makeStyles({
  icon: {
    color: "#dddddd",
    fontSize: "140%",
  },
  slider: {
    color: "white",
    fontSize: "140%",
  },
});

function MusicControlBar() {
  const [isPlaying, setPauseClicked] = useState(false);

  const handleClick = () => {
    setPauseClicked(!isPlaying);
  };

  const classes = useStyles();

  return (
    <>
      <div className="music-bar-inner-container">
        <div className="row">
          <div className="col-md-4">
            <div className="controls">{<MediaCard />}</div>
          </div>
          <div className="col-md-4">
            <div className="controls">
              <div className="row" id="music-slider">
                <Slider></Slider>
              </div>
              <IconButton className={classes.icon}>
                <Replay10Icon className={classes.icon} />
              </IconButton>
              <IconButton className={classes.icon}>
                <SkipPreviousTwoToneIcon className={classes.icon} />
              </IconButton>
              <IconButton className={classes.icon} onClick={handleClick}>
                {isPlaying ? (
                  <PauseCircleFilledRounded className={classes.icon} />
                ) : (
                  <PlayCircleFilled className={classes.icon} />
                )}
              </IconButton>
              <IconButton className={classes.icon}>
                <SkipNextTwoToneIcon className={classes.icon} />
              </IconButton>
              <IconButton className={classes.icon}>
                <Forward10Icon className={classes.icon} />
              </IconButton>
            </div>
          </div>
          <div className="col-md-4" id="music-div-3">
            <IconButton className={classes.icon}>
              <QueueMusicRoundedIcon className={classes.icon} />
            </IconButton>
            <Button>
              <ContinuousSlider className={classes.icon} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MusicControlBar;
