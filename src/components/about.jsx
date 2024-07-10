import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faSeedling, faTractor, faChartLine } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { faPhone, faEnvelope, faMapMarkerAlt, faHome, faInfoCircle, faShieldAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const gradientText = `
  background: linear-gradient(90deg, #0072ff, #00c6ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const gradientLine = `
  background: linear-gradient(90deg, #0072ff, #00c6ff);
  height: 3px;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 30px;
  font-family: 'Poppins', sans-serif;
  color: #333;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
`;

const Header = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 40px;
  ${gradientText}
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const SubHeader = styled.h2`
  font-size: 2.2rem;
  margin-top: 60px;
  margin-bottom: 30px;
  ${gradientText}
  position: relative;
  padding-bottom: 15px;

  &:after {
    content: '';
    display: block;
    width: 100%;
    ${gradientLine}
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 25px;
  color: #555;
`;

const MissionStatement = styled.blockquote`
  font-size: 1.4rem;
  font-style: italic;
  color: #4a8c34;
  border-left: 6px solid #4a8c34;
  padding: 30px;
  margin: 40px 0;
  background-color: #e8f5e9;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-top: 50px;
`;

const FeatureItem = styled.div`
  text-align: center;
  padding: 40px 20px;
  background-color: #ffffff;
  border-radius: 15px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const FeatureIcon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  color: #ffffff;
  background: linear-gradient(90deg, #0072ff, #00c6ff);
  padding: 20px;
  border-radius: 50%;
  margin-bottom: 25px;
  transition: all 0.3s ease;

  ${FeatureItem}:hover & {
    transform: scale(1.1);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.4rem;
  color: #2c5e1a;
  margin-bottom: 15px;
  ${gradientText}
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;


// Navbar component
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const isActive = (path) => {
      return location.pathname === path ? 'active' : '';
    };
  
    return (
      <nav className="navbar">
        <div className="navbar-title">
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/')}`}>
            <FontAwesomeIcon icon={faHome} className="nav-icon" />
            Home
          </Link>
          <Link to="/about" className={`nav-link ${isActive('/about')}`}>
            <FontAwesomeIcon icon={faInfoCircle} className="nav-icon" />
            About
          </Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>
            <FontAwesomeIcon icon={faEnvelope} className="nav-icon" />
            Contact Us
          </Link>
          <Link to="/privacy" className={`nav-link ${isActive('/privacy')}`}>
            <FontAwesomeIcon icon={faShieldAlt} className="nav-icon" />
            Privacy Policy
          </Link>
        </div>
      </nav>
    );
  };
  
  // Footer component
  const Footer = () => (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>The Department of Agriculture Regional Field Office No. 02 is committed to empowering farmers and fishers through innovative agricultural practices and sustainable development.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><a href="https://www.google.com/error">Contact Us</a></li>
            <li><a href="https://www.google.com/error">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p><FontAwesomeIcon icon={faPhone} /> (078) 396-1328 / (078) 844-1031</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> ored.rfo2@da.gov.ph</p>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Nursery Compound, San Gabriel, Tuguegarao City, Cagayan 3500</p>
        </div>
        <div className="footer-section">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/daregion2official" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Department of Agriculture Regional Field Office No. 02 All rights reserved.</p>
      </div>
    </footer>
  );

const AboutPage = () => {
  return (
    <div>
        <Navbar/>
    <AboutContainer>
      <Header>About DARFO2 PowerBI Portal</Header>
      
      <Paragraph>
        Welcome to the Department of Agriculture Regional Field Office No. 02 (DARFO2) PowerBI Portal. 
        Our platform is dedicated to transforming agricultural data into actionable insights through 
        interactive visualizations and comprehensive analytics.
      </Paragraph>

      <MissionStatement>
        "Empowering agricultural decision-making through data-driven insights and cutting-edge visualization technology."
      </MissionStatement>

      <SubHeader>Our Purpose</SubHeader>
      <Paragraph>
        The DARFO2 PowerBI Portal serves as a central hub for agricultural data analysis in Region 02. 
        We aim to support farmers, policymakers, and agricultural stakeholders by providing easy access 
        to crucial information, trends, and forecasts that drive informed decision-making in the agricultural sector.
      </Paragraph>

      <SubHeader>Key Features</SubHeader>
      <FeatureGrid>
        <FeatureItem>
          <FeatureIcon icon={faLeaf} />
          <FeatureTitle>Crop Analytics</FeatureTitle>
          <FeatureDescription>Detailed insights into crop production, yield, and market trends.</FeatureDescription>
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon icon={faSeedling} />
          <FeatureTitle>Resource Management</FeatureTitle>
          <FeatureDescription>Tools for optimizing agricultural resources and inputs.</FeatureDescription>
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon icon={faTractor} />
          <FeatureTitle>Farm Productivity</FeatureTitle>
          <FeatureDescription>Metrics and benchmarks for improving farm efficiency.</FeatureDescription>
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon icon={faChartLine} />
          <FeatureTitle>Market Intelligence</FeatureTitle>
          <FeatureDescription>Up-to-date market data and price forecasts for informed selling decisions.</FeatureDescription>
        </FeatureItem>
      </FeatureGrid>

      <SubHeader>Our Commitment</SubHeader>
      <Paragraph>
        At DARFO2, we are committed to fostering sustainable agricultural practices, enhancing food security, 
        and improving the livelihoods of farmers in our region. Through this PowerBI Portal, we strive to 
        bridge the gap between data and action, enabling a more resilient and prosperous agricultural sector.
      </Paragraph>

      <Paragraph>
        Whether you're a farmer looking to optimize your crop production, a researcher analyzing agricultural trends, 
        or a policymaker shaping agricultural policies, our portal provides the insights you need to make 
        data-driven decisions that positively impact agriculture in Region 02 and beyond.
      </Paragraph>
    </AboutContainer>
    <Footer/>
    </div>
  );
};

export default AboutPage;