import React, { useEffect, useState } from "react";
import ListAndMap from "../ListAndMap/ListAndMap";
import { useLocation } from "react-router-dom";

const MapWrapper = ({
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
  showListAndMap,
}) => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/map" && (
        <ListAndMap
          isLoading={isLoading}
          childClicked={childClicked}
          places={places}
          filteredPlaces={filteredPlaces}
          type={type}
          setType={setType}
          rating={rating}
          setRating={setRating}
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
          setChildClicked={setChildClicked}
        />
      )}
    </>
  );
};

export default MapWrapper;
