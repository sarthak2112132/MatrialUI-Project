import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { theme } from "../theme";

const useStyle = makeStyles({
  card: {
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  text: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px",
    },
  },
});
const Post = ({ img, title }) => {
  const classes = useStyle();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} component={"img"} image={img} />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1" className={classes.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            molestias recusandae non accusamus maxime repellat sapiente!
            Architecto eum ex consequatur cum doloremque fuga aliquid
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="text" color="secondary">
          Share
        </Button>
        <Button variant="text" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
