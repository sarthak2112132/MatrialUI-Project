import { Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import Feed from "./components/Feed";
import { makeStyles } from "@material-ui/core";
import { theme } from "./theme";
import Add from "./components/Add";
const useStyle = makeStyles({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
});
function App() {
  const classes = useStyle();
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item sm={3} xs={2}>
          <LeftBar />
        </Grid>
        <Grid item sm={6} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={2} className={classes.right}>
          <RightBar />
        </Grid>
      </Grid>
      <Add />
    </>
  );
}

export default App;
