import { IoLogoFacebook } from "react-icons/io5";
import {
  Certifications,
  Copyright,
  Description,
  FooterContainer,
  Links,
  Logo,
  RightSection,
  SocialIcons,
  Subscribe,
} from "../../styles/Global.styles";
import {
  FaLinkedin,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Logo>LOGO</Logo>
      <Description>
        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod
        Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
      </Description>

      <SocialIcons>
        <RightSection>
          <IoLogoFacebook />
          <FaSquareInstagram />
          <FaSquareXTwitter />
          <FaLinkedin />
        </RightSection>
      </SocialIcons>

      <Links>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
        <a href="#">FAQ's</a>
        <a href="#">Privacy Policy</a>
      </Links>

      <Subscribe>
        <input type="email" placeholder="Enter Your Email" />
        <button>Submit</button>
      </Subscribe>

      {/* <Certifications>
        <img src="/certification1.png" alt="Certification 1" />
        <img src="/certification2.png" alt="Certification 2" />
        <img src="/certification3.png" alt="Certification 3" />
      </Certifications> */}

      <Copyright>
        Copyright © 2025 <a href="#">LOGO By Vlack</a>. All Rights
        Reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
