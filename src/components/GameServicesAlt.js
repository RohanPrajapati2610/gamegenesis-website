import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import characterImage from '../assets/j.png';

const ServicesSection = styled.section`
  background-color: #000;
  color: white;
  padding: 6rem 2rem;
  width: 100%;
  overflow: hidden;
  position: relative;
  background: radial-gradient(circle at top right, rgba(60, 0, 60, 0.3), rgba(0, 0, 0, 0.9) 70%);
`;

const SectionContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1400px;
  margin: 0 auto;
`;

const LeftColumn = styled.div`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  padding: 2rem;
  z-index: 1;
  align-content: center;
  
  @media (max-width: 1024px) {
    flex: 100%;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

const RightColumn = styled.div`
  flex: 1;
  min-width: 300px;
  padding: 2rem;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 1024px) {
    flex: 100%;
  }
`;

const ServiceCard = styled.div`
  border: 1px solid #FF6B6B;
  border-radius: 8px;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(60, 0, 60, 0.8), rgba(0, 0, 0, 0.9));
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(255, 107, 107, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(255, 107, 107, 0.2);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
`;

const CardIcon = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 1rem;
  color: #4ECDC4;
  font-size: 2rem;
  
  svg {
    fill: #4FFF4F;
    width: 100%;
    height: 100%;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-family: 'Orbitron', sans-serif;
  color: #4ECDC4;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  overflow: hidden;
  flex: 1;
  color: white;
`;

const CharacterImage = styled.div`
  background-image: url(${characterImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 750px;
  width: 100%;
  position: relative;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -10%;
    width: 120%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(139, 0, 139, 0.4), rgba(60, 0, 60, 0) 70%);
    z-index: -1;
  }
`;

const GameServicesAlt = () => {
  return (
    <ServicesSection>
      <SectionContent>
        <LeftColumn>
          <ServiceCard>
            <CardHeader>
              <CardIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
                  <path d="M7.5 4C4.46 4 2 6.46 2 9.5S4.46 15 7.5 15c2.64 0 4.84-1.84 5.41-4.3.3.07.59.15.9.15 2.21 0 4-1.79 4-4s-1.79-4-4-4c-.31 0-.6.08-.9.15C12.34 5.84 10.14 4 7.5 4zm0 2c1.93 0 3.5 1.57 3.5 3.5S9.43 13 7.5 13 4 11.43 4 9.5 5.57 6 7.5 6zm6.5 1c1.1 0 2 .9 2 2s-.9 2-2 2c1.1 0-2-.9-2-2s.9-2 2-2zm2.5 8c-2.21 0-4 1.79-4 4v.5c0 .13.01.26.02.39.03.25.09.5.16.74l.11.31c.06.16.13.31.22.46.04.07.08.13.13.2.13.18.28.35.44.5.11.09.23.18.35.26.08.05.16.1.24.15.14.07.29.13.44.19.1.03.19.07.29.09.27.07.55.11.84.11s.57-.04.84-.11c.1-.03.19-.06.29-.09.15-.06.3-.12.44-.19.08-.04.16-.1.24-.15.12-.08.24-.16.35-.26.16-.15.31-.32.44-.5.05-.07.09-.13.13-.2.08-.15.16-.3.22-.46l.11-.31c.07-.24.13-.49.16-.74.02-.13.02-.26.02-.39v-.5c.01-2.21-1.79-4-3.99-4zm-7 0c-3.31 0-6 2.69-6 6v.5c0 .13.01.26.02.39.03.25.09.5.16.74l.11.31c.06.16.13.31.22.46.04.07.08.13.13.2.13.18.28.35.44.5.11.09.23.18.35.26.08.05.16.1.24.15.14.07.29.13.44.19.1.03.19.07.29.09.27.07.55.11.84.11s.57-.04.84-.11c.1-.03.19-.06.29-.09.15-.06.3-.12.44-.19.08-.04.16-.1.24-.15.12-.08.24-.16.35-.26.16-.15.31-.32.44-.5.05-.07.09-.13.13-.2.08-.15.16-.3.22-.46l.11-.31c.07-.24.13-.49.16-.74.02-.13.02-.26.02-.39v-.5c0-3.31-2.69-6-6-6z" />
                </svg>
              </CardIcon>
              <CardTitle>Full-Cycle Development</CardTitle>
            </CardHeader>
            <CardDescription>
              Our team handles every aspect of game development from concept to launch. We create stunning visuals, engaging gameplay, and optimize performance to deliver a polished gaming experience that meets the highest industry standards.
            </CardDescription>
          </ServiceCard>
          
          <ServiceCard>
            <CardHeader>
              <CardIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H6v-.99c.2-.72 3.3-2.01 6-2.01s5.8 1.29 6 2v1z" />
                </svg>
              </CardIcon>
              <CardTitle>Game Co-Development</CardTitle>
            </CardHeader>
            <CardDescription>
              Partner with our experienced team to enhance your existing project. We seamlessly integrate with your workflow to provide specialized expertise, additional resources, and innovative solutions that elevate your game to new heights.
            </CardDescription>
          </ServiceCard>
          
          <ServiceCard>
            <CardHeader>
              <CardIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
                  <path d="M17 15l1.55 1.55c-.96 1.69-3.33 3.04-5.55 3.37V11h3V9h-3V7.82C14.16 7.4 15 6.3 15 5c0-1.65-1.35-3-3-3S9 3.35 9 5c0 1.3.84 2.4 2 2.82V9H8v2h3v8.92c-2.22-.33-4.59-1.68-5.55-3.37L7 15l-4-3 4-3-1.55-1.55C6.37 5.11 9.5 4 12 4c2.5 0 5.63 1.11 6.55 3.45L17 9l4 3-4 3z" />
                </svg>
              </CardIcon>
              <CardTitle>2D & 3D Development</CardTitle>
            </CardHeader>
            <CardDescription>
              From vibrant 2D worlds to immersive 3D environments, we craft visually stunning and technically optimized game assets. Our artists and developers collaborate to create captivating visuals that bring your game's universe to life.
            </CardDescription>
          </ServiceCard>
          
          <ServiceCard>
            <CardHeader>
              <CardIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
                  <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h18v8zM6 15h2v-2h2v-2H8V9H6v2H4v2h2z" />
                  <circle cx="14.5" cy="13.5" r="1.5" />
                  <circle cx="18.5" cy="10.5" r="1.5" />
                </svg>
              </CardIcon>
              <CardTitle>Game Dev for PC & Console</CardTitle>
            </CardHeader>
            <CardDescription>
              We specialize in developing high-performance games for PC and major console platforms. Our expertise in platform-specific optimization ensures your game delivers a smooth, responsive experience across different hardware configurations.
            </CardDescription>
          </ServiceCard>
        </LeftColumn>
        
        <RightColumn>
          <CharacterImage />
        </RightColumn>
      </SectionContent>
    </ServicesSection>
  );
};

export default GameServicesAlt; 