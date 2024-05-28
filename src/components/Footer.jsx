// Here we are importing a CSS file as a dependency
// import '../styles/Footer.css';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className='footer-icons'>

        <a href='https://www.linkedin.com/in/tisha-anderson' className='fa icon socials' id="linkedin-icon" alt="LinkedIn Icon">
          <FaLinkedin />
        </a>

        <a href='https://github.com/tishaanderson?tab=repositories' className='fa icon socials' id="github-icon" alt="Github Icon">
          <FaGithub />
        </a>

        <a href='https://www.instagram.com/curlyqtish/' className='fa icon socials' id="instagram-icon" alt="Instagram Icon">
          <FaInstagram />
        </a>

      </div>
    </footer>
  );
}

export default Footer;