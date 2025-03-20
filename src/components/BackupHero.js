import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.png';

const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: white;
  overflow: hidden;
  background-color: #111;
`;

const ImageContainer = styled.div`
  width: 90%;
  height: 85vh;
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.02);

    &::before {
      opacity: 1;
    }

    .hero-content {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 2;

  ${ImageContainer}:hover & {
    opacity: 1;
  }
`;

const HeroContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
  z-index: 3;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
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

const BackupHero = () => {
  return (
    <HeroContainer>
      <ImageContainer>
        <img 
          src={heroImage} 
          alt="Hero background" 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1
          }} 
        />
        <ImageOverlay />
        <HeroContent className="hero-content">
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
      </ImageContainer>
    </HeroContainer>
  );
};

export default BackupHero; 