import React from "react";

import Image from "next/image";
import Logo from "../app/images/Artoa-Logo.png";
import LangIco from "../app/images/icon-globe.png";
import ArrowIcon from "../app/images/icon-arrow.png";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="menu-containet">
          <div className="logo">
            <Image src={Logo} alt="Logo" />
          </div>

          <ul className="menu">
            <li>Home</li>
            <li>Artists</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="tools">
          <div className="buttons-container">
            <button className="login-button">Log in</button>

            <button className="signup-button">Sign Up </button>
          </div>

          <div className="lang-container">
            <Image src={LangIco} alt="lang" />
            <samp>en</samp>
            <Image src={ArrowIcon} alt="icon" />
          </div>
        </div>
      </div>
    </header>
  );
}
