import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const ChooseSection = styled.section`
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

const ChooseTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: bold;
  line-height: 1.1;
  font-family: 'Orbitron', sans-serif;
  color: white;
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

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Animations
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

const pulseIcon = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const gearSpinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const ChooseCard = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid #FF6B6B;
  border-radius: 8px;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: ${props => props.delay || '0s'};
  opacity: 0;
  height: 100%;
`;

const IconContainer = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 1.5rem;
  position: relative;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-family: 'Orbitron', sans-serif;
  margin-bottom: 1.5rem;
  color: white;
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
`;

// Bulb icon animation
const bulbGlowAnimation = keyframes`
  0% {
    box-shadow: 0 0 5px #FFCC00;
  }
  50% {
    box-shadow: 0 0 20px #FFCC00, 0 0 30px #FFCC00;
  }
  100% {
    box-shadow: 0 0 5px #FFCC00;
  }
`;

const LightBulb = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  animation: ${pulseIcon} 3s ease-in-out infinite;
  
  .bulb {
    position: absolute;
    top: 10px;
    left: 30px;
    width: 40px;
    height: 40px;
    background-color: #FFCC00;
    border-radius: 50% 50% 5px 5px;
    animation: ${bulbGlowAnimation} 2s infinite;
  }
  
  .base {
    position: absolute;
    bottom: 20px;
    left: 40px;
    width: 20px;
    height: 30px;
    background-color: #AAA;
    border-radius: 5px;
  }
  
  .light-ray {
    position: absolute;
    background-color: rgba(255, 204, 0, 0.5);
  }
  
  .ray1 {
    top: 0;
    left: 45px;
    height: 15px;
    width: 5px;
    transform: rotate(0deg);
  }
  
  .ray2 {
    top: 20px;
    left: 65px;
    height: 5px;
    width: 15px;
    transform: rotate(0deg);
  }
  
  .ray3 {
    top: 20px;
    left: 20px;
    height: 5px;
    width: 15px;
    transform: rotate(0deg);
  }
`;

// Brain icon animation
const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const BrainIcon = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  animation: ${floatAnimation} 4s ease-in-out infinite;
  
  .brain-main {
    position: absolute;
    top: 20px;
    left: 30px;
    width: 40px;
    height: 50px;
    background-color: #FF6B6B;
    border-radius: 20px 20px 10px 10px;
    animation: ${pulseAnimation} 2s infinite;
  }
  
  .brain-left {
    position: absolute;
    top: 25px;
    left: 25px;
    width: 20px;
    height: 30px;
    background-color: #FF6B6B;
    border-radius: 10px 0 10px 10px;
    transform: rotate(-15deg);
  }
  
  .brain-right {
    position: absolute;
    top: 25px;
    right: 25px;
    width: 20px;
    height: 30px;
    background-color: #FF6B6B;
    border-radius: 0 10px 10px 10px;
    transform: rotate(15deg);
  }
  
  .light {
    position: absolute;
    top: 5px;
    left: 40px;
    width: 20px;
    height: 20px;
    background-color: #FFCC00;
    border-radius: 50%;
    box-shadow: 0 0 10px #FFCC00;
  }
  
  .gear {
    position: absolute;
    background-color: #33AAFF;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .gear1 {
    top: 30px;
    left: 18px;
    width: 15px;
    height: 15px;
    animation: ${gearSpinAnimation} 4s linear infinite;
  }
  
  .gear2 {
    top: 30px;
    right: 18px;
    width: 15px;
    height: 15px;
    animation: ${gearSpinAnimation} 4s linear infinite reverse;
  }
`;

// Target with arrow animation
const arrowAnimation = keyframes`
  0% {
    transform: translateX(-50px) scale(0.8);
    opacity: 0;
  }
  70% {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
  90% {
    transform: translateX(5px) scale(1.1);
  }
  100% {
    transform: translateX(0) scale(1);
  }
`;

const Target = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  animation: ${pulseIcon} 4s ease-in-out infinite;
  
  .target-outer {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #FF3333;
  }
  
  .target-middle {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: white;
  }
  
  .target-inner {
    position: absolute;
    top: 30px;
    left: 30px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #FF3333;
  }
  
  .target-center {
    position: absolute;
    top: 40px;
    left: 40px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
  }
  
  .arrow {
    position: absolute;
    top: 45px;
    right: 40px;
    width: 40px;
    height: 10px;
    background-color: black;
    transform-origin: right center;
    animation: ${arrowAnimation} 3s ease-in-out infinite;
  }
  
  .arrow::before {
    content: '';
    position: absolute;
    top: -5px;
    right: 0;
    border-style: solid;
    border-width: 10px 10px 10px 0;
    border-color: transparent black transparent transparent;
  }
`;

const WhyChooseUs = () => {
  return (
    <ChooseSection>
      <SectionContent>
        <HeaderContainer>
          <ChooseTitle>
            <span style={{ color: '#8EE3D0' }}>Why</span>{' '}
            <GradientText>
              Choose US <span>→</span>
            </GradientText>
          </ChooseTitle>
          <Description>
            As a top game development company, we pride ourselves on delivering cutting-edge solutions that redefine gaming experiences. Explore our modern-edge game development services that can help you set new standards in the gaming industry.
          </Description>
        </HeaderContainer>
        
        <CardGrid>
          <ChooseCard delay="0.2s">
            <IconContainer>
              <LightBulb>
                <div className="bulb"></div>
                <div className="base"></div>
                <div className="light-ray ray1"></div>
                <div className="light-ray ray2"></div>
                <div className="light-ray ray3"></div>
              </LightBulb>
            </IconContainer>
            <CardTitle>Fresh Ideas</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet. Qui debitis mollitia et quos possimus aut nihil iure. Non molestiae nisi qui vitae dolore ut fuga veritatis sit reprehenderit eius quo rerum exercitationem. Id iure eius et quaerat nulla et
            </CardDescription>
          </ChooseCard>
          
          <ChooseCard delay="0.4s">
            <IconContainer>
              <BrainIcon>
                <div className="brain-main"></div>
                <div className="brain-left"></div>
                <div className="brain-right"></div>
                <div className="light"></div>
                <div className="gear gear1"></div>
                <div className="gear gear2"></div>
              </BrainIcon>
            </IconContainer>
            <CardTitle>Creative Design</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet. Qui debitis mollitia et quos possimus aut nihil iure. Non molestiae nisi qui vitae dolore ut fuga veritatis sit reprehenderit eius quo rerum exercitationem. Id iure eius et quaerat nulla et
            </CardDescription>
          </ChooseCard>
          
          <ChooseCard delay="0.6s">
            <IconContainer>
              <Target>
                <div className="target-outer"></div>
                <div className="target-middle"></div>
                <div className="target-inner"></div>
                <div className="target-center"></div>
                <div className="arrow"></div>
              </Target>
            </IconContainer>
            <CardTitle>On Time Schedule</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet. Qui debitis mollitia et quos possimus aut nihil iure. Non molestiae nisi qui vitae dolore ut fuga veritatis sit reprehenderit eius quo rerum exercitationem. Id iure eius et quaerat nulla et
            </CardDescription>
          </ChooseCard>
        </CardGrid>
      </SectionContent>
    </ChooseSection>
  );
};

export default WhyChooseUs; 