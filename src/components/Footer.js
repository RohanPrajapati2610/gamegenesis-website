import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterSection = styled.footer`
  background: linear-gradient(90deg, #0294BA, #6E48AA);
  color: white;
  padding: 3rem 0 0.5rem;
  position: relative;
  z-index: 2;
  margin-top: -5rem; /* Reduced negative margin to prevent overlap */
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem; /* Reduced height to match margin-top */
    background: linear-gradient(to bottom, transparent, #0294BA);
    z-index: -1;
    pointer-events: none;
  }
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1.5rem;
  position: relative;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const LogoCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4ECDC4, #FF6B6B);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  font-weight: bold;
  font-size: 0.9rem;
`;

const LogoText = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
`;

const FooterDescription = styled.p`
  font-size: 0.8rem;
  line-height: 1.4;
  margin-bottom: 0.5rem;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnTitle = styled.h3`
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
`;

const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.8;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const ContactText = styled.span`
  font-size: 0.8rem;
  margin-left: 0.5rem;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 0.7rem;
  margin-top: 0.5rem;
`;

const SocialIcon = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: white;
  color: #0294BA;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 1rem;
  margin-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.7rem;
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <LogoSection>
          <LogoContainer>
            <LogoCircle>G</LogoCircle>
            <LogoText>GameGenesis</LogoText>
          </LogoContainer>
          <FooterDescription>
            Maecenas tristique in ipsum et commodo lorem
          </FooterDescription>
        </LogoSection>
        
        <FooterColumn>
          <ColumnTitle>About Us</ColumnTitle>
          <FooterLink to="/team">Our Team</FooterLink>
          <FooterLink to="/gallery">Gallery</FooterLink>
          <FooterLink to="/milestone">Milestone</FooterLink>
          <FooterLink to="/support">Support</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <ColumnTitle>Service</ColumnTitle>
          <FooterLink to="/development">Development</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
          <FooterLink to="/beta-test">Beta Test</FooterLink>
          <FooterLink to="/faq">Faq</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <ColumnTitle>Further Information</ColumnTitle>
          <FooterLink to="/terms">Terms & Condition</FooterLink>
          <FooterLink to="/privacy">Privacy Policy</FooterLink>
          <FooterLink to="/legal">Legal Info</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <ColumnTitle>Contact Us</ColumnTitle>
          <ContactItem>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <ContactText>082-543-8768-22</ContactText>
          </ContactItem>
          <ContactItem>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <ContactText>Dev@support.com</ContactText>
          </ContactItem>
          <SocialIcons>
            <SocialIcon to="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
              </svg>
            </SocialIcon>
            <SocialIcon to="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
              </svg>
            </SocialIcon>
            <SocialIcon to="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg>
            </SocialIcon>
          </SocialIcons>
        </FooterColumn>
      </FooterContainer>
      
      <Copyright>
        Copyright © 2025 GameGenesis - Game Development Service | Powered by GameGenesis - Game Development Service
      </Copyright>
    </FooterSection>
  );
};

export default Footer; 