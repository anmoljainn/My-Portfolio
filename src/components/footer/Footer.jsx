import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo"></a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Education</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
       
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <p>  Made With ❤️ By Anmol Jain</p>
       
    </footer>
    
  );
}

export default Footer;
