import "../styles/componentStyles/Footer.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a
          href="https://www.linkedin.com/in/tisha-anderson"
          className="fa icon footer-socials linkedin"
          alt="LinkedIn Icon"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/tishaanderson?tab=repositories"
          className="fa icon footer-socials github"
          alt="Github Icon"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/curlyqtish/"
          className="fa icon footer-socials instagram"
          alt="Instagram Icon"
        >
          <FaInstagram />
        </a>
      </div>
      <div className="footer-arrow">
        <p className="madeWithLove">Made with ❤️ by TEA</p>
      </div>
    </footer>
  );
}

export default Footer;
