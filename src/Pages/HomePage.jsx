import React, { Component } from "react";
import "../App.css";
import "../styles.css";
import Records from '../Data/homePage_db.json'
import MusicControlBar from "../components/MusicControlBar";
import SideBar from "../components/sideBar";
import AppTopBar from "../components/AppTopBar";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import {
  CardContent,
  Typography,
  withStyles,
} from "@material-ui/core";

const useStyles = (theme) => ({
  h6: {
    color: "#ffffff",
    fontSize: "16px",
    textAlign: "center",
  },
  h5: {
    color: "white",
  },
});

class HomePage extends Component {
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
        <div className='content-container'>
        <div className="inner-container">
          <div className="row" id="row">
            <div className="col-md-10">
              <Typography variant="h5" classes={{ h5: classes.h5 }}>
                Recently played
              </Typography>
            </div>
          </div>


          <div className="row" id="row">
            <div className="col-md-3">
              <Card  sx={{ maxWidth: 200, maxHeight: 250, bgcolor: "#212121" }}>
                <CardMedia
                  component="img"
                  height="170"
                  image="Pictures/ennai-vittu.jpg"
                  sx={{ padding: "10px", paddingBottom: "0px" }}
                  />
                <CardContent
                  sx={{padding:"10px"}}
                  >
                  <Typography variant="h6" classes={{ h6: classes.h6 }}>
                    Ennai Vittu <br /> (From "Love Today")
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
          <br />


          <div className="row" id="row">
        {
          Records && Records.map((record) => {
                return (
                    <div className="col-md-3">
                        <Card sx={{ maxWidth: 200, maxHeight: 250, bgcolor: "#212121" }} >
                        <CardMedia
                            component='img'
                            height='170'
                            image={ record.image }
                            sx={{ padding: "10px", paddingBottom: "0px" }}
                        />
                        <CardContent>
                        <Typography variant="h6" classes={{ h6: classes.h6 }}>
                            {record.name}
                      </Typography>
                        </CardContent>
                        </Card>
                    <br />
                    </div>
                );
            })
        }
      </div>



          {/* <div className="row" id="row">
            <div className="col-md-10">
              <Typography variant="h5" classes={{ h5: classes.h5 }}>
                Hits different!
              </Typography>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row" id="row">
            <div className="col-md-3">
              <Card sx={{ maxWidth: 200, maxHeight: 250, bgcolor: "#212121" }}>
                <CardMedia
                  component="img"
                  height="170"
                  image="arabic-kuthu.jpg"
                  sx={{ padding: "10px", paddingBottom: "0px" }}
                ></CardMedia>
                <CardContent
                  sx={{padding:'10px'}}
                >
                  <Typography variant="h6" classes={{ h6: classes.h6 }}>
                    Trending Now
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="col-md-3">
              <Card sx={{ maxWidth: 200, maxHeight: 250, bgcolor: "#212121" }}>
                <CardMedia
                  component="img"
                  height="170"
                  image="engeyum-kadhal.jpg"
                  sx={{ padding: "10px", paddingBottom: "0px" }}
                ></CardMedia>
                <CardContent
                  sx={{padding:'10px'}}
                >
                  <Typography variant="h6" classes={{ h6: classes.h6 }}>
                    Harris Hits
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="col-md-3">
              <Card sx={{ maxWidth: 200, maxHeight: 250, bgcolor: "#212121" }}>
                <CardMedia
                  component="img"
                  height="170"
                  image="moonu.jpg"
                  sx={{ padding: "10px", paddingBottom: "0px" }}
                ></CardMedia>
                <CardContent
                  sx={{padding:'10px'}}
                >
                  <Typography variant="h6" classes={{ h6: classes.h6 }}>
                    High On Love
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="col-md-3">
              <Card sx={{ maxWidth: 200, maxHeight: 250, bgcolor: "#212121" }}>
                <CardMedia
                  component="img"
                  height="170"
                  image="pathala.jpg"
                  sx={{ padding: "10px", paddingBottom: "0px" }}
                ></CardMedia>
                <CardContent
                  sx={{padding:'10px'}}
                >
                  <Typography variant="h6" classes={{ h6: classes.h6 }}>
                    Top Tamil Kuthu
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="row" id="row">
            <div className="col-md-10">
              <Typography variant="h5" classes={{ h5: classes.h5 }}>
                Recommended Artist Radio
              </Typography>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row" id="row">
            <div className="col-md-3">
              <Card sx={{ maxWidth: 200, maxHeight: 250, bgcolor: "#212121" }}>
                <CardMedia
                  component="img"
                  height="170"
                  image="arabic-kuthu.jpg"
                  sx={{ padding: "10px", paddingBottom: "0px" }}
                ></CardMedia>
                <CardContent
                  sx={{padding:'10px'}}
                >
                  <Typography variant="h6" classes={{ h6: classes.h6 }}>
                    Trending Now
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="col-md-3">
              <Card sx={{ maxWidth: 200, maxHeight: 250, bgcolor: "#212121" }}>
                <CardMedia
                  component="img"
                  height="170"
                  image="engeyum-kadhal.jpg"
                  sx={{ padding: "10px", paddingBottom: "0px" }}
                ></CardMedia>
                <CardContent
                  sx={{padding:'10px'}}
                >
                  <Typography variant="h6" classes={{ h6: classes.h6 }}>
                    Harris Hits
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="col-md-3">
              <Card sx={{ maxWidth: 200, maxHeight: 250, bgcolor: "#212121" }}>
                <CardMedia
                  component="img"
                  height="170"
                  image="moonu.jpg"
                  sx={{ padding: "10px", paddingBottom: "0px" }}
                ></CardMedia>
                <CardContent
                  sx={{padding:'10px'}}
                >
                  <Typography variant="h6" classes={{ h6: classes.h6 }}>
                    High On Love
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="col-md-3">
              <Card sx={{ maxWidth: 200, maxHeight: 250, bgcolor: "#212121" }}>
                <CardMedia
                  component="img"
                  height="170"
                  image="pathala.jpg"
                  sx={{ padding: "10px", paddingBottom: "0px" }}
                ></CardMedia>
                <CardContent
                  sx={{padding:'10px'}}
                >
                  <Typography variant="h6" classes={{ h6: classes.h6 }}>
                    Top Tamil Kuthu
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
          <br />*/}
        </div> 
        </div>
        <div className="music-control-bar">
          <MusicControlBar />
        </div>
      </>
    );
  }
}

export default withStyles(useStyles)(HomePage);
