import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser, faRoute, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import SignInModal from '../SignInModal';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const Navbar = ({ cartItems }) => {
  const [activeItem, setActiveItem] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const CartItemsPDF = ({ cartItems }) => (
    <Document>
      <Page size="A4" style={pdfStyles.page}>
        <View style={pdfStyles.section}>
          <Text>My wishlist</Text>
          {cartItems.map((item, index) => (
            <View key={index} style={pdfStyles.item}>
              <Text style={pdfStyles.itemName}>{index + 1}. {item.name}</Text>
              <Text style={pdfStyles.itemAddress}>Address: {item.address}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
  
  const pdfStyles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#E4E4E4',
      padding: 20,
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    item: {
      flexDirection: 'row',
      marginBottom: 5,
    },
    itemName: {
      flex: 1,
      fontWeight: 'bold',
    },
    itemAddress: {
      flex: 1,
      textAlign: 'right',
    },
  });


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
            <>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  <p>{index +1} Name: {item.name}</p>
                  <p>Address: {item.address}</p>
                </li>
              ))}
            </ul>
            <PDFDownloadLink
            document={<CartItemsPDF cartItems={cartItems} />}
            fileName="cart-items.pdf"
          >
            {({ blob, url, loading, error }) =>
              loading ? 'Generating PDF...' : 'Download PDF'
            }
          </PDFDownloadLink>
          </>
          )}
        </div>
      )}
    </section>
  );
};

export default Navbar;