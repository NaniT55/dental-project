import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { BsClockHistory } from "react-icons/bs";
import { IoLogoFacebook } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import {
  TopNavContainer,
  LeftSection,
  TextWrapper,
  RightSection,
} from "../../styles/Global.styles";

const TopNav = () => {
  return (
    <TopNavContainer>
      {/* Left Section */}
      <LeftSection>
        <TextWrapper>
          <IoLocationOutline />
          <p>Plaza X , XY Floor, XYZ Street, XYZ</p>
        </TextWrapper>
        <TextWrapper>
          <BsClockHistory />
          <p>Mon - Fri : 8 am - 9.30 pm</p>
        </TextWrapper>
      </LeftSection>

      {/* Right Section */}
      <RightSection>
        <IoLogoFacebook />
        <FaSquareInstagram />
        <FaSquareXTwitter />
        <FaLinkedin />
      </RightSection>
    </TopNavContainer>
  );
};

export default TopNav;

