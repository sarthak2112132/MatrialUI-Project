import {
  alpha,
  AppBar,
  Box,
  InputBase,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import CancelIcon from "@mui/icons-material/Cancel";
import NotificationIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { theme } from "../theme";
const userStyle = makeStyles({
  Navbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  Search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "70",
    },
    width: "40%",
  },
  searchBtn: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  icons: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
});
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = userStyle({ open });
  console.log(open);
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.Navbar}>
        <Typography variant="h6">Knowledge</Typography>
        <Box className={classes.Search}>
          <SearchIcon />
          <InputBase placeholder="Search..." />
          <CancelIcon
            sx={{ display: { sm: "none" } }}
            onClick={() => setOpen(false)}
          />
        </Box>
        {!open && (
          <>
            <Stack spacing={1} direction={"row"}>
              <SearchIcon
                className={classes.searchBtn}
                sx={{ display: { sm: "none" }, paddingTop: 1 }}
                onClick={() => setOpen(true)}
              />
              <Badge
                badgeContent={4}
                color="secondary"
                sx={{ paddingTop: { sm: 1, xs: 1 } }}
              >
                <MailIcon />
              </Badge>
              <Badge
                badgeContent={4}
                color="secondary"
                sx={{ paddingTop: { sm: 1, xs: 1 } }}
              >
                <NotificationIcon />
              </Badge>
              <Avatar
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/8647814/pexels-photo-8647814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              />
            </Stack>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
