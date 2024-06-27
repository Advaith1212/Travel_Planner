import React, { useState } from 'react';
import "./Flights.css"// Import CSS file for flight search form styling
import img1 from "./emirates.jpeg";
import img2 from "./airindia.webp";
import img3 from "./british.png";
import img4 from "./frontier.jpeg";
import img5 from "./indigo.jpeg";
import img6 from "./qatar.png";

function FlightSearchForm() {
  const [flights, setFlights] = useState([]);
  const [showFlights, setShowFlights] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [showPromoField, setShowPromoField] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [userDetailsWindow, setUserDetailsWindow] = useState(null); // State to store reference to user details window

  const handleSearchFlights = () => {
    // Hardcoded flight details
    const sampleFlights = [
      { id: 1, name: 'Emirates', cost: '$500', image: img1, details: 'Complementary wifi for 2 hours.' },
      { id: 2, name: 'Air India', cost: '$350', image: img2, details: 'upto 20% off on next booking.' },
      { id: 3, name: 'Indigo', cost: '$80', image: img5, details: 'upto 5% off on next booking.' },
      { id: 4, name: 'Qatar', cost: '$1280', image: img6, details: 'Extra luggage if in student club. Complementary food, wifi for 10 hours.' },
      { id: 5, name: 'British Airways', cost: '$480', image: img3, details: 'upto 5% off on next booking' },
      { id: 6, name: 'Frontier', cost: '$100', image: img4, details: 'upto 25% off on next booking.' }
    ];

    setFlights(sampleFlights);
    setShowFlights(true);
  };

  const handlePromoCode = () => {
    setShowPromoField(true);
  };

  const handleChangePromoCode = (event) => {
    setPromoCode(event.target.value);
  };

  const handleFlightSelect = (flight) => {
    setSelectedFlight(flight);
    // Open a new window for user details entry
    const newUserDetailsWindow = window.open('', 'UserDetails', 'width=400,height=400');
    newUserDetailsWindow.document.body.innerHTML = `
      <div style="padding: 20px; font-family: Arial, sans-serif;">
        <h2 style="margin-bottom: 20px;">Enter Booking Details</h2>
        <div style="margin-bottom: 10px;">
          <label for="firstName">First Name:</label><br/>
          <input type="text" id="firstName" style="width: 100%; margin-top: 5px;" />
        </div>
        <div style="margin-bottom: 10px;">
          <label for="lastName">Last Name:</label><br/>
          <input type="text" id="lastName" style="width: 100%; margin-top: 5px;" />
        </div>
        <div style="margin-bottom: 10px;">
          <label for="phoneNumber">Phone Number:</label><br/>
          <input type="text" id="phoneNumber" style="width: 100%; margin-top: 5px;" />
        </div>
        <div style="margin-bottom: 10px;">
          <label for="cardDetails">Card Details:</label><br/>
          <input type="text" id="cardDetails" style="width: 100%; margin-top: 5px;" />
        </div>
        <button onclick="window.opener.handleBookFlight()" style="background-color: #2D9596; color: white; padding: 10px; border: none; border-radius: 5px; cursor: pointer;">Book</button>
      </div>
    `;
    // Pass flight details to the new window
    newUserDetailsWindow.flightDetails = flight;
    setUserDetailsWindow(newUserDetailsWindow); // Store reference to the window
  };

  const handleBookFlight = () => {
    // Get user details from the new window
    const firstName = userDetailsWindow.document.getElementById('firstName').value;
    const lastName = userDetailsWindow.document.getElementById('lastName').value;
    const phoneNumber = userDetailsWindow.document.getElementById('phoneNumber').value;
    const cardDetails = userDetailsWindow.document.getElementById('cardDetails').value;

    // Do something with the booking details (e.g., send to server)
    if (firstName && lastName && phoneNumber && cardDetails) {
      setBookingSuccess(true);
      userDetailsWindow.alert('Flight booking is successful!'); // Display success message in the new window
      userDetailsWindow.close(); // Close the window after booking
    } else {
      userDetailsWindow.alert('Please fill in all fields.');
    }
  };

  return (
    <div className="flight-search-container" style={{ textAlign: 'center', color: '#2D9596', fontFamily: 'Arial, sans-serif' }}>
      {/* Your form content */}
      <div className="background-image" style={{ backgroundImage: 'url(path-to-australia-coast-image.jpg)' }}>
        <h1>Discover the beauty of Australia</h1>
        <p>Travel to the land down under with our incredible fares</p>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        {/* From and To places dropdowns */}
        <div className="flight-places">
          <select style={{ margin: '10px', fontFamily: 'Arial, sans-serif' }}>
            <option value="" disabled selected>From Place</option>
            <option value="sydney">Sydney</option>
            <option value="melbourne">Melbourne</option>
            <option value="brisbane">Brisbane</option>
            {/* Add more options for From places */}
          </select>
          <select style={{ margin: '10px', fontFamily: 'Arial, sans-serif' }}>
            <option value="" disabled selected>To Place</option>
            <option value="sydney">Sydney</option>
            <option value="melbourne">Melbourne</option>
            <option value="brisbane">Brisbane</option>
            {/* Add more options for To places */}
          </select>
        </div>

        {/* Form fields */}
        <div className="flight-type">
          <label>
            <input type="radio" name="flightType" value="return" checked /> Return
          </label>
          <label>
            <input type="radio" name="flightType" value="oneWay" /> One way
          </label>
          <label>
            <input type="radio" name="flightType" value="multiCity" /> Multi-city
          </label>
        </div>

        <div className="flight-dates">
          <input type="date" name="departureDate" style={{ margin: '10px', fontFamily: 'Arial, sans-serif' }} />
          <input type="date" name="returnDate" style={{ margin: '10px', fontFamily: 'Arial, sans-serif' }} />
        </div>

        <div className="passenger-class">
          <select style={{ margin: '10px', fontFamily: 'Arial, sans-serif' }}>
            <option>Passenger : Economy</option>
            <option>Passenger : Business</option>
            <option>Passenger : Special Flight</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="promo-code">
          <button type="button" onClick={handlePromoCode} style={{ margin: '10px', backgroundColor: '#2D9596', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add promo code</button>
          {showPromoField && (
            <input type="text" placeholder="Enter promo code" value={promoCode} onChange={handleChangePromoCode} />
          )}
        </div>

        <div className="search-flights">
          <button type="button" onClick={handleSearchFlights} style={{ margin: '10px', backgroundColor: '#2D9596', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Search flights</button>
        </div>
      </form>

      {/* Display flight results */}
      {showFlights && (
        <div className="flight-results">
          {flights.map((flight) => (
            <div key={flight.id} className="flight-card" onMouseEnter={() => setSelectedFlight(flight)} onMouseLeave={() => setSelectedFlight(null)}>
              <img className="flight-image" src={flight.image} alt={flight.name} />
              {selectedFlight === flight && (
                <div className="flight-details">
                  <h3>{flight.name}</h3>
                  <p>Cost: {flight.cost}</p>
                  <p>{flight.details}</p>
                  <button onClick={() => handleFlightSelect(flight)}>Select</button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Display success message when booking is successful */}
      {bookingSuccess && (
        <div style={{ marginTop: '20px', fontFamily: 'Arial, sans-serif' }}>
          <p>Flight has been booked successfully!</p>
        </div>
      )}
    </div>
  );
}

export default FlightSearchForm;
