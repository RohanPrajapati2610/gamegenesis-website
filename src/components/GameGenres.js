import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import castleImage from '../assets/castel.png';

const GenreSection = styled.section`
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

const GenreTitle = styled.h2`
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

const GenreGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  
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

const GenreCard = styled.div`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(255, 107, 107, 0.2);
    
    img {
      transform: scale(1.1);
    }
  }
`;

const GenreImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const GenreOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const GenreName = styled.h3`
  font-family: 'Orbitron', sans-serif;
  font-size: 1.2rem;
  color: white;
  margin: 0;
`;

const GameGenres = () => {
  // Array of game genres to display
  const genres = [
    'Adventure',
    'Role-Playing',
    'Strategy',
    'Simulation',
    'Action',
    'Puzzle',
    'Sports',
    'Racing'
  ];

  return (
    <GenreSection>
      <SectionContent>
        <HeaderContainer>
          <GenreTitle>Genre of Game</GenreTitle>
          <SubTitle>
            <GradientText>
              We Serve <span>→</span>
            </GradientText>
          </SubTitle>
          <Description>
            As a top game development company, we pride ourselves on delivering cutting-edge solutions that redefine gaming experiences. Explore our modern-edge game development services that can help you set new standards in the gaming industry.
          </Description>
        </HeaderContainer>
        
        <GenreGrid>
          {genres.map((genre, index) => (
            <GenreCard key={index}>
              <GenreImage src={castleImage} alt={`${genre} Games`} />
              <GenreOverlay>
                <GenreName>{genre}</GenreName>
              </GenreOverlay>
            </GenreCard>
          ))}
        </GenreGrid>
      </SectionContent>
    </GenreSection>
  );
};

export default GameGenres; 