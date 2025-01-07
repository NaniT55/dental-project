import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
  body {
    margin: 0;
    padding:0;
    font-family: 'Poppins', serif;
    background-color: #F1F8FF;
  }
`;

export const TopNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #F1F8FF;
  border-bottom: 1px solid #052a44;
  position: sticky;
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
    font-size: 12px;
    color: #052a44;
  }
  svg {
    font-size: 16px;
    cursor: pointer;
    color: #052a44;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  svg {
    font-size: 22px;
    cursor: pointer;
    color: #052a44;

    &:hover {
      color: #0073e6;
    }
  }
`;

export const FooterContainer = styled.footer`
  background: #F1F8FF;
  padding: 2rem 1rem;
  text-align: center;
  
`;

 export const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #0ea5e9;
`;

export const Description = styled.p`
  color: #6b7280;
  margin: 1rem 0;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  a {
    color: #0f172a;
    font-size: 1.5rem;
    text-decoration: none;

    &:hover {
      color: #0ea5e9;
    }
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1.5rem;

  a {
    color: #0f172a;
    font-size: 1rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Subscribe = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;

  input {
    border: 1px solid #d1d5db;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    outline: none;

    &:focus {
      border-color: #0ea5e9;
    }
  }

  button {
    background-color: #0ea5e9;
    color: white;
    border: none;
    padding: 0.5rem 1.5rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0284c7;
    }
  }
`;

export const Certifications = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;

  img {
    height: 40px;
  }
`;

export const Copyright = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 1rem;

  a {
    color: #0ea5e9;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #F1F8FF; 
  position: sticky;
  top: 8%;
  left: 7%;
  width: 80%;
  z-index: 100;
`;

export const LogoContainer = styled.div`
  img {
    width: 150px; 
    cursor: pointer;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px; 
  margin: 0;
  padding: 0;

  li {
    font-size: 16px;
    cursor: pointer;
    color: #333;

    &:hover {
      color: #0073e6; 
    }
  }
`;

export const ContactButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px; 
  padding: 10px 15px;
  font-size: 14px;
  background-color: #0073e6;
  color: #fff;
  border: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;
  font-weight: bold;

  svg {
    font-size: 18px;
  }

  &:hover {
    background-color: #005bb5; 
    border-top-right-radius: 10px;
    border-bottom-left-radius: 0px;
  }

  p {
    margin: 0;
  }
`;
