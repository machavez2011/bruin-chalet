import Signup from "./components/Signup";
import Contact from "./components/Contact";
import { FooterWrapper } from "./footer-styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <Signup />
      <Contact />
    </FooterWrapper>
  );
};

export default Footer;
