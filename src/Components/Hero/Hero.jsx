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
      with a strong background in building responsive and scalable web applications. I specialize in PHP, Laravel, and the MERN stack (MongoDB, Express, React, Node.js), and have hands-on experience delivering impactful solutions across various domains.
At VeYE Cloud Solutions, I developed a full-stack ERP system for masjid administration, including subscription and family management modules, SMS payment notifications, and cloud deployment via AWS. Prior to that, at Pixecom, I focused on crafting tailored business software and automating workflows to improve operational efficiency. Earlier, at Wavenet, I enhanced the Operations Assistance Portal using the Yii framework, emphasizing performance and user experience.
I’m passionate about clean UI/UX, efficient backend systems, and contributing to projects that make a meaningful impact. Currently, I’m open to new opportunities where I can continue to grow and deliver high-quality digital solutions.
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
