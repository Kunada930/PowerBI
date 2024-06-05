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
        animationData: pmedAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }
    }
  ])

  return (
    <div>
      <div className="page">
        <img src={daLogo} alt="D.A Logo" className='logo' />
        <img src={bagongPilipinasLogo} alt="Bagong Pilipinas Logo" className='logo' />
        <img src={ictMonthLogo} alt="Bayang Digital" className='logo' />
        <div className="top-right-links">
          <a href="/">Home</a>
          <a href="#">About</a>
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
                      height={200}
                      width={200}
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