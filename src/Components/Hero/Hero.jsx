import React from "react";
import "./Hero.css";
import pro from "../../assets/IMG_4681.jpg";
import { Link } from "react-scroll";
import resume from '../../assets/HaseenLast.pdf'
const Hero = () => {
  return (
    <div id="home" className="hero">
      <div
        className="circle-image"
        style={{ backgroundImage: `url(${pro})` }}
      ></div>
      <h1>
        <span>I'm Haseen,</span> Full Stack Developer based in Sri Lanka.
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
        As a full-stack developer skilled in PHP, Yii, and the MERN stack, I
        specialize in building impactful applications. At Wavenet, I enhanced
        the Operations Assistance Portal, focusing on performance and usability.
        Currently at Pixecom, I design tailored business solutions and automate
        processes, ensuring efficiency and quality across projects.
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
