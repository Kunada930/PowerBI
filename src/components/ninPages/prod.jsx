import React, { useState } from 'react';
import Lottie from 'react-lottie';
import styled from 'styled-components';
import cropProductionAnimation from '../../animations/hr.json'
import supplyTrendsAnimation from "../../animations/hr.json";
import demandForecastingAnimation from "../../animations/hr.json";
import yieldAnalysisAnimation from "../../animations/hr.json";

// Styled components (reuse from your existing Page component)
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  background-color: #f8f9fa;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;

  @media (max-width: 969px) {
    justify-content: space-around;
  }
`;

const CardWrapper = styled.div`
  flex: 0 0 calc(50% - 20px);
  max-width: calc(50% - 20px);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const HeroSection = styled.div`
  background-color: #f8f9fa;
  color: #333;
  padding: 60px 20px;
  text-align: center;
`;

const HeroTitle = styled.h1`
  margin: 0;
  font-size: 50px;
  font-weight: 700;
  color: #0072ff;
  background: linear-gradient(180deg, #0072ff, #00c6ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ProdAndDemand = () => {
  const [cards] = useState([
    {
      title: 'Cagayan Valley Agriculture and Fishery Output and Productivity and Food Sufficiency',
      text: 'Cagayan Valley is a pivotal agricultural region known for its robust output and productivity in both farming and fisheries. The region excels in producing staple crops, high-value commodities, and diverse fishery products, contributing significantly to local and national food sufficiency. By leveraging advanced agricultural practices and sustainable resource management, Cagayan Valley continues to enhance its agricultural efficiency and resilience, ensuring a steady supply of food and bolstering economic growth.',
      animationOptions: { 
        loop: true,
        autoplay: true,
        animationData: cropProductionAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      },
      powerBIUrl: "https://app.powerbi.com/view?r=eyJrIjoiNmI1NDgyYzYtOTA0My00YjExLTg5ZGUtNTlhMmIyYWE3MDAzIiwidCI6IjY4OTgwNjFkLTFhNmItNGUzOS1hZGZjLWRjOGFmZTA3MjIwMSIsImMiOjEwfQ%3D%3D"
    },
    {
      title: 'Supply Trends',
      text: 'Analyze supply trends for various agricultural products.',
      animationOptions: { 
        loop: true,
        autoplay: true,
        animationData: supplyTrendsAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      },
      powerBIUrl: "https://app.powerbi.com/view?r=your_supply_trends_report_url"
    },
    {
      title: 'Demand Forecasting',
      text: 'Access demand forecasts to plan your production effectively.',
      animationOptions: { 
        loop: true,
        autoplay: true,
        animationData: demandForecastingAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      },
      powerBIUrl: "https://app.powerbi.com/view?r=your_demand_forecasting_report_url"
    },
    {
      title: 'Yield Analysis',
      text: 'Explore yield data and comparisons across different crops and regions.',
      animationOptions: { 
        loop: true,
        autoplay: true,
        animationData: yieldAnalysisAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      },
      powerBIUrl: "https://app.powerbi.com/view?r=your_yield_analysis_report_url"
    }
  ]);

  const handleViewAnalytics = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <PageWrapper>
      {/* <Navbar /> */}
      <HeroSection>
        <HeroTitle>Production Supply and Demand</HeroTitle>
      </HeroSection>
      <MainContent>
        <CardContainer>
          {cards.map((card, i) => (
            <CardWrapper key={i}>
              <div className="card">
                <h3>{card.title}</h3>
                <div className="lottie-container">
                  <Lottie
                    options={card.animationOptions}
                    height="100%"
                    width="100%"
                    style={{ maxWidth: '225px', maxHeight: '225px', margin: '0 auto' }}
                  />
                </div>
                <p>{card.text}</p>
                <button 
                  onClick={() => handleViewAnalytics(card.powerBIUrl)}
                  className="btn"
                >
                  View Analytics
                </button>
              </div>
            </CardWrapper>
          ))}
        </CardContainer>
      </MainContent>
      {/* <Footer /> */}
    </PageWrapper>
  );
}

export default ProdAndDemand;