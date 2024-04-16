
import React from "react";
import { Grid } from "@material-ui/core";
import List from "../List/List";
import Map from "../Map/Map";
import Image from '../../Assets/bg16.jpeg'
import styled from 'styled-components';

const AppContainer = styled.div`
  background-image: url(${Image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  filter: blur(5px)

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    f;
    z-index: -1;
  }

`;

const ListAndMap = ({
  isLoading,
  childClicked,
  places,
  filteredPlaces,
  type,
  setType,
  rating,
  setRating,
  setCoordinates,
  setBounds,
  coordinates,
  setChildClicked,
   handleAddToCart,
}) => {
  return (
    <>
      {/* <AppContainer> */}
        <Grid container spacing={3} style={{ width: "100%" }}>
          <Grid item xs={12} md={4}>
            <List
              isLoading={isLoading}
              childClicked={childClicked}
              places={filteredPlaces.length ? filteredPlaces : places}
              type={type}
              setType={setType}
              rating={rating}
              setRating={setRating}
              onAddToCart={handleAddToCart}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Map
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
              places={filteredPlaces.length ? filteredPlaces : places}
              setChildClicked={setChildClicked}
            />
          </Grid>
        </Grid>
      {/* </AppContainer> */}
    </>
  );
};

export default ListAndMap;



