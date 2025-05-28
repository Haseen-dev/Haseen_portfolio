import React from "react";
import "./Hero.css";
import pro from "../../assets/newProfile.jpg";
import { Link } from "react-scroll";
import resume from '../../assets/HaseenResumePhoto2.pdf'
const Hero = () => {
  return (
    <div id="home" className="hero">
      <div
        className="circle-image"
        style={{ backgroundImage: `url(${pro})` }}
      ></div>
      <h1>
        <span>I'm Haseen,</span> Full Stack Developer currently based in Dubai.
      </h1>
      {/* <p>
        With a Bachelor’s degree in Computer Science and hands-on experience
        across PHP, Yii, and the MERN stack, I specialize in full-stack web
        development. My projects include enhancing the Operations Assistance
        Portal and developing dynamic educational and matchmaking platforms. I
        am skilled in database management, requirement analysis, and delivering
        high-quality software solutions tailored to business needs. I bring a
        strong work ethic and a passion for impactful tech solutions, making me
        a valuable addition to any growth-focused team.
      </p> */}
      <p>
      I specialize in developing scalable, user-focused applications using PHP, Laravel, Yii, and the MERN stack. At VeYE Cloud Solutions, I led the development of a cloud-based ERP system for masjid administration. Previously, I crafted business automation tools at Pixecom and improved internal systems at Wavenet, always with a focus on performance and usability.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <Link
            to="contact"
            smooth={true}
            duration={500}
          >
            Connect with me{" "}
          </Link>
        </div>
        <div className="my-resume">
          <a href={resume} download={true}>My Resume</a></div>
      </div>
    </div>
  );
};

export default Hero;
