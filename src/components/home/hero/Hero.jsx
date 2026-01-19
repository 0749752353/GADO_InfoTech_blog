import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO GADO INFOTECH"
              title="Smart ICT Solutions for a Connected World"
            />

            <p className="hero-text">
              GADO InfoTech provides reliable and innovative ICT services including
              software development, network installation, CCTV & security systems,
              and professional IT support to help businesses operate efficiently
              and securely.
            </p>

                <div
              className="d-flex gap-3"
              style={{ position: "relative", zIndex: 1 }}
            >
              <Link to="/contact" className="btn btn-primary btn-lg">
                Reach Us Now <i className="fa fa-long-arrow-alt-right"></i>
              </Link>

              <Link to="/courses" className="btn btn-outline-primary btn-lg">
                View Our Services <i className="fa fa-long-arrow-alt-right"></i>
              </Link>
            </div>


          </div>
        </div>
      </section>

      <div className="margin"></div>
    </>
  );
};

export default Hero;
