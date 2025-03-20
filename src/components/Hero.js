import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.png'; // Correctly import the image

const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5rem;
  color: white;
  overflow: hidden;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: #000; /* Fallback color */
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`;

const HeroContent = styled.div`
  max-width: 800px;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 5rem;
  margin-bottom: 1rem;
  font-weight: bold;
  line-height: 1.1;
  font-family: 'Orbitron', sans-serif;
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 700px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled(Link)`
  padding: 0.8rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
`;

const PrimaryButton = styled(Button)`
  background-color: #4ECDC4;
  color: black;
  
  &:hover {
    background-color: #3DBCB4;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: white;
  border: 1px solid white;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const ArrowIcon = styled.span`
  margin-left: 8px;
`;

const Hero = () => {
  console.log("Hero image path:", heroImage); // Add this for debugging
  
  return (
    <HeroContainer>
      <HeroBackground>
        <BackgroundImage src={heroImage} alt="Game Development Background" />
      </HeroBackground>
      <HeroContent>
        <HeroTitle>We create worlds for you to play</HeroTitle>
        <HeroDescription>
          Lorem ipsum dolor sit amet. Qui debitis mollitia et quos possimus aut nihil iure. 
          Non molestiae nisi qui vitae dolore ut fuga veritatis sit reprehenderit eius quo 
          rerum exercitationem. Id iure eius et quaerat nulla et temporibus voluptas cum 
          tenetur corrupti qui debitis saepe!
        </HeroDescription>
        <ButtonContainer>
          <PrimaryButton to="/get-started">
            Get Started <ArrowIcon>→</ArrowIcon>
          </PrimaryButton>
          <SecondaryButton to="/learn-more">
            Learn More
          </SecondaryButton>
        </ButtonContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero; 