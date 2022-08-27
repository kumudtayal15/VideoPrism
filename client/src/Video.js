import React,{useState} from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Container
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    fontFamily: "'Pacifico', cursive",
    fontSize: "2.2rem",
    color: "#B3B3B3"
  },
  main: {
    backgroundColor: "#282828",
    borderRadius: "15px",
    padding: "10px"
  },


}));

function Video(props) {
  const classes = useStyles();
  // console.log(props.location.state);
  return (
    <Container>
      <AppBar position="static" className={classes.main}>
        <Toolbar>
          <span
            className="fas fa-icons fa-3x"
            style={{
              color: "#B0B3B8",
              marginLeft: "10px",
              marginRight: "15px"
            }}
          ></span>
          <Typography variant="h6" className={classes.title}>
            VideoPrism
          </Typography>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default Video;