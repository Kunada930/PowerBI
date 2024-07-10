import React from 'react'
import { useState } from 'react'
import Lottie from 'react-lottie'
import "../styles/page.css"
import pmedAnimation from "../animations/pmed2.json"
import ildAnimation from "../animations/ild2.json"
import research from "../animations/research.json"
import raedAnimation from "../animations/raed.json"
import amadAnimation from "../animations/amad.json"
import hrAnimation from "../animations/hr.json"
import rafisAnimation from "../animations/rafis.json"
import regulatoryAnimation from "../animations/regulatory.json"
import rcesAnimation from "../animations/rces.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faPhone, faEnvelope, faMapMarkerAlt, faPieChart, faBars } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { ReactTyped } from 'react-typed'


//For responsive webpage
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 969px) {
    justify-content: space-around;
  }
`

const CardWrapper = styled.div`
  flex: 0 0 calc(33.33% - 20px);
  max-width: calc(33.33% - 20px);
  margin-bottom: 20px;

  @media (max-width: 969px) {
    flex: 0 0 calc(50% - 20px);
    max-width: calc(50% - 20px);
  }

  @media (max-width: 600px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`

//Navbar component
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
        <Link to="/dadospowerbiportal" className={`nav-link ${isActive('/dadospowerbiportal')}`}>
            <FontAwesomeIcon icon={faPieChart} className="nav-icon" />
            Analytics
          </Link>
        <Link to="/about" className={`nav-link ${isActive('/about')}`}>
          <FontAwesomeIcon icon={faInfoCircle} className="nav-icon" />
          About
        </Link>
        <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>
          <FontAwesomeIcon icon={faEnvelope} className="nav-icon" />
          Contact Us
        </Link>
      </div>
    </nav>
  );
};


//Footer component
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
          <li><a href="/PowerBI">Home</a></li>
          <li><a href="/about">About</a></li>
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
          <a href="https://www.facebook.com" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 Department of Agriculture Regional Field Office No. 02 All rights reserved.</p>
    </div>
  </footer>
);

// Hero component
const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">DARFO2 PowerBI Portal</h1>
        <div className="hero-typed-container">
          <p className="hero-typed-prefix">Empowering</p>
          <ReactTyped
            className="hero-typed"
            strings={["Agriculture", "Decision-Making", "Efficiency"]}
            typeSpeed={80}
            backSpeed={50}
            loop
          />
        </div>
        <p className="hero-description">
          Transform agricultural data into actionable insights with interactive visualizations.
        </p>
      </div>
    </div>
  );
};

//function per card
function Page() {
  const [cards] = useState([
    {
      title: 'PMED',
      text: `The Planning, Monitoring, and Evaluation Division (PMED) is a crucial component within organizations, especially in governmental and non-governmental entities, to ensure the effective implementation and success of projects and programs.`,
      animationOptions: { 
        loop: true,
        autoplay: true,
        animationData: pmedAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      },
      powerBIUrl: "https://app.powerbi.com/view?r=eyJrIjoiNmI1NDgyYzYtOTA0My00YjExLTg5ZGUtNTlhMmIyYWE3MDAzIiwidCI6IjY4OTgwNjFkLTFhNmItNGUzOS1hZGZjLWRjOGFmZTA3MjIwMSIsImMiOjEwfQ%3D%3D"
    },
    {
      title: 'ILD',
      text: `The Integrated Laboratory Division (ILD) is an essential component within organizations, particularly in scientific, and industrial contexts. 
      This division centralizes various laboratory functions and services to enhance efficiency, collaboration, and resource utilization.`,
      animationOptions: { 
        loop: true,
        autoplay: true,
        animationData: ildAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      },
      powerBIUrl: "PowerBIReportHere"
    },
    {
      title: 'RESEARCH',
      text: `The Research Division is fundamental to the success and growth of organizations by 
      promoting innovation, ensuring evidence-based decision-making, and contributing to societal progress.`,
      animationOptions: { 
        loop: true,
        autoplay: true,
        animationData: research,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      },
      powerBIUrl: "PowerBIReportHere"
    },
    {
      title: 'RAED',
      text: `The Regional Agricultural Engineering Division (RAED) plays a vital role in transforming and modernizing regional 
      agriculture through the integration of engineering principles, advancing both economic and environmental sustainability.`,
      animationOptions: { 
        loop: true,
        autoplay: true,
        animationData: raedAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      },
      powerBIUrl: "PowerBIReportHere"
    },
    {
      title: 'AMAD',
      text: `Agribusiness and Marketing Assistance (AMAD) is essential for empowering agricultural enterprises to thrive
       in a competitive market, enhancing their business capabilities, and ensuring their long-term sustainability and growth.`,
       animationOptions: { 
        loop: true,
        autoplay: true,
        animationData: amadAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      },
      powerBIUrl: "PowerBIReportHere"
    },
    {
      title: 'FAD',
      text: `FAD provides centralized administrative support through procurement, maintenance allocation 
      & development of FDC’s manpower and physical resources. It takes charge of the receipt, custody, allocation, 
      utilization of financial resources, and maintenance of accurate financial records.`,
      animationOptions: { 
        loop: true,
        autoplay: true,
        animationData: hrAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      },
      powerBIUrl: "PowerBIReportHere"
    },
    {
      title: 'RAFIS',
      text: `The Regional Agriculture and Fisheries Information Section (RAFIS) plays a crucial role in bridging the gap between 
      the Department of Agriculture's initiatives and the stakeholders in the agriculture and fisheries sectors, 
      ensuring that important information reaches the intended audiences effectively.`,
      animationOptions: { 
        loop: true,
        autoplay: true,
        animationData: rafisAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      },
      powerBIUrl: "PowerBIReportHere"
    },
    {
      title: 'REGULATORY',
      text: `The Regulatory Division in the Department of Agriculture is tasked with overseeing and ensuring compliance with agricultural laws, regulations, and standards. 
      This division plays a critical role in safeguarding the quality and safety of agricultural products and practices.`,
      animationOptions: { 
        loop: true,
        autoplay: true,
        animationData: regulatoryAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      },
      powerBIUrl: "PowerBIReportHere"
    },
    {
      title: 'RCES',
      text: `These Research Centers and Experiment Stations (RCES) are integral to the continuous improvement 
      and modernization of agriculture, ensuring that farmers have access to the latest scientific knowledge and technologies to 
      enhance their productivity and sustainability.`,
      animationOptions: { 
        loop: true,
        autoplay: true,
        animationData: rcesAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      },
      powerBIUrl: "PowerBIReportHere"
    }
  ]);

  //When "View Analytics" is clicked, it will open another link for the power bi page
  const handleViewAnalytics = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };


  //render part
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="content-wrapper">
      <section>
        <div className="container">
          <CardContainer>
            {cards.map((card, i) => (
              <CardWrapper key={i}>
                <div className="card">
                  <h3>{card.title}</h3>
                  <div className="lottie-container">
                    {card.animationOptions && (
                      <Lottie
                        options={card.animationOptions}
                        height="100%"
                        width="100%"
                        style={{ maxWidth: '225px', maxHeight: '225px', margin: '0 auto' }}
                      />
                    )}
                  </div>
                  <p>{card.text}</p>
                  {card.powerBIUrl && (
                     <button 
                     onClick={() => handleViewAnalytics(card.powerBIUrl)}
                     className="btn"
                      >
                      View Analytics
                      </button>
                  )}
                </div>
              </CardWrapper>
            ))}
          </CardContainer>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  )
}


export default Page;