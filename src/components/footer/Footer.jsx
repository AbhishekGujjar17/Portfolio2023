import React from "react";
import { FaGithub, FaLinkedinIn, FaDev, FaTwitter } from "react-icons/fa";
import "./footer.css";
import Seo from "../SEO/Seo";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <Seo />
        <div className="footer__container container socials grid">
          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/in/gujjarabhishek/"
              className="footer__social-link"
              target="blank"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com/talkswithabhi"
              className="footer__social-link"
              target="blank"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/AbhishekGujjar17"
              className="footer__social-link"
              target="blank"
            >
              <FaGithub />
            </a>
            <p>
              Email: <span>agujjar@mun.ca</span>
            </p>
          </div>

          <p className="footer__copyright text-cs">
            Last Updated: <span>May 7, 2023</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
