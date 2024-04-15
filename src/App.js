import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { CssBaseline } from "@material-ui/core";
import { getPlacesData } from "./api";
import Footer from "./Components/Footer/Footer";
import Destinations from "./Components/Destinations/Destinations";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import ListAndMap from "./Components/ListAndMap/ListAndMap"; // Import the new component
import Register from "./Components/Register/Register"; // Import Register component
import SignIn from "./Components/Register/signin"; // Import SignIn component
// import Flight from "./Components/Flight/Navbar"; // Import Flight component

const App = () => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  const [autocomplete, setAutocomplete] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  const [apiCallCount, setApiCallCount] = useState(0);
  const [showListAndMap, setShowListAndMap] = useState(false);

  useEffect(() => {
    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    };
    getLocation();
  }, []);

  useEffect(() => {
    const filtered = places.filter((place) => Number(place.rating) > rating);
    setFilteredPlaces(filtered);
  }, [rating]);

  useEffect(() => {
    if (bounds && bounds.sw && bounds.ne && apiCallCount < 30) {
      setIsLoading(true);

      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        console.log("Fetched places data:", data);
        if (data && Array.isArray(data)) {
          setPlaces(
            data.filter((place) => place.name && place.num_reviews > 0)
          );
          setFilteredPlaces([]);
          setRating("");
          setIsLoading(false);
        }
      });
      setApiCallCount((prevCount) => prevCount + 1);
    }
  }, [bounds, type]);
  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const place = autocomplete.getPlace();
    if (place && place.geometry && place.geometry.location) {
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      setCoordinates({ lat, lng });
    } else {
      // Handle the case where no place is selected or the place object is invalid
      console.log("No place selected or place object is invalid");
    }
  };

  const handleSearch = () => {
    setShowListAndMap(true);
  };
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} /> Route for SignIn
          component
          {/* <Route path="/flight" element={<Flight />} /> Route for Flight component */}
          <Route
            path="/"
            element={
              <>
                <Home
                  onPlaceChanged={onPlaceChanged}
                  onLoad={onLoad}
                  onSearch={handleSearch}
                />
                {/* <AppContainer> */}
                <MapWrapper
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
                  showListAndMap={showListAndMap}
                />
                {/* </AppContainer> */}
              </>
            }
          />
        </Routes>
        <Footer />
        <CssBaseline />
      </div>
    </Router>
  );
};

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
      {location.pathname === "/" && showListAndMap && (
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

export default App;
