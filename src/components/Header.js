import React from 'react'
import "./Header.css"
import logo from "../asset/logo.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <div className="header">
          <div id="Navbar">
            <div class="home hello">
              <p id="hello">idealab MEC</p>
            </div>
            <div class="home">
              <Link to ="/" class="navtext">Home</Link>
              <Link to="" class="navtext nav-link">Facilities</Link> 
              <Link to="" class="navtext nav-link">Events</Link>
              <Link to="" class="navtext nav-link">Team</Link>
              <Link to=""class="navtext nav-link">Contact</Link>
            </div>
        <div class="buttons-nav home"> 
          <Link to='/request' className='access'>Request Access</Link>
        </div>
        <div class="logocollege">
            <a href="https://www.mec.ac.in" target="_blank">
                <img src={logo} alt="MEC Logo" class="logos" />
                   
                        </a>
                        </div>
    </div>
        </div>
    </div>
  )
}

export default Header