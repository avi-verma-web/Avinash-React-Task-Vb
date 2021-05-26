import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountries } from "../redux/actions";
import DisplayResult from "./DisplayResult";

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
  inp: {
    width: "60%",
    height: "40px",
    borderRadius: "10px",
    border: "1px solid black",
  },
  bt:{
    margin:"2px",
    borderRadius:"10px",
    cursor:"pointer"
  }
}));

export default function Album() {
  const [asc, setAsc] = useState(true);
  const classes = useStyles();
  const [country, setcountry] = useState();
  const countries = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    if (country) {
      dispatch(fetchCountries(country));
    }
  }, [country, dispatch]);
  const handleChange = (e) => {
    setcountry(e.target.value);
  };

  const Asccompare = (a, b) => {
    if (a.name.toUpperCase() < b.name.toUpperCase()) {
      return -1;
    } else if (a.name.toUpperCase() > b.name.toUpperCase()) {
      return 1;
    }
  };

  const Desccompare = (a, b) => {
    if (a.name.toUpperCase() < b.name.toUpperCase()) {
      return 1;
    } else if (a.name.toUpperCase() > b.name.toUpperCase()) {
      return -1;
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Avinash Country Search
            </Typography>
            <div className={classes.inputbar}>
              <input
                className={classes.inp}
                placeholder="Search Country Here"
                onChange={handleChange}
              ></input>
              <button
                className={classes.bt}
                onClick={() => {
                  setAsc(true);
                }}
              >
                ASC
              </button>
              <button
                className={classes.bt}
                onClick={() => {
                  setAsc(false);
                }}
              >
                DESC
              </button>
            </div>
          </Container>
        </div>
        {asc ? (
          <DisplayResult
            items={countries.items.sort(Asccompare)}
            err={countries.error}
            load={countries.loading}
          ></DisplayResult>
        ) : (
          <DisplayResult
            items={countries.items.sort(Desccompare)}
            err={countries.error}
            load={countries.loading}
          ></DisplayResult>
        )}
      </main>
    </React.Fragment>
  );
}
