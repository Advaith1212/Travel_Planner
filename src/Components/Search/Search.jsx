// import React, { useEffect, useState } from "react";
// import Home from "../Home/Home";
// import Main from "../Main/Main";
// import { CssBaseline, Grid } from "@material-ui/core";
// import { getPlacesData } from "./api";
// import Map from "../Map/Map";
// import List from "../List/List";
// import Header from "../Header/Header";
// import Destinations from "../Destinations/Destinations";
// import Footer from "../Footer/Footer";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


// const Search = () => {
//     // const [places, setPlaces] = useState([]);
//     // const [filteredPlaces, setFilteredPlaces] = useState([]);
//     // const [type, setType] = useState("restaurants");
//     // const [rating, setRating] = useState("");
//     // const [autocomplete, setAutocomplete] = useState(null);
//     // const [childClicked, setChildClicked] = useState(null);
//     // const [isLoading, setIsLoading] = useState(false);
//     // const [coordinates, setCoordinates] = useState({});
//     // const [bounds, setBounds] = useState(null);
//     // const [apiCallCount, setApiCallCount] = useState(0);
//     // const [showListAndMap, setShowListAndMap] = useState(false);
//     // const navigate = useNavigate();
  
//     // useEffect(() => {
//     //   const getLocation = () => {
//     //     navigator.geolocation.getCurrentPosition(
//     //       (position) => {
//     //         setCoordinates({
//     //           lat: position.coords.latitude,
//     //           lng: position.coords.longitude,
//     //         });
//     //       },
//     //       (error) => {
//     //         console.error("Error getting geolocation:", error);
//     //       }
//     //     );
//     //   };
//     //   getLocation();
//     // }, []);
  
//     // useEffect(() => {
//     //   const filtered = places.filter((place) => Number(place.rating) > rating);
//     //   setFilteredPlaces(filtered);
//     // }, [rating]);
  
//     // useEffect(() => {
//     //   if (bounds && bounds.sw && bounds.ne && apiCallCount < 30) {
//     //     setIsLoading(true);
  
//     //     getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
//     //       console.log("Fetched places data:", data);
//     //       if (data && Array.isArray(data)) {
//     //         setPlaces(
//     //           data.filter((place) => place.name && place.num_reviews > 0)
//     //         );
//     //         setFilteredPlaces([]);
//     //         setRating("");
//     //         setIsLoading(false);
//     //       }
//     //     });
//     //     setApiCallCount((prevCount) => prevCount + 1);
//     //   }
//     // }, [bounds, type]);
//     // const onLoad = (autoC) => setAutocomplete(autoC);
  
//     // const onPlaceChanged = () => {
//     //   const place = autocomplete.getPlace();
//     //   if (place && place.geometry && place.geometry.location) {
//     //     const lat = place.geometry.location.lat();
//     //     const lng = place.geometry.location.lng();
//     //     setCoordinates({ lat, lng });
//     //   } else {
//     //     // Handle the case where no place is selected or the place object is invalid
//     //     console.log("No place selected or place object is invalid");
//     //   }
//     // };
  
//     // const handleSearch = () => {
//     //   setShowListAndMap(true);
//     // };
  
//     // return (
//     //   <Router>
        
//     //     {<Home onPlaceChanged={onPlaceChanged} onLoad={onLoad} onSearch={handleSearch} /> }
//     //     <Footer />
//     //     {<Main /> }
//     //     {{ <Footer/>} }
//     //     <CssBaseline />
//     //     { <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} onSearch={handleSearch} /> }
//     //     {showListAndMap && (
//     //       <>
//     //         { <Header /> }
  
//     //         <Grid container spacing={3} style={{ width: "100%" }}>
//     //           <Grid item xs={12} md={4}>
//     //             <List
//     //               isLoading={isLoading}
//     //               childClicked={childClicked}
//     //               places={filteredPlaces.length ? filteredPlaces : places}
//     //               type={type}
//     //               setType={setType}
//     //               rating={rating}
//     //               setRating={setRating}
//     //             />
//     //           </Grid>
//     //           <Grid
//     //             item
//     //             xs={12}
//     //             md={8}
//     //             style={{
//     //               display: "flex",
//     //               justifyContent: "center",
//     //               alignItems: "center",
//     //             }}
//     //           >
//     //             <Map
//     //               setCoordinates={setCoordinates}
//     //               setBounds={setBounds}
//     //               coordinates={coordinates}
//     //               places={filteredPlaces.length ? filteredPlaces : places}
//     //               setChildClicked={setChildClicked}
//     //             />
//     //           </Grid>
//     //         </Grid>
//     //       </>
//         // )}
//     //   </Router>
//     // );
//   };

//   export default Search;