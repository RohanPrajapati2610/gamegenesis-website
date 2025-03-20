import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// Import knight character image
import knightImage from '../assets/q.png';

const CTASection = styled.section`
  background-color: #000;
  color: white;
  padding: 5rem 0 10rem; /* Reduced bottom padding */
  width: 100%;
  position: relative;
  margin-bottom: 0;
  z-index: 0;
`;

const CTAContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
`;

const CTABox = styled.div`
  background-color: #1A1A1A;
  border-radius: 8px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #FF6B6B;
  border-bottom: 1px solid #FF6B6B;
  height: 400px;
  max-height: 400px;
  overflow: visible; /* Important - allow content to overflow */
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, #8EE3D0, #FF6B6B);
  }
`;

const CTAContent = styled.div`
  padding: 2.5rem;
  width: 60%;
  
  @media (max-width: 992px) {
    width: 100%;
    padding: 2rem;
  }
`;

const HeadingGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 1rem;
  font-family: 'Orbitron', sans-serif;
  
  span:first-child {
    color: #8EE3D0;
    display: block;
  }
  
  span:nth-child(2) {
    background: linear-gradient(to right, #F586A0, #FF6B6B);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: block;
    animation: ${HeadingGradient} 3s ease infinite;
    background-size: 200% auto;
  }
  
  span:last-child {
    color: #FFFFFF;
    display: block;
  }
`;

const CTADescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 550px;
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 0.8rem 1.5rem;
  background-color: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    border-color: #FF6B6B;
  }
  
  svg {
    margin-left: 0.5rem;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  right: 5%;
  top: -20px;
  width: 250px;
  height: 380px;
  z-index: 5;
  display: flex;
  align-items: flex-end;
  
  @media (max-width: 992px) {
    display: none;
  }
`;

const KnightImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.4));
`;

const CallToAction = () => {
  return (
    <CTASection className="CTASection">
      <CTAContainer>
        <CTABox>
          <CTAContent>
            <CTATitle>
              <span>Got an amazing</span>
              <span>Game</span>
              <span>Development</span>
              <span>Idea?</span>
            </CTATitle>
            <CTADescription>
              Ut dolor rerum cum totam ipsum et magnam voluptas aut sapiente illum
              aut ullam esse. Et optio suscipit At aliquam dolores in perferendis
              temporibus eum delectus Ut dolor rerum.
            </CTADescription>
            <CTAButton to="/contact">
              Let's Discuss
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </CTAButton>
          </CTAContent>
        </CTABox>
        
        <ImageWrapper>
          <KnightImage src={knightImage} alt="Game Character Knight" />
        </ImageWrapper>
      </CTAContainer>
    </CTASection>
  );
};

export default CallToAction;