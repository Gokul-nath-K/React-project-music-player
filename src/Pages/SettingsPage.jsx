import React, { Component } from "react";
import "../App.css";
import "../styles.css";
import MusicControlBar from "../components/MusicControlBar";
import SideBar from "../components/sideBar";
import AppTopBar from "../components/AppTopBar";
import { Switch } from "@material-ui/core";
import DropDownMenu from "../MaterialUI/dropDown";
import { Typography, withStyles } from "@material-ui/core";

const useStyles = (theme) => ({
  h5: {
    paddingBottom: 0,
    fontSize: "25px",
    color: "#ffffff",
  },
  h3: {
    fontSize: "40px",
    paddingBottom: 0,
    color: "#ffffff",
  },
  body1: {
    fontSize: "16px",
    color: "#8d8d8d",
    marginTop: "13px",
  },
});

class SettingsPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <div className="app-top-bar">
          <AppTopBar />
        </div>
        <div className="side-nav-bar">
          <SideBar />
        </div>

        <div className="content-container">
          <div className="inner-container" id="setting-container">
            <div className="row" id="settings-menu-row">
              <Typography variant="h3" classes={{ h3: classes.h3 }}>
                Settings
              </Typography>
            </div>

            {/* <div className="row" id="settings-menu-row">
              <div className="col-md-12" id="setting-subtitles">
                <Typography variant="h5" classes={{ h5: classes.h5 }}>
                  Languages
                </Typography>
              </div>
              <div className="col-md-9">
                <Typography variant="body1" classes={{ body1: classes.body1 }}>
                  Choose language - Changes will be applied after restarting the
                  app
                </Typography>
              </div>
              <div className="col-md-3">
                {/* drop down menu */}
               {/*} <DropDownMenu />
              </div>
            </div> */}

            {/* Original Code */}

            <div className="row" id="settings-menu-row">
              <div className="col-md-12" id="setting-subtitles">
                <Typography variant="h5" classes={{ h5: classes.h5 }}>
                  Autoplay
                </Typography>
              </div>
              <div className="col-md-9">
                <Typography variant="body1" classes={{ body1: classes.body1 }}>
                  Enjoy non-stop listening. When your audio ends, we'll play you
                  something similar
                </Typography>
              </div>
              <div className="col-md-3">
                <Switch />
              </div>
            </div>

            <div className="row" id="settings-menu-row">
              <div className="col-md-12" id="setting-subtitles">
                <Typography variant="h5" classes={{ h5: classes.h5 }}>
                  Audio quality
                </Typography>
              </div>

              <div className="col-md-9">
                <Typography variant="body1" classes={{ body1: classes.body1 }}>
                  Streaming quality
                </Typography>
              </div>
              <div className="col-md-3">
                <Switch />
                {/* drop down menu */}
                {/* <DropDownMenu /> */}
              </div>

            </div>

            <div className="row" id="settings-menu-row">
              <div className="col-md-12" id="setting-subtitles">
                <Typography variant="h5" classes={{ h5: classes.h5 }}>
                  Personalisation
                </Typography>
              </div>
              <div className="col-md-9">
                <Typography variant="body1" classes={{ body1: classes.body1 }}>
                  App theme
                </Typography>
              </div>
              <div className="col-md-3">
                {/* drop down menu */}
                <DropDownMenu />
              </div>
            </div>
          </div>
        </div>

        <div className="music-control-bar">
          <MusicControlBar />
        </div>
      </>
    );
  }
}

export default withStyles(useStyles)(SettingsPage);
