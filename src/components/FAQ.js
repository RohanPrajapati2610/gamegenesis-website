import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const FAQSection = styled.section`
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

const FAQTitle = styled.h2`
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

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 2rem;
  max-width: 100%;
`;

const AccordionItem = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${fadeIn} 0.6s ease-out forwards;
  animation-delay: ${props => props.delay || '0s'};
  opacity: 0;
  
  &:first-child {
    border: 1px solid rgba(255, 107, 107, 0.3);
    border-radius: 8px;
    background-color: #1A1A1A;
    overflow: hidden;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(to right, #8EE3D0, #FF6B6B);
    }
  }
`;

const AccordionHeader = styled.div`
  padding: ${props => props.isActive ? '1.5rem 1.5rem 0 1.5rem' : '1.5rem'};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.9;
  }
`;

const QuestionText = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0;
  flex-grow: 1;
`;

const ToggleIcon = styled.span`
  transition: transform 0.3s ease;
  transform: ${props => props.isActive ? 'rotate(180deg)' : 'rotate(0)'};
  margin-left: 1rem;
  font-size: 1.5rem;
  color: ${props => props.isActive ? '#FF6B6B' : 'white'};
`;

const AccordionContent = styled.div`
  max-height: ${props => props.isActive ? '1000px' : '0'};
  overflow: hidden;
  transition: max-height 0.5s ease;
  padding: ${props => props.isActive ? '1rem 1.5rem 1.5rem 1.5rem' : '0 1.5rem'};
`;

const AnswerText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
`;

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: 'Lorem ipsum dolor sit amet. Et aperiam laudantium eum atque repellendus qui',
      answer: 'Ut dolor rerum cum totam ipsum et magnam voluptas aut sapiente illum aut ullam esse. Et optio suscipit At aliquam dolores in perferendis temporibus eum delectusUt dolor rerum cum totam ipsum et magnam voluptas aut sapiente illum aut ullam esse. Et optio suscipit At aliquam dolores in perferendis temporibus eum delectus'
    },
    {
      question: 'Lorem ipsum dolor sit amet. Et aperiam laudantium eum atque repellendus qui',
      answer: 'Ut dolor rerum cum totam ipsum et magnam voluptas aut sapiente illum aut ullam esse. Et optio suscipit At aliquam dolores in perferendis temporibus eum delectus'
    },
    {
      question: 'Lorem ipsum dolor sit amet. Et aperiam laudantium eum atque repellendus qui',
      answer: 'Ut dolor rerum cum totam ipsum et magnam voluptas aut sapiente illum aut ullam esse. Et optio suscipit At aliquam dolores in perferendis temporibus eum delectus'
    },
    {
      question: 'Lorem ipsum dolor sit amet. Et aperiam laudantium eum atque repellendus qui',
      answer: 'Ut dolor rerum cum totam ipsum et magnam voluptas aut sapiente illum aut ullam esse. Et optio suscipit At aliquam dolores in perferendis temporibus eum delectus'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <FAQSection>
      <SectionContent>
        <FAQTitle>
          <span>Frequently</span> <span>Asked Questions</span> <Arrow>↗</Arrow>
        </FAQTitle>
        
        <FAQList>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} delay={`${0.1 * index}s`}>
              <AccordionHeader 
                onClick={() => toggleAccordion(index)}
                isActive={activeIndex === index}
              >
                <QuestionText>{faq.question}</QuestionText>
                <ToggleIcon isActive={activeIndex === index}>
                  {activeIndex === index ? '△' : '▽'}
                </ToggleIcon>
              </AccordionHeader>
              <AccordionContent isActive={activeIndex === index}>
                <AnswerText>{faq.answer}</AnswerText>
              </AccordionContent>
            </AccordionItem>
          ))}
        </FAQList>
      </SectionContent>
    </FAQSection>
  );
};

export default FAQ; 