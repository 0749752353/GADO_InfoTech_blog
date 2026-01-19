import React from "react";
import Image from "./images/logo.png";

const Head = () => {
  return (
    <section className="head">
      <div className="container flexSB">
        {/* Logo Area */}
        <div className="logo-box">
          <img
            src={Image}
            alt="Gado InfoTech Logo"
            className="logo-img"
          />
          <span className="company-name">GADO InfoTech</span>
        </div>

        {/* Social Icons */}
<div className="social">
  <a
    href="https://www.facebook.com/edgarnyamboinstagram"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <i className="fab fa-facebook-f icon"></i>
  </a>

  <a
    href="https://www.instagram.com/mr.epo_official"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <i className="fab fa-instagram icon"></i>
  </a>

  <a
    href="https://wa.me/255749752353"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
  >
    <i className="fab fa-whatsapp icon"></i>
  </a>

  <a
    href="mailto:edgarnyambo2@gmail.com"
    aria-label="Email"
  >
    <i className="fa fa-envelope icon"></i>
  </a>
</div>

      </div>
    </section>
  );
};

export default Head;
