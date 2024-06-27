

import React from "react";
import "./Home.css";
import video from "../../Assets/video2.mp4";
import { Autocomplete } from '@react-google-maps/api';
import { InputBase, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles.js';

const Home = ({ onPlaceChanged, onLoad, onSearch }) => {
  const classes = useStyles();

  return (
    <section className="home">
      <div className="overlay">
        <video src={video} muted autoPlay loop type="video/mp4"></video>
      </div>
      <div className="homeContent">
        <div className="textDiv">
          <h1 className="homeTitle">Find Your Perfect Get away</h1>
          <p className="quote">Travel is the only thing you buy that makes you richer</p>
        </div>
        <div className="search-bar">
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <InputBase
                placeholder="Where are you going?"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Autocomplete>
          <Button className="search-button" onClick={onSearch}>
            <SearchIcon />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Home;