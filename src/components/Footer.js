import React from 'react';
import logo from "../asset/logo.png";
import "./Footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div id='whole-foot'>
            <section id='footer'>
                <div id='logo'>
                    <img src={logo}></img>
                </div>
                <div id='row2'>
                    <h4>Contact Us</h4>
                    <p>
                        Model Engineering College<br />
                        Thrikkakara, Kochi<br />
                        Kerala, PIN: 682021<br />
                        Contact: hodcs@mec.ac.in<br />
                        Phone: 0484 2307127</p>
                </div>
            </section> 
            <div id='base'><p>Managed by Institute of Human Resource Development | Established by Government of Kerala <br/>Copyright © {new Date().getFullYear()} | <Link to="/credit" className="navtext ">Credits</Link> </p></div>
            </div>
    )
}

export default Footer