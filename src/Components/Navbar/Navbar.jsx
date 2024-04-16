import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser, faRoute, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import SignInModal from '../SignInModal';

const Navbar = ({ cartItems }) => {
  const [activeItem, setActiveItem] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <Link to="/" className="logo flex">
            <FontAwesomeIcon icon={faRoute} />
            <span></span>
            <h1 className="travelPlanner">Travel Planner</h1>
          </Link>
        </div>
        <div className="navLinks">
          <ul className="navLists flex">
            <li className="navItem">
              <Link
                to="/"
                className={`navLink ${activeItem === "Home" ? "activeNavItem" : ""}`}
                onClick={() => handleItemClick("Home")}
              >
                <FontAwesomeIcon icon={faHouseUser} />
                <span></span>
                Home
              </Link>
            </li>
            <li className="navItem">
              <Link
                to="/about"
                className={`navLink ${activeItem === "About" ? "activeNavItem" : ""}`}
                onClick={() => handleItemClick("About")}
              >
                About
              </Link>
            </li>
            <li className="navItem">
              <Link
                to="/destinations"
                className={`navLink ${activeItem === "Destinations" ? "activeNavItem" : ""}`}
                onClick={() => handleItemClick("Destinations")}
              >
                Destinations
              </Link>
            </li>
            <li className="navItem">
              <SignInModal />
            </li>
            <li className="navItem">
              <div className="cartIcon" onClick={toggleCart}>
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className="cartCount">{cartItems.length}</span>
              </div>
            </li>
          </ul>
        </div>
      </header>
      {isCartOpen && (
        <div className="cartDropdown">
          <h3>My wishlist</h3>
          {cartItems.length === 0 ? (
            <p>No items in the cart</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  <p>{index +1} Name: {item.name}</p>
                  <p>Address: {item.address}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </section>
  );
};

export default Navbar;