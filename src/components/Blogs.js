import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// Import images from assets folder
import blogImage1 from '../assets/e.png';
import blogImage2 from '../assets/f.png';
import blogImage3 from '../assets/g.png';

const BlogsSection = styled.section`
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

const BlogsTitle = styled.h2`
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

const BlogGrid = styled.div`
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

const BlogCard = styled.div`
  background-color: #0F0F0F;
  border-radius: 10px;
  overflow: hidden;
  animation: ${fadeInScale} 0.8s ease-out forwards;
  animation-delay: ${props => props.delay || '0s'};
  opacity: 0;
  height: 100%;
  transition: transform 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #000;
`;

const BlogDate = styled.span`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
`;

const BlogCategory = styled.span`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
`;

const BlogContent = styled.div`
  padding: 1.5rem;
`;

const BlogTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
  color: white;
`;

const ViewAllButton = styled(Link)`
  align-self: flex-end;
  margin: 2rem 2rem 0 0;
  padding: 0.8rem 1.5rem;
  background-color: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  font-size: 0.9rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    border-color: #FF6B6B;
  }
  
  svg {
    margin-left: 0.5rem;
  }
`;

const Blogs = () => {
  const blogPosts = [
    {
      image: blogImage1,
      date: '01 Aug 2023',
      category: 'Global',
      title: 'How technology is revolutionizing the travel experience'
    },
    {
      image: blogImage2,
      date: '21 Nov 2023',
      category: 'Global',
      title: 'Tech enhanced journeys: How travel industry embraces innovation'
    },
    {
      image: blogImage3,
      date: '05 Dec 2023',
      category: 'Global',
      title: 'A Journey of a thousand miles begins with a single step'
    }
  ];

  return (
    <BlogsSection>
      <SectionContent>
        <BlogsTitle>
          <span>Blogs</span> <Arrow>↗</Arrow>
        </BlogsTitle>
        
        <BlogGrid>
          {blogPosts.map((post, index) => (
            <BlogCard key={index} delay={`${0.2 * index}s`}>
              <BlogImage src={post.image} alt={post.title} />
              <BlogMeta>
                <BlogDate>{post.date}</BlogDate>
                <BlogCategory>{post.category}</BlogCategory>
              </BlogMeta>
              <BlogContent>
                <BlogTitle>{post.title}</BlogTitle>
              </BlogContent>
            </BlogCard>
          ))}
        </BlogGrid>
        
        <ViewAllButton to="/blogs">
          View All
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </ViewAllButton>
      </SectionContent>
    </BlogsSection>
  );
};

export default Blogs; 