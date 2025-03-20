import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const TechSection = styled.section`
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

const TechTitle = styled.h2`
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

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
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

// Controller animation
const controllerPulse = keyframes`
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

const controllerLightUp = keyframes`
  0% {
    opacity: 0.7;
    box-shadow: 0 0 4px #FF0000;
  }
  50% {
    opacity: 1;
    box-shadow: 0 0 6px #FF0000, 0 0 8px #FF0000;
  }
  100% {
    opacity: 0.7;
    box-shadow: 0 0 4px #FF0000;
  }
`;

const TechCard = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid #1E90FF;
  border-radius: 8px;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: ${props => props.delay || '0s'};
  opacity: 0;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(30, 144, 255, 0.3);
  }
`;

const ControllerIcon = styled.div`
  position: relative;
  width: 90px;
  height: 90px;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 0 5px rgba(30, 144, 255, 0.3));
  
  svg {
    width: 100%;
    height: 100%;
    animation: ${controllerPulse} 3s ease-in-out infinite;
  }
`;

const RedDot = styled.div`
  position: absolute;
  top: 0;
  right: 18px;
  width: 8px;
  height: 8px;
  background-color: #FF0000;
  border-radius: 50%;
  animation: ${controllerLightUp} 2s ease-in-out infinite;
`;

const TechName = styled.h3`
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
`;

const TechDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: white;
`;

// Component for How We Work section
const WorkSection = styled(TechSection)`
  margin-top: 5rem;
`;

// Process card styling
const ProcessCard = styled(TechCard)`
  border-color: #FF6B6B;
  position: relative;
  
  &:hover {
    box-shadow: 0 5px 15px rgba(255, 107, 107, 0.3);
  }
  
  &::before {
    content: '${props => props.number}';
    position: absolute;
    top: -15px;
    left: -15px;
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #FF6B6B, #FF3366);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.2rem;
    color: white;
  }
`;

const ProcessIcon = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 1.5rem;
  background-color: rgba(255, 107, 107, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 50%;
    height: 50%;
    fill: #FF6B6B;
  }
`;

const GameTechnology = () => {
  // Tech data
  const technologies = [
    {
      name: 'Unity',
      description: 'Industry standard for cross-platform game development with powerful 2D and 3D capabilities. Perfect for indie and high-end commercial projects.'
    },
    {
      name: 'Unreal Engine',
      description: 'Cutting-edge graphics and rendering technology for creating visually stunning games with advanced physics and realistic environments.'
    },
    {
      name: 'Mobile Technology',
      description: 'Specialized frameworks for iOS and Android development, optimized for performance and reach. Perfect for casual and mid-core gaming.'
    },
    {
      name: 'Cloud Gaming',
      description: 'Server-side rendering and streaming technology that delivers high-quality gaming experiences on any device without hardware limitations.'
    }
  ];

  // How We Work data
  const workProcess = [
    {
      name: 'Discovery & Planning',
      description: 'We begin with in-depth consultations to understand your vision, target audience, and project goals. Our team creates detailed specifications and development roadmaps.'
    },
    {
      name: 'Design & Prototyping',
      description: 'Our designers create concept art, character designs, and gameplay mechanics. We develop interactive prototypes to test and refine core experiences.'
    },
    {
      name: 'Development Sprints',
      description: 'Using agile methodologies, we break development into manageable sprints, delivering playable builds regularly for your feedback and iterative improvement.'
    },
    {
      name: 'Testing & Launch',
      description: 'Rigorous quality assurance process eliminates bugs and optimizes performance. We handle submission to app stores and provide launch marketing support.'
    }
  ];

  // Game controller SVG - simplified version to match reference
  const GameController = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="#1E90FF">
      {/* Controller body */}
      <path d="M448 64H192C85.96 64 0 149.96 0 256s85.96 192 192 192h256c106.04 0 192-85.96 192-192S554.04 64 448 64z" />
      
      {/* D-pad (cross shape) */}
      <rect x="160" y="224" width="70" height="30" rx="5" fill="#003366" />
      <rect x="180" y="194" width="30" height="90" rx="5" fill="#003366" />
      
      {/* Action buttons (A, B, X, Y) */}
      <circle cx="416" cy="248" r="18" fill="#FFAA00" />
      <circle cx="416" cy="296" r="18" fill="#FFAA00" />
      <circle cx="464" cy="200" r="18" fill="#FFAA00" />
      <circle cx="464" cy="248" r="18" fill="#FFAA00" />
      
      {/* Button borders */}
      <circle cx="416" cy="248" r="18" fill="none" stroke="#FF8800" strokeWidth="2" />
      <circle cx="416" cy="296" r="18" fill="none" stroke="#FF8800" strokeWidth="2" />
      <circle cx="464" cy="200" r="18" fill="none" stroke="#FF8800" strokeWidth="2" />
      <circle cx="464" cy="248" r="18" fill="none" stroke="#FF8800" strokeWidth="2" />
    </svg>
  );
  
  // Process icons SVGs
  const DiscoveryIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
    </svg>
  );
  
  const DesignIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/>
    </svg>
  );
  
  const DevelopmentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
      <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/>
    </svg>
  );
  
  const LaunchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9L224 380.2c-13.3 4.8-24.9 8.8-33.8 11.8c-11.5 3.8-23.8 .8-32.2-7.7l-30.7-30.7c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9L224 380.2c-13.3 4.8-24.9 8.8-33.8 11.8c-11.5 3.8-23.8 .8-32.2-7.7l-1.4-1.4zM112 192a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"/>
    </svg>
  );

  const processIcons = [DiscoveryIcon, DesignIcon, DevelopmentIcon, LaunchIcon];

  return (
    <>
      <TechSection>
        <SectionContent>
          <HeaderContainer>
            <TechTitle>Game Development Technology</TechTitle>
            <SubTitle>
              <GradientText>
                Stack We Use <span>→</span>
              </GradientText>
            </SubTitle>
            <Description>
              As a top game development company, we pride ourselves on delivering cutting-edge solutions that redefine gaming experiences. Explore our modern-edge game development services that can help you set new standards in the gaming industry.
            </Description>
          </HeaderContainer>
          
          <TechGrid>
            {technologies.map((tech, index) => (
              <TechCard key={index} delay={`${index * 0.2}s`}>
                <ControllerIcon style={{ animationDelay: `${index * 0.5}s` }}>
                  <GameController />
                  <RedDot style={{ animationDelay: `${index * 0.3}s` }} />
                </ControllerIcon>
                <TechName>{tech.name}</TechName>
                <TechDescription>{tech.description}</TechDescription>
              </TechCard>
            ))}
          </TechGrid>
        </SectionContent>
      </TechSection>
      
      <WorkSection>
        <SectionContent>
          <HeaderContainer>
            <TechTitle>How We Work</TechTitle>
            <SubTitle>
              <GradientText>
                Our Process <span>→</span>
              </GradientText>
            </SubTitle>
            <Description>
              Our streamlined development process ensures the highest quality output while maintaining transparent communication throughout the project lifecycle. We follow a proven methodology that balances creativity with technical excellence.
            </Description>
          </HeaderContainer>
          
          <TechGrid>
            {workProcess.map((process, index) => {
              const ProcessIconComponent = processIcons[index];
              return (
                <ProcessCard key={index} number={index + 1} delay={`${index * 0.2}s`}>
                  <ProcessIcon>
                    <ProcessIconComponent />
                  </ProcessIcon>
                  <TechName>{process.name}</TechName>
                  <TechDescription>{process.description}</TechDescription>
                </ProcessCard>
              );
            })}
          </TechGrid>
        </SectionContent>
      </WorkSection>
    </>
  );
};

export default GameTechnology; 