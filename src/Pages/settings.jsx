import React, { Component } from "react";
import { Container, Grid, makeStyles, Typography, withStyles } from "@material-ui/core";
import { Switch } from "@material-ui/core";
import '../styles.css';
import DropDownMenu from "../MaterialUI/dropDown";

const useStyles = theme => ({
  h5: {
    paddingBottom: "18px", 
  },
  body1: {
    color: "#8d8d8d",
  },
});

class Settings extends Component {
  state = {};
  render() {
    const {classes} = this.props;
    return (
      <>
        <Container className="settings-container">
          <div className="setting-inner-container">
            <header>
              <Typography variant="h3">Settings</Typography>
            </header>
            <div className="languages">
              <Typography variant="h5" classes={{h5: classes.h5}}>Languages</Typography>
              <Typography variant="body1" classes={{body1: classes.body1}}>
                Choose language - Changes will be applied after restarting the app
              </Typography>
              {/* drop down menu */}
                  <DropDownMenu />
            </div>
            <div className="autoplay">
              <Typography variant="h5" classes={{h5: classes.h5}}>Autoplay</Typography>
              <Grid container>
                <Grid item md={10}>
                  <Typography variant="body1" classes={{body1: classes.body1}}>
                    Enjoy non-stop listening. When your audio ends, we'll play
                    you something similar
                  </Typography>
                </Grid>
                <Grid item md={2}>
                  {/* Toggle button */}
                  <Switch />
                </Grid>
              </Grid>
            </div>
            <div className="audio-quality">
              <Grid container >
                <Grid item md={12}>
                  <Typography variant="h5" classes={{h5: classes.h5}}>Audio quality</Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item md={10}>
                  <Typography variant="body1" classes={{body1: classes.body1}}>Streaming quality</Typography><br />
                </Grid>
                <Grid item md={2}>
                  {/* drop down menu */}
                  <DropDownMenu />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item md={10}>
                  <Typography variant="body1" classes={{body1: classes.body1}}>Auto adjust quality </Typography>
                </Grid>
                <Grid item md={2}>
                  <Switch />
                </Grid>
              </Grid>
            </div>
            <div className="personalisation">
              <Typography variant="h5" classes={{h5: classes.h5}}>Personalisation</Typography>
              <Typography variant="body1" classes={{body1: classes.body1}}>App theme</Typography>
              {/* drop down menu */}
                  <DropDownMenu />
            </div>
          </div>
        </Container>
      </>
    );
  }
}

export default withStyles(useStyles) (Settings);
