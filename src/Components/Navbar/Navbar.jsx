import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser, faRoute, faShoppingCart, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
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

  const aboutContent = (
    <div>
      <h1 style={{ color: '#2E8B57' }}>About</h1>
      <p>We call ourselves 'Journey Cra1ers'. Our team members have worked in different domains where they gained unique experiences, making us capable of handling various aspects of projects.</p>
      
      <h2 style={{ color: '#2E8B57' }}>Introducing Team Members:</h2>

      <ol>
        <li>
          <h3 style={{ color: '#2E8B57' }}>Anuhya Samudrala</h3>
          <p>A Dynamic SAP and Python developer with five years of proven experience in the industry, complemented by significant freelance work with leading vendors. Holds Bachelors in Electronics engineering and being passionate about innovation and automation, she worked on a wide variety of projects. Portfolio includes expertise in Python, SAP tech stack.</p>
          <p>Her contributions to different projects have received user appreciation and led to freelance opportunities for similar applications. With a track record of managing projects for esteemed government entities, Anuhya has demonstrated the ability to meet high standards and complex requirements. With a keen interest in AI/ML, she aims to address challenging problems with unique tech-driven solutions. Enthusiasm towards technology led her to pursue Masters at UNCC.</p>
          <p>She serves as the primary point of contact to the instructor.</p>
        </li>
        <li>
          <h3 style={{ color: '#2E8B57' }}>Banda Srija</h3>
          <p>A Computer Science Master’s graduate from the University of North Carolina, with a strong academic background in InformaOon Technology. Proficient in Java, Python, C, MySQL, and JavaScript, with expertise in NLTK, TensorFlow, and Keras. Experienced in OpenCV, SciPy, and Image Processing, suggesting her ability to use innovation skills when solving problems. Worked as a Senior Analyst at Capgemini as a Salesforce Developer and interned for "Call Centre Application".</p>
        </li>
        <li>
          <h3 style={{ color: '#2E8B57' }}>Advaith Madarapu</h3>
          <p>A dedicated and versatile software developer, currently pursuing a Master's in Computer Science at the University of North Carolina at Charlotte. Strong foundation in languages such as Java, Python, C++, and JavaScript. Experienced in various web technologies, databases, and tools including MongoDB, SQL, AWS, Docker, and more. Hands-on experience as an Associate Consultant at Oracle Financial Services Software and a Software Development Engineer Intern at Amazon.</p>
        </li>
        <li>
          <h3 style={{ color: '#2E8B57' }}>Nikshitha Reddy Aella</h3>
          <p>Experienced as a software engineer in leading the development of a healthcare system. Expertise includes front-end development with Angular, integrating with a REST backend through spring controllers and JPA mapping. Utilized Git for version control and automated processes to enhance operational efficiency. Worked on a Cloud-based application for multi-IAAS and contributed to a face recognition app in her Bachelor’s.</p>
        </li>
        <li>
          <h3 style={{ color: '#2E8B57' }}>Lakshmi Vyshnavi Machiraju</h3>
          <p>Experienced at Infosys Technologies Ltd with expertise in Spring, AWS, Git, and programming languages. Proficient in writing code, designing it, and skilled in CI/CD DevOps with AWS to deploy it onto the cloud. Developed front-end applications and worked on projects in face recognition, e-health, prediction systems, and many front-end developments.</p>
        </li>
        <li>
          <h3 style={{ color: '#2E8B57' }}>Bhanu Isani</h3>
          <p>A highly skilled Python developer with 2 years of experience, specializing in converting existing SAS code into PySpark and BigQuery. Focused on report conversions, transforming QlikSense to Power BI for enhanced data visualization and analysis capabilities. Strong background in Python development, leveraging frameworks like Tkinter and Flask. Dedicated to writing clean, efficient code and excels in collaborative environments.</p>
        </li>
      </ol>
    </div>
  );

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
                className={`navLink ${activeItem === "about" ? "activeNavItem" : ""}`}
                onClick={() => handleItemClick("about")}
              >
                About
              </Link>
            </li>

            <li className="navItem">
              <Link
                to="/flight"
                className={`navLink ${activeItem === "flight" ? "activeNavItem" : ""
                  }`}
                onClick={() => handleItemClick("flight")}
              >
                View Flights
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
            <li className="navItem">
              <Link to="https://mediafiles.botpress.cloud/5ad05f3d-be43-4517-b03c-5dff6a5de464/webchat/bot.html" target="_blank" rel="noopener noreferrer" className="navLink" title="Chat with Bot">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </Link>
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
      {activeItem === "about" && aboutContent}
    </section>
  );
};

export default Navbar;
