import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Chakr from "../chak.gif";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  inputbar: {
    display: "flex",
    justifyContent: "center",
  },
  chakra: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "300px",
    left: "40%",
  },
  nor: { display: "flex", justifyContent: "center", alignItems: "center" },
}));

export default function DisplayResult({ items, err, load }) {
  const classes = useStyles();
  if (load) {
    return <img src={Chakr} className={classes.chakra} alt="logo" />;
  } else if (items.length !== 0) {
    return (
      <React.Fragment>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {items.map((card, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.flag}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      This country has population of {card.population}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={card.name}>
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => console.log("Here")}
                      >
                        View
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </React.Fragment>
    );
  } else if (err !== "") {
    return <h1 className={classes.nor}>No results Found</h1>;
  } else {
    return null;
  }
}
