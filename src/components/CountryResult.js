import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    margin: "50px",
    cursor: "auto",
  },
});

export default function CountryResult() {
  let history = useHistory();
  const classes = useStyles();
  const countries = useSelector((state) => state);

  let { countryName } = useParams();

  let result = countries.items.filter((e) => {
    return e.name === countryName;
  });

  console.log(result);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={result[0].flag}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {result[0].name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p>Capital : {result[0].capital}</p>
            <p>Currency : {result[0].currencies[0].name}</p>
            <p>Population : {result[0].population}</p>
            <p>Region : {result[0].region}</p>
            <p>Native Name : {result[0].nativeName}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>{history.push("/")}}>
          Back
        </Button>
      </CardActions>
    </Card>
  );
}
