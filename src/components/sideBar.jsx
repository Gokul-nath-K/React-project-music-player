import "../App.css";
import React from "react";
import { Divider, makeStyles, useTheme } from "@material-ui/core";
import Drawer from "@mui/material/Drawer";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const drawerWidth = "15%";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  iconStyle: {
    color: "white",
    // alignItems: 'center',
  },
  textStyle: {
    fontSize: "14px",
    // textAlign: "center",
  },
  divider: {
    backgroundColor: "grey",
  },
  toolbar: theme.mixins.toolbar,
}));

function SideBar() {

  const theme = useTheme();
  const classes = useStyles();
  const history = useHistory();

  const menuItems = [
    {
      text: "HOME",
      icon: <HomeRoundedIcon />,
      path: "/homepage",
    },
    {
      text: "SEARCH",
      icon: <SearchRoundedIcon />,
      path: "/homepage/search",
    },
    {
      text: "SETTINGS",
      icon: <SettingsRoundedIcon />,
      path: "/homepage/settings",
    },
    {
      text: "LOG OUT",
      icon: <SettingsRoundedIcon />,
      path: "/signIn",
    },
  ];

  return (
    <>
      <div className="sideBar">
        <Drawer
          className="drawer"
          variant="permanent"
          anchor="left"
          classes={{ paper: classes.drawerPaper }}
          PaperProps={{
            sx: {
              height: "85%",
              bgcolor: "black",
              color: "white",
              borderRight: "0.25px solid  rgb(150, 149, 149)"
            },
          }}
        >
          <br /><br /><br />
          <Divider className={classes.divider} />
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                onClick={() => {
                  history.push(item.path);
                }}
                >
                <ListItemIcon className={classes.iconStyle}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText classes={{primary: classes.textStyle}}
                primary={item.text} />
              </ListItem>
            ))}
          </List>
          <br />
                <Divider className={classes.divider} />
        </Drawer>
      </div>
    </>
  );
}

export default SideBar;
