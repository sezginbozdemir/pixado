import "./footer.css";
import greenDot from "@/assets/green-dot.png";
import logo from "@/assets/logo.png";
import NextButton from "../buttons/NextButton";
import FooterMobile from "./FooterMobile";
import FooterTablet from "./FooterTablet";
import FooterDesktop from "./FooterDesktop";
import MarqueeText from "../MarqueeText";
import Spacing from "../Spacing";
const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <MarqueeText />
      <Spacing size={5} />
      <FooterDesktop
        greenDot={greenDot}
        logo={logo}
        NextButton={NextButton}
        handleScrollToTop={handleScrollToTop}
      />
      <FooterMobile
        greenDot={greenDot}
        logo={logo}
        NextButton={NextButton}
        handleScrollToTop={handleScrollToTop}
      />
      <FooterTablet
        greenDot={greenDot}
        logo={logo}
        NextButton={NextButton}
        handleScrollToTop={handleScrollToTop}
      />
    </>
  );
};

export default Footer;
