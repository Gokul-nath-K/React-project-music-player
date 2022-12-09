import React, { Component } from 'react'
import '../App.css'
import '../styles.css'
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { IconButton } from '@material-ui/core';


function AppTopBar() {
    return ( 
        <>
                <IconButton className="avatar">
                  <AccountCircleRoundedIcon 
                    sx={{
                      color: 'white',
                      fontSize: 50,
                    }}
                  />
                </IconButton>
        </>
     );
}

export default AppTopBar;