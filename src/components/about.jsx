import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faSeedling, faTractor, faChartLine } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Arial', 'Roboto', sans-serif;
  color: #333;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const Header = styled.h1`
  font-size: 2.5rem;
  color: #2c5e1a;
  text-align: center;
  margin-bottom: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const SubHeader = styled.h2`
  font-size: 1.8rem;
  color: #4a8c34;
  margin-top: 40px;
  margin-bottom: 20px;
  border-bottom: 2px solid #4a8c34;
  padding-bottom: 10px;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const MissionStatement = styled.blockquote`
  font-size: 1.2rem;
  font-style: italic;
  color: #4a8c34;
  border-left: 4px solid #4a8c34;
  padding: 20px;
  margin: 30px 0;
  background-color: #e8f5e9;
  border-radius: 5px;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const FeatureItem = styled.div`
  text-align: center;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const FeatureIcon = styled(FontAwesomeIcon)`
  font-size: 2.5rem;
  color: #ffffff;
  background-color: #4a8c34;
  padding: 20px;
  border-radius: 50%;
  margin-bottom: 20px;
  transition: all 0.3s ease;

  ${FeatureItem}:hover & {
    transform: scale(1.1);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  color: #2c5e1a;
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  font-size: 0.9rem;
  color: #555;
`;

const AboutPage = () => {
  return (
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
  );
};

export default AboutPage;