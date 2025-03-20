import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const TeamSection = styled.section`
  background-color: #000;
  color: white;
  padding: 6rem 2rem;
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

const HeaderContainer = styled.div`
  margin-bottom: 3rem;
`;

const TeamTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: bold;
  line-height: 1.1;
  font-family: 'Orbitron', sans-serif;
  margin-bottom: 0.5rem;
  color: white;
`;

const SubTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const GradientText = styled.span`
  background: linear-gradient(to right, #8EE3D0, #FF6B6B);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 3.5rem;
  font-family: 'Orbitron', sans-serif;
  
  span {
    margin-left: 0.5rem;
    color: #FF6B6B;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 900px;
  margin-bottom: 3rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const waveAnimation = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(10deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(10deg); }
  100% { transform: rotate(0deg); }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const handRiseAnimation = keyframes`
  0% { 
    transform: translateY(100px);
    opacity: 0;
  }
  10% { 
    transform: translateY(0);
    opacity: 1;
  }
  15% { 
    transform: rotate(0deg);
  }
  20% { 
    transform: rotate(15deg);
  }
  25% { 
    transform: rotate(0deg);
  }
  30% { 
    transform: rotate(15deg);
  }
  35% {
    transform: rotate(0deg);
  }
  100% { 
    transform: rotate(0deg);
    opacity: 1;
  }
`;

const textAppearAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px) scale(0.9);
  }
  10% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  80% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const HandContainer = styled.div`
  position: relative;
  width: 100px;
  height: 110px;
  margin-bottom: -25px;
  z-index: 10;
  animation: ${handRiseAnimation} 8s ease-in-out infinite;
  animation-fill-mode: both;
`;

const Hand = styled.div`
  width: 50px;
  height: 80px;
  background-color: #FFB6A6;
  border-radius: 12px 12px 0 0;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  
  /* Add thumb */
  &::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 25px;
    background-color: #FFB6A6;
    border-radius: 8px;
    left: -8px;
    top: 35px;
    transform: rotate(-20deg);
  }
  
  /* Add fingers */
  &::after {
    content: '';
    position: absolute;
    width: 50px;
    height: 20px;
    background-color: #FFB6A6;
    border-radius: 12px 12px 0 0;
    top: -12px;
    left: 0;
    
    /* Create finger separations with box-shadow */
    box-shadow: 
      -8px 0 0 -4px rgba(0, 0, 0, 0.1),
      8px 0 0 -4px rgba(0, 0, 0, 0.1),
      24px 0 0 -4px rgba(0, 0, 0, 0.1);
  }
`;

const GreenBubble = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: #4FFF4F;
  color: black;
  padding: 5px 8px;
  border-radius: 10px;
  font-size: 0.7rem;
  font-weight: bold;
  z-index: 2;
  animation: ${textAppearAnimation} 8s ease-in-out infinite;
  animation-delay: 1.2s;
  animation-fill-mode: both;
`;

const OrangeBubble = styled.div`
  position: absolute;
  top: 35px;
  left: 5px;
  background-color: #FF6B6B;
  color: white;
  padding: 5px 8px;
  border-radius: 10px;
  font-size: 0.7rem;
  font-weight: bold;
  z-index: 2;
  animation: ${textAppearAnimation} 8s ease-in-out infinite;
  animation-delay: 1.5s;
  animation-fill-mode: both;
`;

const RoleCard = styled.div`
  width: 100%;
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 2rem 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(255, 107, 107, 0.2);
    border-color: #FF6B6B;
  }
`;

const RoleTitle = styled.h3`
  font-family: 'Orbitron', sans-serif;
  font-size: 1.4rem;
  color: white;
  margin: 0 0 0.5rem 0;
`;

const RoleSubtitle = styled.h4`
  font-family: 'Orbitron', sans-serif;
  font-size: 1.2rem;
  color: #4ECDC4;
  margin: 0;
`;

const RoleDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.7);
  margin: 0.5rem 0;
`;

// Add a finger wave animation
const fingerWaveAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(0); }
`;

const Finger = styled.div`
  position: absolute;
  width: 10px;
  height: 24px;
  background-color: #FFB6A6;
  border-radius: 5px;
  top: -20px;
  
  &:nth-child(1) {
    left: 5px;
    height: 28px;
    animation: ${fingerWaveAnimation} 1s ease-in-out infinite;
    animation-delay: 0.1s;
  }
  
  &:nth-child(2) {
    left: 18px;
    height: 32px;
    animation: ${fingerWaveAnimation} 1s ease-in-out infinite;
    animation-delay: 0.2s;
  }
  
  &:nth-child(3) {
    left: 31px;
    height: 28px;
    animation: ${fingerWaveAnimation} 1s ease-in-out infinite;
    animation-delay: 0.3s;
  }
  
  &:nth-child(4) {
    left: 43px;
    height: 22px;
    animation: ${fingerWaveAnimation} 1s ease-in-out infinite;
    animation-delay: 0.4s;
  }
`;

const TeamComposition = () => {
  // Array of team roles to display
  const roles = [
    'Game Designer',
    'Level Designer',
    'UI/UX Designer',
    'Character Designer',
    'Environment Artist',
    'Texture Artist',
    '3D Modeler',
    'Animator',
    'Technical Artist',
    'VFX Artist',
    'Sound Designer',
    'QA Tester'
  ];

  return (
    <TeamSection>
      <SectionContent>
        <HeaderContainer>
          <TeamTitle>Team Composition You Get For Your Game</TeamTitle>
          <SubTitle>
            <GradientText>
              Development Project <span>→</span>
            </GradientText>
          </SubTitle>
          <Description>
            As a top game development company, we pride ourselves on delivering cutting-edge solutions that redefine gaming experiences. Explore our modern-edge game development services that can help you set new standards in the gaming industry.
          </Description>
        </HeaderContainer>
        
        <TeamGrid>
          {roles.map((role, index) => (
            <CardWrapper key={index}>
              <HandContainer 
                className="hand-container" 
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <GreenBubble 
                  className="designer-text-green"
                  style={{ 
                    animationDelay: `${1.2 + index * 0.2}s` 
                  }}
                >
                  I am
                </GreenBubble>
                <Hand>
                  <Finger />
                  <Finger />
                  <Finger />
                  <Finger />
                </Hand>
                <OrangeBubble 
                  className="designer-text-orange"
                  style={{ 
                    animationDelay: `${1.5 + index * 0.2}s` 
                  }}
                >
                  Designer
                </OrangeBubble>
              </HandContainer>
              <RoleCard className="role-card">
                <div>
                  <RoleTitle>Design</RoleTitle>
                  <RoleSubtitle>Sprint</RoleSubtitle>
                  <RoleDescription>
                    Ut dolor rerum cum totam ipsum et magnam voluptas aut sapiente illum aut ullam esse.
                  </RoleDescription>
                </div>
              </RoleCard>
            </CardWrapper>
          ))}
        </TeamGrid>
      </SectionContent>
    </TeamSection>
  );
};

export default TeamComposition; 