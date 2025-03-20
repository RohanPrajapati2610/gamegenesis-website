import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// Import images
import aImg from '../assets/a.png';
import bImg from '../assets/b.png';
import cImg from '../assets/c.png';
import dImg from '../assets/d.png';
import castleImg from '../assets/castel.png';

const PortfolioSection = styled.section`
  background-color: #000;
  color: white;
  padding: 6rem 0;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const SectionContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PortfolioTitle = styled.h2`
  font-size: 3.8rem;
  font-weight: bold;
  font-family: 'Orbitron', sans-serif;
  margin-bottom: 3rem;
  margin-left: 2rem;
  display: flex;
  align-items: center;
  animation: ${fadeIn} 0.8s ease-out forwards;
  
  span:first-child {
    color: #8EE3D0;
    margin-right: 1rem;
  }
  
  span:nth-child(2) {
    background: linear-gradient(to right, #F586A0, #FF6B6B);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

const Arrow = styled.span`
  font-size: 2.5rem;
  margin-left: 1rem;
  transform: rotate(45deg);
  color: #FF6B6B;
  display: inline-block;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 1.5rem;
  padding: 0 2rem;
  
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
  }
`;

const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const ImageHover = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.03);
  }
`;

const PortfolioImageWrapper = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  animation: ${fadeInScale} 0.8s ease-out forwards;
  animation-delay: ${props => props.delay || '0s'};
  opacity: 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    animation: ${ImageHover} 0.3s forwards;
  }
`;

const PortfolioImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const MainPortfolioImage = styled(PortfolioImageWrapper)`
  width: 100%;
  height: 480px;
  
  @media (min-width: 768px) {
    width: 560px;
    height: 480px;
  }
`;

const SmallImagesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    width: 560px;
  }
`;

const SmallPortfolioImage = styled(PortfolioImageWrapper)`
  width: 100%;
  aspect-ratio: 1 / 1;
  
  @media (min-width: 768px) {
    width: 100%;
    height: 229px;
  }
`;

const PortfolioOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PortfolioName = styled.h3`
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  margin: 0;
`;

const PortfolioArrow = styled.span`
  font-size: 2rem;
  color: white;
  transform: translateX(0);
  transition: transform 0.3s ease;
  
  ${PortfolioImageWrapper}:hover & {
    transform: translateX(5px);
  }
`;

const GamePortfolio = () => {
  return (
    <PortfolioSection>
      <SectionContent>
        <PortfolioTitle>
          <span>Game</span> <span>Portfolio</span> <Arrow>↗</Arrow>
        </PortfolioTitle>
        
        <PortfolioGrid>
          <MainPortfolioImage delay="0.1s">
            <PortfolioImage src={aImg} alt="Toy Picker Game" />
            <PortfolioOverlay>
              <PortfolioName>Toy Picker</PortfolioName>
              <PortfolioArrow>→</PortfolioArrow>
            </PortfolioOverlay>
          </MainPortfolioImage>
          
          <SmallImagesContainer>
            <SmallPortfolioImage delay="0.2s">
              <PortfolioImage src={bImg} alt="Dark Skies Game" />
            </SmallPortfolioImage>
            
            <SmallPortfolioImage delay="0.3s">
              <PortfolioImage src={cImg} alt="Truck Adventure Game" />
            </SmallPortfolioImage>
            
            <SmallPortfolioImage delay="0.4s">
              <PortfolioImage src={castleImg} alt="Castle Adventure Game" />
            </SmallPortfolioImage>
            
            <SmallPortfolioImage delay="0.5s">
              <PortfolioImage src={dImg} alt="Casino Game" />
            </SmallPortfolioImage>
          </SmallImagesContainer>
        </PortfolioGrid>
      </SectionContent>
    </PortfolioSection>
  );
};

export default GamePortfolio; 