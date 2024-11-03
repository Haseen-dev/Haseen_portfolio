import React, { useRef, useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from '../assets/logo.svg';
import underline from '../assets/nav_underline.svg';
import menu_open from '../assets/menu_open.svg'
import menu_close from '../assets/menu_close.svg'
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef=useRef();

  const openMenu=()=>{
    menuRef.current.style.right="0"
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px"
  }
  


  return (
    <div className="Navbar">
      <img src={logo} alt="logo" />
      <img src={menu_open} onClick={openMenu} alt=""  className="nav-mob-open"/>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} alt="" className="nav-mob-close" onClick={closeMenu} />
        <li>
          <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            onClick={() => setMenu("home")}
          >
            Home
          </Link>
          {menu === "home" && <img src={underline} alt="" />}
        </li>
        <li>
          <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            onClick={() => setMenu("about")}
          >
            About Me
          </Link>
          {menu === "about" && <img src={underline} alt="" />}
        </li>
        <li>
          <Link 
            to="services" 
            smooth={true} 
            duration={500} 
            onClick={() => setMenu("services")}
          >
            Services
          </Link>
          {menu === "services" && <img src={underline} alt="" />}
        </li>
        <li>
          <Link 
            to="mywork" 
            smooth={true} 
            duration={500} 
            onClick={() => setMenu("work")}
          >
            Portfolio
          </Link>
          {menu === "work" && <img src={underline} alt="" />}
        </li>
        <li>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            onClick={() => setMenu("contact")}
          >
            Contact
          </Link>
          {menu === "contact" && <img src={underline} alt="" />}
        </li>
      </ul>
      <div className="nav-connect"> <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            
          >
        Connect With Me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
