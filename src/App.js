import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import BackupHero from './components/BackupHero';
import HomePage from './components/HomePage';
import GenresPage from './pages/GenresPage';
import TeamPage from './pages/TeamPage';
import TechnologyPage from './pages/TechnologyPage';
import Footer from './components/Footer';
import GlobalStyles from './components/GlobalStyles';
import './App.css';

const AppContainer = styled.div`
  position: relative;
  background-color: #000;
`;

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <AppContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/genres" element={<GenresPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </AppContainer>
      <Footer />
    </Router>
  );
}

export default App;
