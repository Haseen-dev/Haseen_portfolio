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
  I’m Mohamed Haseen, a dedicated full-stack developer based in Dubai, with a strong focus on building efficient, user-centered web applications. My technical stack includes PHP, Laravel, Yii, and the MERN stack, and I bring hands-on experience from diverse projects across industries.
</p>

<p>
  At VeYE Cloud Solutions, I developed a full-stack ERP system with modules for family management, subscriptions, and cloud deployment. Before that, at Pixecom, I built tailored business software and process automation tools. My journey started at Wavenet, where I contributed to optimizing the Operations Assistance Portal.
</p>

<p>
  I approach every project with technical precision and a strong commitment to quality. I’m passionate about continuous learning, clean UI/UX, and contributing to teams that value innovation and impact. I'm eager to apply my skills to create meaningful software solutions in dynamic environments.
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
              <p>PHP & Larvel</p>
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
