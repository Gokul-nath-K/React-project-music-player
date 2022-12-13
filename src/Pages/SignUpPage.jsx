import { Button, ButtonGroup, FormControlLabel, Checkbox, Typography, makeStyles, Grid } from '@material-ui/core';
import { AccountCircleOutlined } from '@mui/icons-material';
import { ButtonBase } from '@mui/material';
import TextField from '@mui/material/TextField';
import { spacing } from '@mui/system';
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  typography: {
    fontSize: "15px",
  },
  submit: {
    textDecoration: 'none',
    marginTop: '15px',
    marginBottom: '18px'
  },
  headerIcon: {
    fontSize: 400,
  }
}));



function SignupPage() {

  const classes = useStyles();
  return ( 
    <>
      <div className={classes.outerContainer}>
        <div className={classes.paper} >
          <form className='form-root'>
          <TextField
            variant='outlined'
            margin= 'normal'
            required
            fullWidth  
            id='email'
            label= 'Full Name'
          />
          <TextField
            variant='outlined'
            margin= 'normal'
            required
            fullWidth  
            id='email'
            label= 'Email Address'
          />
          <TextField 
            variant='outlined'
            margin= 'normal'
            required
            fullWidth  
            id='email'
            label= 'Password'
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Link to='/homepage'  className={classes.submit}>
          <Button
            className={classes.submit}
            type='submit'
            fullWidth
            variant='contained'
            color='secondary'
            >
              Sign up
          </ Button>
          </Link>
          <Typography
          className={ classes.typography }
          >
            <Grid container justifyContent='center' >
              <Grid item >
                <Link to='/signIn' className={classes.submit}>
                Already have an account? Sign in.
                </Link>
              </Grid >
            </ Grid>
          </Typography>
          </form>

        </div>
      </div>
    </>
   );
}

export default SignupPage;