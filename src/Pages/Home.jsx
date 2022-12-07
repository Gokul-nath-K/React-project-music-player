import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { IconButton,  MuiThemeProvider, Typography } from "@material-ui/core";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";


class Home extends Component {
  render() {
    const {classes} = this.props; 

    return (
      <div className="inner-container">
        <div className="row" id="home-top-bar">
            <div className="pull-right">
                <IconButton className="avatar">
                  <AccountCircleRoundedIcon 
                    sx={{
                      color: 'white',
                      fontSize: 50,
                    }}
                  />
                </IconButton>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10">
            <Typography variant="h4" className="top-element">
              Recently played
            </Typography>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <Card sx={{ maxWidth: 180 }}>
              <CardMedia component="img" height="170" image="ennai-vittu.jpg" />
            </Card>
            <Typography className="song">
              Ennai Vittu (From "Love Today")
              <br />
              Sid Sriram,Yuvan Shankar Raja
            </Typography>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-10">
            <Typography variant="h4" className="wish">
              Good Morning..!
            </Typography>
          </div>
          <div className="col-md-2">hello</div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <Card sx={{ maxWidth: 180 }}>
              <CardMedia
                component="img"
                height="170"
                image="arabic-kuthu.jpg"
              ></CardMedia>
            </Card>
            <Typography variant="h6" className="podcast-name">
              Trending Now
            </Typography>
          </div>
          <div className="col-md-3">
            <Card sx={{ maxWidth: 180 }}>
              <CardMedia
                component="img"
                height="170"
                image="engeyum-kadhal.jpg"
              ></CardMedia>
            </Card>
            <Typography variant="h6" className="podcast-name">
              Harris Hits
            </Typography>
          </div>
          <div className="col-md-3">
            <Card sx={{ maxWidth: 180 }}>
              <CardMedia
                component="img"
                height="170"
                image="moonu.jpg"
              ></CardMedia>
            </Card>
            <Typography variant="h6" className="podcast-name">
              High On Love
            </Typography>
          </div>
          <div className="col-md-3">
            <Card sx={{ maxWidth: 180 }}>
              <CardMedia
                component="img"
                height="170"
                image="pathala.jpg"
              ></CardMedia>
            </Card>
            <Typography variant="h6" className="podcast-name">
              Top Tamil Kuthu
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
