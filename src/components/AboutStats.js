import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AboutSection = styled.section`
  background-color: #000;
  color: white;
  padding: 5rem 2rem;
  width: 100%;
`;

const AboutHeader = styled.div`
  margin-bottom: 8rem;
  padding-left: 5rem;
`;

const AboutTitle = styled(Link)`
  font-size: 4.5rem;
  font-weight: bold;
  font-family: 'Orbitron', sans-serif;
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  
  span {
    display: inline-block;
    background: linear-gradient(to right, #4ECDC4, #FF6B6B);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  
  svg {
    margin-left: 1rem;
    font-size: 3rem;
    color: #FF6B6B;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const StatItem = styled.div`
  text-align: center;
  flex: 1;
  min-width: 220px;
  background-color: #111;
  border-radius: 10px;
  padding: 2.5rem 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transform: translateY(0);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(78, 205, 196, 0.2);
  }
`;

const StatNumber = styled.h3`
  font-size: 5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  font-family: 'Orbitron', sans-serif;
  
  span {
    background: linear-gradient(to right, #4ECDC4, #FF6B6B);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

const StatTitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.4;
`;

const AboutStats = () => {
  return (
    <AboutSection>
      <AboutHeader>
        <AboutTitle to="/about">
          About Us <span>→</span>
        </AboutTitle>
      </AboutHeader>
      
      <StatsContainer>
        <StatItem>
          <StatNumber>350<span>+</span></StatNumber>
          <StatTitle>Game Artists and Developers</StatTitle>
        </StatItem>
        
        <StatItem>
          <StatNumber>350<span>+</span></StatNumber>
          <StatTitle>Game Artists and Developers</StatTitle>
        </StatItem>
        
        <StatItem>
          <StatNumber>350<span>+</span></StatNumber>
          <StatTitle>Game Artists and Developers</StatTitle>
        </StatItem>
        
        <StatItem>
          <StatNumber>350<span>+</span></StatNumber>
          <StatTitle>Game Artists and Developers</StatTitle>
        </StatItem>
      </StatsContainer>
    </AboutSection>
  );
};

export default AboutStats; 