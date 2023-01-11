import React from 'react'
import "./Header.css"
import logo from "../asset/logo.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className="header">
        <div id="Navbar">
          <div className="home hello">
            <p id="hello">idealab MEC</p>
          </div>
          <div className="home">
            <Link to="/" className="navtext">Home</Link>
            <Link to="/facilities" className="navtext nav-link">Facilities</Link>
            <Link to="/events" className="navtext nav-link">Events</Link>
            <Link to="/team" className="navtext nav-link">Team</Link>
            <Link to="/contact" className="navtext nav-link">Contact</Link>
          </div>
          <div className="buttons-nav home">
            <Link to='/request' className='access'>Request Access</Link>
          </div>
          <div className="logocollege">
            <a href="https://www.mec.ac.in" target="_blank">
              <img src={logo} alt="MEC Logo" className="logos" />
            
            </a>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Header