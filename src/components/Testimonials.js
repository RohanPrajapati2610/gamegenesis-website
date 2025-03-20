import React from 'react';
import styled, { keyframes } from 'styled-components';

// Sample profile images
const PROFILE1 = "https://randomuser.me/api/portraits/women/44.jpg";
const PROFILE2 = "https://randomuser.me/api/portraits/women/68.jpg";
const PROFILE3 = "https://randomuser.me/api/portraits/men/32.jpg";

const TestimonialSection = styled.section`
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

const TestimonialTitle = styled.h2`
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

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 0 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
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

const TestimonialCard = styled.div`
  background-color: #1A1A1A;
  border-radius: 8px;
  border: 1px solid rgba(255, 107, 107, 0.3);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
  animation: ${fadeInScale} 0.8s ease-out forwards;
  animation-delay: ${props => props.delay || '0s'};
  opacity: 0;
  height: 100%;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(to right, #8EE3D0, #FF6B6B);
  }
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  flex-grow: 1;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 0 0 1.5rem 0;
  width: 100%;
`;

const TestimonialProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
  border: 2px solid #FF6B6B;
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileName = styled.h4`
  font-family: 'Orbitron', sans-serif;
  font-size: 1.1rem;
  margin: 0 0 0.3rem 0;
`;

const ProfileRole = styled.p`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  color: #FFAA00;
  
  svg {
    margin-right: 0.5rem;
  }
`;

const Testimonials = () => {
  const testimonials = [
    {
      text: "Ut dolor rerum cum totam ipsum et magnam voluptas aut sapiente illum aut ullam esse. Et optio suscipit At aliquam dolores in perferendis temporibus eum delectus",
      name: "Emily Johnson",
      role: "Design Lead",
      image: PROFILE1,
      rating: 4.9
    },
    {
      text: "Ut dolor rerum cum totam ipsum et magnam voluptas aut sapiente illum aut ullam esse. Et optio suscipit At aliquam dolores in perferendis temporibus eum delectus",
      name: "Olivia Carter",
      role: "Product Designer",
      image: PROFILE2,
      rating: 4.9
    },
    {
      text: "Ut dolor rerum cum totam ipsum et magnam voluptas aut sapiente illum aut ullam esse. Et optio suscipit At aliquam dolores in perferendis temporibus eum delectus",
      name: "Wyatt Turner",
      role: "CEO",
      image: PROFILE3,
      rating: 4.9
    }
  ];

  const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
    </svg>
  );

  return (
    <TestimonialSection>
      <SectionContent>
        <TestimonialTitle>
          <span>Testimonial</span> <Arrow>↗</Arrow>
        </TestimonialTitle>
        
        <TestimonialGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} delay={`${0.2 * index}s`}>
              <TestimonialText>{testimonial.text}</TestimonialText>
              <Divider />
              <TestimonialProfile>
                <ProfileInfo>
                  <ProfileImage src={testimonial.image} alt={testimonial.name} />
                  <ProfileDetails>
                    <ProfileName>{testimonial.name}</ProfileName>
                    <ProfileRole>{testimonial.role}</ProfileRole>
                  </ProfileDetails>
                </ProfileInfo>
                <Rating>
                  <StarIcon />
                  <span>{testimonial.rating}</span>
                </Rating>
              </TestimonialProfile>
            </TestimonialCard>
          ))}
        </TestimonialGrid>
      </SectionContent>
    </TestimonialSection>
  );
};

export default Testimonials; 