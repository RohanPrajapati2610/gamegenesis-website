import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #000;
    color: white;
    overflow-x: hidden;
  }
  
  /* Create seamless sections by adjusting all section components */
  section {
    padding: 2rem 0 !important;
    position: relative;
    overflow: hidden;
  }
  
  /* Remove extra padding on first and last sections */
  section:first-of-type {
    padding-top: 0 !important;
  }
  
  /* Override padding for sections with specific styling needs */
  section[class*="CTASection"] {
    padding: 8rem 0 10rem !important;
  }
  
  /* Ensure that all section transitions are smooth */
  section, footer {
    transition: all 0.3s ease;
  }
`;

export default GlobalStyles; 