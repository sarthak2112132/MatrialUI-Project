import React from "react";
import { makeStyles } from "@material-ui/core";
import { Container, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FriendsIcon from "@mui/icons-material/Group";
import ListIcon from "@mui/icons-material/List";
import CameraIcon from "@mui/icons-material/Camera";
import VideoIcon from "@mui/icons-material/VideoCameraFrontSharp";
import AppIcon from "@mui/icons-material/Apps";
import CollectionIcon from "@mui/icons-material/Collections";
import MapIcon from "@mui/icons-material/MapsUgc";
import { theme } from "../theme";

const useStyle = makeStyles({
  container: {
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    color: "white",
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: " 1px solid #ece7e7",
      paddingTop: "100px",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(5),
      cursor: "pointer",
      position: "relative",
      left: 18,
    },
  },
  text: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "16px",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
  },
});
const LeftBar = () => {
  const classes = useStyle();
  return (
    <>
      <Container className={classes.container}>
        <div className={classes.item}>
          <HomeIcon className={classes.icon} />
          <Typography className={classes.text}>Homepage</Typography>
        </div>
        <div className={classes.item}>
          <FriendsIcon className={classes.icon} />
          <Typography className={classes.text}>Friends</Typography>
        </div>
        <div className={classes.item}>
          <ListIcon className={classes.icon} />
          <Typography className={classes.text}>Lists</Typography>
        </div>
        <div className={classes.item}>
          <CameraIcon className={classes.icon} />
          <Typography className={classes.text}>Camera</Typography>
        </div>
        <div className={classes.item}>
          <VideoIcon className={classes.icon} />
          <Typography className={classes.text}>Video</Typography>
        </div>
        <div className={classes.item}>
          <MapIcon className={classes.icon} />
          <Typography className={classes.text}>Maps</Typography>
        </div>
        <div className={classes.item}>
          <AppIcon className={classes.icon} />
          <Typography className={classes.text}>Apps</Typography>
        </div>
        <div className={classes.item}>
          <CollectionIcon className={classes.icon} />
          <Typography className={classes.text}>Collection</Typography>
        </div>
        <div className={classes.item}>
          <HomeIcon className={classes.icon} />
          <Typography className={classes.text}>Home Page</Typography>
        </div>
      </Container>
    </>
  );
};

export default LeftBar;
