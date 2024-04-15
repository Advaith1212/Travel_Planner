import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { faRoute } from "@fortawesome/free-solid-svg-icons";
import SignInModal from '../SignInModal';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <Link to="/" className="logo flex">
            <FontAwesomeIcon icon={faRoute} />
            <span></span>
            <h1 className="travelPlanner"> Travel Planner</h1>
          </Link>
        </div>
        <div className="navLinks">
          <ul className="navLists flex">
            <li className="navItem">
              <Link
                to="/"
                className={`navLink ${activeItem === "Home" ? "activeNavItem" : ""
                  }`}
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
                className={`navLink ${activeItem === "About" ? "activeNavItem" : ""
                  }`}
                onClick={() => handleItemClick("About")}
              >
                About
              </Link>
            </li>
            {/* <li className="navItem">
              <Link
                to="/signin"
                className={`navLink ${
                  activeItem === "Sign In" ? "activeNavItem" : ""
                }`}
                onClick={() => handleItemClick("Sign In")}
              >
                Sign In
              </Link>
            </li> */}
            <li className="navItem">
              <Link
                to="/destinations"
                className={`navLink ${activeItem === "Destinations" ? "activeNavItem" : ""
                  }`}
                onClick={() => handleItemClick("Destinations")}
              >
                Destinations
              </Link>
            </li>

            {/* <li className="navItem">
              <Link
                to="/signin"
                className={`navLink ${
                  activeItem === "Register" ? "activeNavItem" : ""
                }`}
                onClick={() => handleItemClick("Register")}
              >
                Register
              </Link>
              </li> */}

            {/* <ul> */}
              <li className="navItem">
                <SignInModal />
              </li>
              {/* Other navbar items */}
            {/* </ul> */}


          </ul>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
