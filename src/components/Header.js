import React from 'react'
import "./Header.css"
import logo from "../asset/logo.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <div className="header">
        
          <div className="hello">
            <p id="hello">IDEALab</p>
          </div>

          <div className="navbigdiv">
            
            <div className="home">
              <Link to="/" className="navtext">Home</Link>
              <Link to="/facilities" className="navtext ">Facilities</Link>
              <Link to="/events" className="navtext ">Events</Link>
              <Link to="/team" className="navtext ">Team</Link>
              <Link to="/contact" className="navtext ">Contact</Link>
            </div>

            <div className="nav2">
                <div className="btnnav">
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