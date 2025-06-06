import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.svg";
import theme_pattern from "../../assets/theme_pattern.svg";
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" />
          {/* <img src={theme_pattern} alt="" /> */}
          <p>
              I am a Full Stack Developer currently based in Dubai, originally from Sri Lanka, with 4+ years of professional experience. I have contributed to a wide range of projects at companies like Wavenet, Pixecom, and VeYE Cloud Solutions, specializing in scalable ERP systems, business automation tools, and cloud-based web applications.
          </p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder="Enter your email" />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© {new Date().getFullYear()} Mohamed Haseen. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
