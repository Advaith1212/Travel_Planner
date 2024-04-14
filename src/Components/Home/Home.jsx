import React from "react";
import "./Home.css";
import video from "../../Assets/waterfalls.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { TfiFacebook } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { TbBrandTripadvisor } from "react-icons/tb";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles.js';


const Home = ({ searchValue, onSearchChange, onSearchTrigger, onPlaceChanged, onLoad, onSearch }) => {
  const classes = useStyles();
  const handleInputChange = (event) => {
    onSearchChange(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearchTrigger();
    }
  };

  return (
    <section className="home">
      <div className="overLay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container">
        <div className="textDiv">
          {/* <span className="smallText">Our Packages</span> */}
          <h1 className="homeTitle">Search your Holiday</h1>
        </div>
        <div className="cardDiv grid">
          <div className="destinationInput">
            {/* <label htmlFor="city" className="label1">
              Search your destination:
            </label> */}


            {/* <div className="input flex"> */}
              {/* <input
                type="text"
                placeholder="Enter name here...."
                value={searchValue}
                onChange={handleInputChange}
                // onKeyPress={handleKeyPress}
              /> */}
              {/* <GrLocation className="icon" onClick={onSearchTrigger} /> */}
              <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Enter your destination"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                  />
                </div>
              </Autocomplete>
              <Button variant="contained" color="primary" onClick={onSearch}>
                Search
              </Button>


            {/* </div> */}
          </div>
        </div>
        <div className="searchOptions flex">
          <HiFilter className="icon" />
          <span>MORE FILTERS</span>
        </div>
      </div>
      <div className="homeFooterIcons flex">
        <div className="rightIcons">
          <TfiFacebook className="icon" />
          <FaInstagram className="icon" />
          <TbBrandTripadvisor className="icon" />
        </div>
        <div className="leftIcons">
          <BsListTask className="icon" />
          <TbApps className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Home;