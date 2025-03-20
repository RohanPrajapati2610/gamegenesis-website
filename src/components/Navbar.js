import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #000;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
`;

const LogoImage = styled.img`
  height: 40px;
  margin-right: 10px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: white;
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const ServiceDropdown = styled.div`
  position: relative;
  display: inline-block;
  
  &:hover .dropdown-content {
    display: block;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #111;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 4px;
`;

const DropdownLink = styled(Link)`
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  
  &:hover {
    background-color: #222;
  }
`;

const ContactButton = styled(Link)`
  display: flex;
  align-items: center;
  background-color: transparent;
  color: white;
  padding: 0.5rem 1.5rem;
  border: 1px solid white;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: white;
    color: black;
  }
`;

const ArrowIcon = styled.span`
  margin-left: 8px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo as={Link} to="/">
        <LogoImage src="/logo.svg" alt="GameGenesis Logo" />
        GameGenesis
      </Logo>
      
      <NavLinks>
        <ServiceDropdown>
          <NavLink to="/services">Service ▼</NavLink>
          <DropdownContent className="dropdown-content">
            <DropdownLink to="/services/game-development">Game Development</DropdownLink>
            <DropdownLink to="/services/3d-modeling">3D Modeling</DropdownLink>
            <DropdownLink to="/services/animation">Animation</DropdownLink>
            <DropdownLink to="/genres">Game Genres</DropdownLink>
            <DropdownLink to="/team">Team Composition</DropdownLink>
            <DropdownLink to="/technology">Game Technology</DropdownLink>
          </DropdownContent>
        </ServiceDropdown>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/hire">Hire</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </NavLinks>
      
      <ContactButton to="/contact">
        Contact Us <ArrowIcon>→</ArrowIcon>
      </ContactButton>
    </NavbarContainer>
  );
};

export default Navbar; 