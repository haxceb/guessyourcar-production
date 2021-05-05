import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CarImage from "../../Media/HONDA CITY.png";

const useStyles = makeStyles({
  root: {
    width: "97%",
    padding: 5,
  },
});

export default function UpcomingCarCard({ image, heading, description }) {
  const classes = useStyles();

  return (
    <Card elevation={3} className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="160"
          image={CarImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Mercedes C Class
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Mercedes c class to be launched by 7th june in india.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          style={{ backgroundColor: "#FFC000" }}
        >
          Read More ...
        </Button>
      </CardActions>
    </Card>
  );
}
