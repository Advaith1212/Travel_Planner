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
        <Text style={pdfStyles.heading}>My Wishlist</Text>
          {cartItems.map((item, index) => (
            <View key={index} style={pdfStyles.item}>
            <Text style={pdfStyles.itemName}>
              {index + 1}. {item.name}
            </Text>
            {item.address && (
              <Text style={pdfStyles.itemAddress}>Address: {item.address}</Text>
            )}
          </View>
          ))}
        </View>
      </Page>
    </Document>
  );

  const pdfStyles = StyleSheet.create({
    page: {
      fontFamily: 'Helvetica',
      fontSize: 12,
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    section: {
      marginBottom: 20,
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
      textDecoration: 'underline',
      color: '#007bff',
    },
    item: {
      marginBottom: 15,
      padding: 10,
      backgroundColor: '#f5f5f5',
      borderRadius: 5,
    },
    itemName: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    itemAddress: {
      fontSize: 12,
      color: '#555',
      marginLeft: 20,
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
            {/* <li className="navItem">
              <Link
                to="/Who We Are"
                className={`navLink ${activeItem === "Who We Are" ? "activeNavItem" : ""}`}
                onClick={() => handleItemClick("Who we Are")}
              >
                Who We Are
              </Link>
            </li> */}
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
    <h3 style={{ fontSize: '24px', fontWeight: 'bold' }}>My Wishlist</h3>
    {cartItems.length === 0 ? (
      <p>No items in the wishlist</p>
    ) : (
      <>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
                {index + 1} {item.name}
              </p>
              {item.address && (
                <p style={{ fontSize: '14px', marginLeft: '20px' }}>
                  Address: {item.address}
                </p>
              )}
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <PDFDownloadLink
            document={<CartItemsPDF cartItems={cartItems} />}
            fileName="cart-items.pdf"
          >
            {({ blob, url, loading, error }) => (
              <>
                <span style={{ marginRight: '10px' }}>
                  {loading ? 'Generating PDF...' : (
                    <i className="fas fa-file-pdf" style={{ fontSize: '24px' }}></i>
                  )}
                </span>
                <span>Generate Itinerary</span>
              </>
            )}
          </PDFDownloadLink>
        </div>
      </>
    )}
  </div>
)}
    </section>
  );
};

export default Navbar;








