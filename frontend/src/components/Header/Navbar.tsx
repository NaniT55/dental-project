import { useNavigate } from "react-router-dom";
import Logo from "../../assets/dental-logo.png";
import { FaPhone } from "react-icons/fa6";
import {
  NavbarContainer,
  LogoContainer,
  NavLinks,
  ContactButton,
} from "../../styles/Global.styles";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <NavbarContainer>
      {/* Logo */}
      <LogoContainer onClick={() => navigate("/")}>
        <img src={Logo} alt="Logo" />
      </LogoContainer>

      {/* Navigation Links */}
      <NavLinks>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/about")}>About</li>
        <li onClick={() => navigate("/services")}>Services</li>
        <li onClick={() => navigate("/contact")}>Contact</li>
      </NavLinks>

      {/* Contact Button */}
      <ContactButton>
        <FaPhone />
        <p>+91 9876542310</p>
      </ContactButton>
    </NavbarContainer>
  );
};

export default Navbar;

