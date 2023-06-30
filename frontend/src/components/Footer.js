import React from "react";
import logo from "../asset/logo.png";
import "./Footer.css";
import { Link } from "react-router-dom";
import idealablogo from "../asset/idealab.png";

const Footer = () => {
  return (
    <div id="whole-foot">
      <section id="footer">
        <div id="logo">
          <img src={logo}></img>
          <img src={idealablogo}></img>
          <a href="https://cognicor.com" target="_blank">
            <img
              src="https://static.wixstatic.com/media/958eca_821d544f48f24288bd452d7badca64fa~mv2.png/v1/crop/x_0,y_12,w_1968,h_516/fill/w_456,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo-transparent-cognicor-horizontal.png"
              id="cognicor-logo"
              href="https://www.cognicor.com"
            />
          </a>
        </div>
        <div id="row2">
          <h4>Contact Us</h4>
          <p>
            Model Engineering College
            <br />
            Thrikkakara, Kochi
            <br />
            Kerala, PIN: 682021
            <br />
            Contact:
            <a href="mailto:idealab@mec.ac.in" id="mail">
            idealab@mec.ac.in
            </a>
            <br />
            Phone:
            <a href="tel:w9605169646" id="mail">
            9605169646
            </a>
          </p>
        </div>
      </section>
      <div id="base">
        <p id="footer-parag">
          Managed by Institute of Human Resource Development
        </p>
        <p id="footer-parag">Established by Government of Kerala</p>{" "}
        <p id="footer-parag">
          Copyright © {new Date().getFullYear()}{" "}
          <Link to="/credit" className="navtext ">
            Credits
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
