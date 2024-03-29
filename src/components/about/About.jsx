import React from "react";
import "./about.css";
import Frontend from "../../assets/Frontend.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Frontend} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icons" />
              <h5>Experience</h5>
              <small> 0 years of professional experience</small>
            </article>
          
            <article className="about__card">
              <VscFolderLibrary className="about__icons" />
              <h5>Projects</h5>
              <small>completed many projects</small>
            </article>

          </div>
          <p>
            Hello, I'm Final year student, I intent to make a long-term career in the field of frontend developer and work with professional organizations. Seeking a role in a MNC where I can upgrade my technical skills.
            <br />
            <br/>
            Proficient in HTML, CSS, and
            JavaScript, with expertise in popular frontend frameworks such as React js. Excels in collaborating with
            cross-functional teams to deliver high-quality projects on time. Dedicated to staying updated with the latest industry trends
            and technologies to ensure cutting-edge solutions. Committed to delivering exceptional user experiences through clean and
            maintainable code. Seeking opportunities to leverage my skills and contribute to the success of dynamic and forward-thinking
            organizations."
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
