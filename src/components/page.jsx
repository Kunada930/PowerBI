import React from 'react'
import { useState } from 'react'
import Lottie from 'react-lottie'
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
    },

  ])

  return (
    <div>
      <div className="page">
        <img src={daLogo} alt="D.A Logo" className='logo' />
        <img src={bagongPilipinasLogo} alt="Bagong Pilipinas Logo" className='logo' />
        <img src={ictMonthLogo} alt="Bayang Digital" className='logo' />
        <div className="top-right-links">
          <a href="/">Home</a>
          <a href="/">About</a>
        </div>
      </div>
      <section>
        <div className="container">
          <h2 className='container-h1'>Power BI Portal</h2>
          <div className="cards">
          {
            cards.map((card, i) => (
              <div key={i} className="card">
                <h3>{card.title}</h3>
                <div className="lottie-container"> {/* Add a container div with a class */}
                  {card.animationOptions && (
                    <Lottie
                      options={card.animationOptions}
                      height={225}
                      width={225}
                      className="lottie" // Add the class name here
                    />
                  )}
                </div>
                <p>{card.text}</p>
                <div className="btn">View Analytics</div>
              </div>
            ))
          }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page