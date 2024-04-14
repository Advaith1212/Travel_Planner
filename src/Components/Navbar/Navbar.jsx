import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faRoute } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <FontAwesomeIcon icon={faRoute} />
            <h1>Travel Planner</h1>
          </a>
        </div>
        <div className="navLinks">
          <ul className="navLists flex">
            <li className="navItem">
              <a
                // href="#"
                // className={`navLink ${activeItem === "Home" ? "activeNavItem" : ""}`}
                // onClick={() => handleItemClick("Home")}
              >
                <FontAwesomeIcon icon={faHouseUser} />
                Home
              </a>
            </li>
            <li className="navItem">
              <a
                href="#"
                className={`navLink ${activeItem === "About" ? "activeNavItem" : ""}`}
                onClick={() => handleItemClick("About")}
              >
                About
              </a>
            </li>
            <li className="navItem">
              <a
                href="#"
                className={`navLink ${activeItem === "SignIn" ? "activeNavItem" : ""}`}
                onClick={() => handleItemClick("SignIn")}
              >
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </header>
    </section>
  );
};

export default Navbar;