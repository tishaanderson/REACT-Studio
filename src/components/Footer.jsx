// Here we are importing a CSS file as a dependency
import '../styles/componentStyles/Footer.css';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
import footerArrow from "../images/footerArrow.json";
import Lottie from "lottie-react";

function Footer({ currentPage }) {
  const isContactPage = currentPage === "/Contact";
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a
          href="https://www.linkedin.com/in/tisha-anderson"
          className="fa icon socials linkedin"
          id="linkedin-icon"
          alt="LinkedIn Icon"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/tishaanderson?tab=repositories"
          className="fa icon socials github"
          id="github-icon"
          alt="Github Icon"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/curlyqtish/"
          className="fa icon socials instagram"
          id="instagram-icon"
          alt="Instagram Icon"
        >
          <FaInstagram />
        </a>

        
      </div>
      {/* <div className="footer-arrow">
        {isContactPage && (
          <Lottie animationData={footerArrow} className="arrow" />
        )}
      </div> */}


    </footer>
  );
}

export default Footer;
