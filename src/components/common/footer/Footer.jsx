import React from "react";
import { blog } from "../../../dummydata";
import "./footer.css";
import { Link } from "react-router-dom";
import Image from "./images/logo.png";

const Footer = () => {
  return (
    <>
      {/* Newsletter Section */}
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Subscribe to Our Newsletter</h1>
            <span>Get the latest ICT solutions, updates, and offers from Gado InfoTech.</span>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter your email address" />
            <i className="fa fa-paper-plane"></i>
          </div>
        </div>
      </section>

      {/* Footer Main */}
      <footer>
        <div className="container padding">
          {/* Logo & About */}
          <div className="box logo">
            <img src={Image} alt="Gado InfoTech Logo" className="logo" height='12px' width='12' />
            <span>Professional ICT Services in Tanzania</span>
            <p>
              We provide reliable web development, networking, CCTV, and ICT support
              solutions tailored for businesses and individuals.
            </p>

            <div className="social-icons">
  <a
    href="https://www.facebook.com/edgarnyamboinstagram"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fab fa-facebook-f icon"></i>
  </a>

  <a
    href="https://wa.me/255749752353" 
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fab fa-whatsapp icon"></i>
  </a>

  <a
    href="https://www.instagram.com/mr.epo_official"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fab fa-instagram icon"></i>
  </a>
    <a
    href="mailto:edgarnyambo2@gmail.com"
    aria-label="Email"
  >
    <i className="fa fa-envelope icon"></i>
  </a>
</div>

          </div>

          {/* Explore Links */}
          <div className="box link">
            <h3>Explore</h3>
            <ul>
             <li> <Link to="/about" className="solid-link">About Us</Link> </li> 
             <li> <Link to="/courses" className="solid-link">Services</Link> </li>
             <li> <Link to="/" className="solid-link">Projects</Link> </li>
              <li><Link to="/journal" className="solid-link">Blog</Link></li>
              <li><Link to="/contact" className="solid-link">Contact us</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              <li> <Link to="/contact" className="solid-link">Contact us</Link> </li>
              <li> <Link to="/pricing" className="solid-link">Pricing</Link> </li>
              <li> <Link to="/conact" className="solid-link">Conditions</Link> </li>
              <li><Link to="/contact" className="solid-link">PrivacyPolicy</Link></li>
              <li> <Link to="/team" className="solid-link">Out Team</Link> </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="box">
            <h3>Latest Updates</h3>
            {blog.slice(0, 3).map((val, idx) => (
              <div className="items flexSB" key={idx}>
                <div className="img">
                  <img src={val.cover} alt={val.title} />
                </div>
                <div className="text">
                  <span>
                    <i className="fa fa-calendar-alt"></i>
                    <label htmlFor="">{val.date}</label>
                  </span>
                  <span>
                    <i className="fa fa-user"></i>
                    <label htmlFor="">{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="box last">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>
                Medeli, Tambukareli, Dodoma - Tanzania
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                +255 749 752 353
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                edgarnyambo2@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Legal */}
      <div className="legal">
        <p>
          Copyright ©2026 All rights reserved | Developed By <i className="fa fa-heart"></i> by GADO InfoTech
        </p>
      </div>
    </>
  );
};

export default Footer;
