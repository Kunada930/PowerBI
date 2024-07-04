import React from 'react'
import { useState, useRef, useEffect } from 'react'
import Lottie from 'react-lottie'
import  * as powerbi from "powerbi-client"
import "../styles/page.css"
import bagongPilipinasLogo from "../assets/Bagong Pilipinas Logo.png"
import daLogo from "../assets/DA_Logo.png"
import ictMonthLogo from "../assets/ICT Month Alternate Logo May 8-09.png"
import pmedAnimation from "../animations/Planning.json"
import ildAnimation from "../animations/ild.json"
import research from "../animations/research.json"
import raedAnimation from "../animations/raed.json"
import amadAnimation from "../animations/amad.json"
import hrAnimation from "../animations/hr.json"
import rafisAnimation from "../animations/rafis.json"
import regulatoryAnimation from "../animations/regulatory.json"
import rcesAnimation from "../animations/rces.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components'
import { faFacebook, faLinkedin, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

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

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logos">
      <img src={daLogo} alt="D.A Logo" className='logo' />
      <img src={bagongPilipinasLogo} alt="Bagong Pilipinas Logo" className='logo' />
      <img src={ictMonthLogo} alt="Bayang Digital" className='logo' />
    </div>
    <div className="navbar-title">
      <h1>Power BI Portal</h1>
    </div>
    <div className="navbar-links">
      <a href="/">
        <FontAwesomeIcon icon={faHome} className="nav-icon" />
        Home
      </a>
      <a href="/about">
        <FontAwesomeIcon icon={faInfoCircle} className="nav-icon" />
        About
      </a>
    </div>
  </nav>
)

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
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Contact Us</h4>
        <p><FontAwesomeIcon icon={faPhone} /> (123) 456-7890</p>
        <p><FontAwesomeIcon icon={faEnvelope} /> email@example.com</p>
        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Nursery Compound, San Gabriel, Tuguegarao City, Cagayan 3500</p>
      </div>
      <div className="footer-section">
        <h4>Connect With Us</h4>
        <div className="social-icons">
          <a href="https://facebook.com" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://twitter.com" aria-label="Twitter"><FontAwesomeIcon icon={faXTwitter} /></a>
          <a href="https://instagram.com" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://linkedin.com" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 Department of Agriculture Regional Field Office No. 02. All rights reserved.</p>
    </div>
  </footer>
);


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
      title: 'HRMO',
      text: `The Human Resource Management Office (HRMO) is a vital division 
      within an organization responsible for managing all aspects of employee relations and human resources functions.`,
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

  const [selectedReport, setSelectedReport] = useState(null)
  const reportContainerRef = useRef(null)

  useEffect(() => {
    if (selectedReport && reportContainerRef.current) {
      const embedConfiguration = {
        type: 'report',
        id: 'your-report-id', // Replace with your actual report ID
        embedUrl: selectedReport,
        accessToken: 'your-access-token', // Replace with your actual access token
        settings: {
          filterPaneEnabled: false,
          navContentPaneEnabled: false
        }
      }

      const powerbiService = new powerbi.Service(
        powerbi.factories.hpmFactory,
        powerbi.factories.wpmpFactory,
        powerbi.factories.routerFactory
      )

      powerbiService.embed(reportContainerRef.current, embedConfiguration)
    }
  }, [selectedReport])

  const handleViewAnalytics = (url) => {
    if (url) {
      console.log("Selected Power BI URL: ", url)
      setSelectedReport(url)
    } else {
      console.error("No Power BI URL provided for this card.")
    }
  }
  

  return (
    <div>
      <Navbar />
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
                    <div className="btn" onClick={() => handleViewAnalytics(card.powerBIUrl)}>View Analytics</div>
                  )}
                </div>
              </CardWrapper>
            ))}
          </CardContainer>
          {selectedReport && (
            <div className="report-container" ref={reportContainerRef}></div>
          )}
        </div>
      </section>
      </div>
      <Footer />
    </div>
  )
}


export default Page;