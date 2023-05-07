import React, { useEffect, useState } from "react";
import { links } from "../../Data";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import "./header.css";
import { Link } from "react-scroll";
import { animateScroll } from "react-scroll";
import shapeOne from "../../assets/shape-1.png";
import { Helmet } from "react-helmet";
import Seo from "../SEO/Seo";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [theme, setTheme] = useState("dark-theme");

  const scrollTop = () => {
    animateScroll.scrollToTop();
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", showMenu);
  }, [showMenu]);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <header className={`${scrollNav ? "scroll-header" : ""} header`}>
      <Seo />
      <nav className="nav">
        <Link to="/" onClick={scrollTop} className="nav__logo text-cs">
          Gujjar
        </Link>

        <div className={`${showMenu ? "nav__menu show-menu" : "nav__menu"}`}>
          <div className="nav__data">
            <ul className="nav__list">
              {links.map(({ name, path }, index) => {
                return (
                  <li className="nav__item" key={index}>
                    <Link
                      className="nav__link text-cs"
                      to={path}
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={500}
                      onClick={() => setShowMenu(!showMenu)}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="header__socials">
              <a
                href="https://www.linkedin.com/in/gujjarabhishek/"
                className="header__social-link"
                target="blank"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://twitter.com/talkswithabhi"
                className="header__social-link"
                target="blank"
              >
                <FaTwitter />
              </a>
              <a
                href="https://github.com/AbhishekGujjar17"
                className="header__social-link"
                target="blank"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <div className="section__deco deco__left header__deco">
            <img src={shapeOne} alt="" className="shape" />
          </div>
        </div>

        <div className="nav__btns">
          <div className="theme__toggler" onClick={toggleTheme}>
            {theme === "light-theme" ? <BsMoon /> : <BsSun />}
          </div>

          <div
            className={`${
              showMenu ? "nav__toggle animate-toggle" : "nav__toggle"
            }`}
            onClick={() => setShowMenu(!showMenu)}
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
