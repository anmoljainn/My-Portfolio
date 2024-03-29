import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/anmol-jain-645016204/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/anmoljainn" target="_blank">
        <FaGithub />
      </a>
      
    </div>
  );
}

export default HeaderSocials;
