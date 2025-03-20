import React from 'react';
import styled from 'styled-components';
import BackupHero from './BackupHero';
import AboutStats from './AboutStats';
import GameServices from './GameServices';
import GameServicesAlt from './GameServicesAlt';
import GameGenres from './GameGenres';
import TeamComposition from './TeamComposition';
import GameTechnology from './GameTechnology';
import WhyChooseUs from './WhyChooseUs';
import GamePortfolio from './GamePortfolio';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Blogs from './Blogs';
import CallToAction from './CallToAction';

// Remove spacer component and create a wrapper component instead
const PageWrapper = styled.div`
  position: relative;
  background-color: #000;
  overflow: hidden;
`;

const HomePage = () => {
  return (
    <PageWrapper>
      <BackupHero />
      <AboutStats />
      <GameServices />
      <GameServicesAlt />
      <GameGenres />
      <TeamComposition />
      <GameTechnology />
      <WhyChooseUs />
      <GamePortfolio />
      <Testimonials />
      <FAQ />
      <Blogs />
      <CallToAction />
    </PageWrapper>
  );
};

export default HomePage; 