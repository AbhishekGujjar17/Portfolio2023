import React from "react";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";
import Profile from "../../assets/Abhishek_Profile.png";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import "./home.css";
import Type from "../type/type";
import { Helmet } from "react-helmet";
import Seo from "../SEO/Seo";

const Home = () => {
  return (
    <section className="home" id="home">
      <Seo />
      <div className="home__wrapper">
        <div className="home__container container">
          <p className="home__subtitle text-cs">
            Hello, <span>My Name is</span>
          </p>

          <h1 className="home__title text-cs">
            <span>Abhishek</span> Gujjar
          </h1>

          <div className="home__job">
            {/* <span className="text-css">I AM </span> <b>Software Engineer</b> */}
            <span className="text-css">
              I AM
              <Type />
            </span>
          </div>

          <div className="home__img-wrapper">
            <div className="home__banner">
              <img
                src={Profile}
                alt="Profile Picture"
                className="home__profile"
              />
            </div>

            <p className="home__data home__data-one">
              <span className="text-lg">
                2 <b>+</b>
              </span>

              <span className="text-sm text-cs">
                YEARS OF <span>EXPERIENCE</span>
              </span>
            </p>

            <p className="home__data home__data-two">
              {/* <span className="text-lg">+10</span> */}

              <span className="text-sm text-cs">
                PROBLEM <span>SOLVER</span>
              </span>
            </p>

            <img src={shapeOne} alt="" className="shape shape__1" />
            <img src={shapeTwo} alt="" className="shape shape__2" />
            <img src={shapeTwo} alt="" className="shape shape__3" />
          </div>

          <p className="home__text">
            I'm a Computer Science Student with a great interest in solving
            real-world <strong>problems through algorithms</strong>. I'm a{" "}
            <strong>
              detail-oriented, responsible, and committed developer
            </strong>{" "}
            who is passionate about technology and always have a keen desire to
            learn new things. I have <strong>over 1 year of experience</strong>{" "}
            in defining requirements, designing, implementing, testing, and
            delivering <strong>software applications</strong> using a variety of
            technologies and <strong>programming languages</strong>.
          </p>

          <div className="home__socials">
            <a
              href="https://www.linkedin.com/in/gujjarabhishek/"
              className="home__social-link"
              target="blank"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com/talkswithabhi"
              className="home__social-link"
              target="blank"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/AbhishekGujjar17"
              className="home__social-link"
              target="blank"
            >
              <FaGithub />
            </a>
          </div>

          <div className="home__btns">
            <button
              onClick={() => {
                window.open("mailto:agujjar@mun.ca");
              }}
              className="btn text-cs"
            >
              Hire Me
            </button>
            <a href="#skills" className="hero__link text-cs">
              My skills
            </a>
          </div>
        </div>

        <div className="section__deco deco__left">
          <img src={shapeOne} alt="" className="shape" />
        </div>
      </div>
    </section>
  );
};

export default Home;
