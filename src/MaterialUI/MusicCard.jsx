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
  },
  cover: {
    width: 100,
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image="https://res.cloudinary.com/dluspcdoz/image/upload/v1669982037/samples/animals/reindeer.jpg"
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
            Ranjithame
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          Thalapathy Vijay
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
