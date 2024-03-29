import React from "react";
import "./header.css";
import CTA from "./CTA";
import Coder from "../../assets/Coder.jpg"
import HeaderSocials from "./HeaderSocials";
function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Anmol Jain</h1>
        <h5 className="text-light">FrontEnd Developer</h5>
        <CTA />
        <HeaderSocials/>
        <div className="me">
          <img src={Coder} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  );
}

export default Header;
