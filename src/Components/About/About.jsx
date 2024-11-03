import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import pro from "../../assets/IMG_0567.JPG";
const About = () => {
  return (
    <div id="about" className="About">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={pro} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I’m Mohamed Haseen, a dedicated full-stack developer with a focus
              on creating efficient, user-centered applications. With a strong
              foundation in PHP, Yii, and the MERN stack, I have gained hands-on
              experience working on impactful projects, from enhancing the
              Operations Assistance Portal at Wavenet to building tailored
              business solutions at Pixecom.
            </p>

            <p>
              My approach blends technical precision with a commitment to
              quality, ensuring each solution meets real-world needs. I’m
              passionate about learning and continuously refining my skills, and
              I’m eager to bring my expertise to teams that value innovation and
              growth.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>Tailwind CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>JQuery</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>MySQL & MongoDB</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>MERN & MEAN Stack</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JAVA</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>PHP</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>ReactNative</p>
              <hr style={{ width: "40%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1.5+</h1>
          <p>YEARS OF EXPERIENCES</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>6+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>2+</h1>
          <p>CLIENTS</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
