import styled from "styled-components";
import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
  }
`;

export const TopNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f0f0f0;
  border-bottom: 1px solid #052A44;
  position: fixed; 
  top: 0; 
  left: 7%; 
  width: 80%; 
  z-index: 100; 
  margin: 15px;
`;


export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 30px; 
  
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; 

  p {
    margin: 0;
    font-size: 22px;
    color: #052A44;
  }
    svg {
    font-size: 22px;
    cursor: pointer;
    color: #052A44;

`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 25px; 

  svg {
    font-size: 26px;
    cursor: pointer;
    color: #052A44;

    &:hover {
      color: #0073e6; 
    }
  }
`;
