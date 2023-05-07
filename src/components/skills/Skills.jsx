import React from "react";
import "./skills.css";
import shapeOne from "../../assets/shape-1.png";
import { useWasViewed } from "../../hook/useWasViewd";
import Seo from "../SEO/Seo";

const Skills = () => {
  const { setRef, wasViewed } = useWasViewed();
  const animation = wasViewed ? "animate-jelly" : "null";

  return (
    <section className={`skills section`} id="skills">
      <Seo />
      <h2 className="section__title text-css">Professional Skills</h2>
      <p className="section__subtitle">
        My <span>Skills</span>
      </p>

      <div
        ref={setRef}
        className={`skills__container container grid ${animation}`}
      >
        {/* Languages */}
        <div className="skills__logo">
          <i className="devicon-python-plain colored"></i>
          <span className="tooltiptext">Python</span>
        </div>

        <div className="skills__logo">
          <i className="devicon-javascript-plain colored"></i>
          <span className="tooltiptext">JavaScript</span>
        </div>
        <div className="skills__logo">
          <i className="devicon-java-plain colored"></i>
          <span className="tooltiptext">Java</span>
        </div>

        <div className="skills__logo">
          <i className="devicon-typescript-plain colored"></i>
          <span className="tooltiptext">TypeScript</span>
        </div>

        <div className="skills__logo">
          <i className="devicon-c-plain colored"></i>
          <span className="tooltiptext">C</span>
        </div>

        <div className="skills__logo">
          <i className="devicon-bash-plain colored"></i>
          <span className="tooltiptext">Bash</span>
        </div>
        {/* Frontend */}
        <div className="skills__logo">
          <i className="devicon-html5-plain colored"></i>
          <span className="tooltiptext">HTML</span>
        </div>

        <div className="skills__logo">
          <i className="devicon-css3-plain colored"></i>
          <span className="tooltiptext">CSS</span>
        </div>
        <div className="skills__logo">
          <i className="devicon-react-plain colored"></i>
          <span className="tooltiptext">React</span>
        </div>

        <div className="skills__logo">
          <i className="devicon-bootstrap-plain colored"></i>
          <span className="tooltiptext">Bootstap</span>
        </div>

        <div className="skills__logo">
          <i className="devicon-tailwindcss-plain colored"></i>
          <span className="tooltiptext">TailwindCss</span>
        </div>
        {/* Backend */}
        <div className="skills__logo">
          <i className="devicon-nodejs-plain colored"></i>
          <span className="tooltiptext">Node</span>
        </div>

        <div className="skills__logo">
          <i className="devicon-express-original colored"></i>
          <span className="tooltiptext">Express</span>
        </div>
        <div className="skills__logo">
          <i className="devicon-mongodb-plain colored"></i>
          <span className="tooltiptext">MongoDb</span>
        </div>
        <div className="skills__logo">
          <i className="devicon-postgresql-plain colored"></i>
          <span className="tooltiptext">PostgreSQL</span>
        </div>
        <div className="skills__logo">
          <i className="devicon-sqlite-plain colored"></i>
          <span className="tooltiptext">SQLite</span>
        </div>
        {/* Cloud */}
        <div className="skills__logo">
          <i className="devicon-amazonwebservices-plain colored"></i>
          <span className="tooltiptext">AWS</span>
        </div>
        {/* Others */}
        <div className="skills__logo">
          <i className="devicon-vscode-plain colored"></i>
          <span className="tooltiptext">VS Code</span>
        </div>
        <div className="skills__logo">
          <i className="devicon-intellij-plain colored"></i>
          <span className="tooltiptext">IntelliJ</span>
        </div>
        <div className="skills__logo">
          <i className="devicon-git-plain colored"></i>
          <span className="tooltiptext">Git</span>
        </div>
        <div className="skills__logo">
          <i className="devicon-github-plain colored"></i>
          <span className="tooltiptext">Github</span>
        </div>
        <div className="skills__logo">
          <i className="devicon-docker-plain colored"></i>
          <span className="tooltiptext">Docker</span>
        </div>
        <div className="skills__logo">
          <i className="devicon-terraform-plain colored"></i>
          <span className="tooltiptext">Terraform</span>
        </div>
        <div className="skills__logo">
          <i className="devicon-jenkins-plain colored"></i>
          <span className="tooltiptext">Jenkins</span>
        </div>
        <div className="skills__logo">
          <i className="devicon-numpy-plain colored"></i>
          <span className="tooltiptext">Numpy</span>
        </div>
        <div className="skills__logo">
          <i className="devicon-pandas-plain colored"></i>
          <span className="tooltiptext">Pandas</span>
        </div>
      </div>

      <div className="section__deco deco__right">
        <img src={shapeOne} alt="" className="shape" />
      </div>
    </section>
  );
};

export default Skills;
