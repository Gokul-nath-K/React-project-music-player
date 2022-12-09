import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: 100,
    backgroundColor: '#000000'
  },
  cover: {
    width: 90,
    height: 100,
  },
  h6: {
    color: '#ffffff',
    fontSize: '17px'
  }
}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image="ranjithame.jpeg"
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6" className={classes.h6}>
            Ranjithame
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" className={classes.h6} >
          Thalapathy Vijay
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
