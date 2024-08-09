import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import {
  Button,
  Container,
  MenuItem,
  Modal,
  TextField,
  Tooltip,
  RadioGroup,
  Radio,
  FormControl,
  FormControlLabel,
  FormLabel,
  Snackbar,
  Alert,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const userStyle = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 10,
    right: 10,
    backgroundColor: theme.palette.primary.main,
    padding: 20,
    borderRadius: 36,
    color: "white",
  },
  container: {
    width: "550px",
    height: 750,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vh",
      height: "100vh",
    },
  },
  item: {
    [theme.breakpoints.up("sm")]: {
      width: "80%",
    },
    width: "100%",
  },
}));
export default function Add() {
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const classes = userStyle();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };
  return (
    <>
      <Tooltip>
        <Button color="inherit" onClick={() => setOpen(true)}>
          <AddIcon className={classes.fab} />
        </Button>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <form>
            <div className="">
              <TextField
                label="Title"
                size="small"
                variant="standard"
                className={classes.item}
              />
            </div>
            <br />
            <div className="">
              <TextField
                id="standard-multiline-static"
                label="Description"
                multiline
                rows={4}
                defaultValue="Default Value"
                variant="outlined"
                className={classes.item}
              />
            </div>
            <br />
            <div>
              <TextField select label="Visiblity" className={classes.item}>
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Protected">Protected</MenuItem>
              </TextField>
            </div>
            <br />
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Who can Comment
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="EveryBody"
                    control={<Radio />}
                    label="Everybody"
                  />
                  <FormControlLabel
                    value="My Friends"
                    control={<Radio />}
                    label="My Friends"
                  />
                  <FormControlLabel
                    value="Nobody"
                    control={<Radio />}
                    label="Nobody"
                  />
                  <FormControlLabel
                    value="Nobody"
                    control={<Radio />}
                    label="Custom (Optional)"
                    disabled
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <br />
            <br />
            <div>
              <Button
                color="success"
                variant="outlined"
                style={{ marginRight: 10 }}
                onClick={() => setOpenAlert(true)}
              >
                Create
              </Button>
              <Button
                color="secondary"
                variant="outlined"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar open={openAlert} onClose={handleClose} autoHideDuration={3000}>
        <Alert onClose={handleClose} severity="success">
          This is Success Message
        </Alert>
      </Snackbar>
    </>
  );
}
