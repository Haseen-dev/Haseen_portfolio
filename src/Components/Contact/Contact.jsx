import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import mail_icon from "../../assets/mail_icon.svg";
import linkedin3 from "../../assets/linkedin3.svg";
import github from "../../assets/github.svg";

const Contact = () => {

  
  const onSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const access_key=import.meta.env.VITE_ACCESS_KEY
    
    formData.append("access_key", access_key);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      
      alert(data.message)
      event.target.reset();
    } else {
      alert("Error", data);
     
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm currently available to take on new Projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime
          </p>
          <div className="contact-details">
            <div className="contact-detail">
                <img src={mail_icon} alt="" />
                <p>mhmhaseen1998@gmail.com</p>
            </div>
            <div className="contact-detail">
                <img src={linkedin3} alt="" />
                <p>https://www.linkedin.com/in/mohamed-haseen-414b94203</p>
            </div>
            <div className="contact-detail">
                <img src={github} alt="" />
                <p>https://github.com/Haseen-dev</p>
            </div>
            <div className="contact-detail">
                <img src={call_icon} alt="" />
                <p>+94 771534707</p>
            </div>
            <div className="contact-detail">
                <img src={location_icon} alt="" />
                <p>Batticaloa,Sri Lanka</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name"/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder="Enter your Email" name="email"/>
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder="Enter your message Here"></textarea>
            <button type="submit" className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
