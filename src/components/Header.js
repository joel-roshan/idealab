import React from 'react'
import "./Header.css"
import "./asset/logo.png"

const Header = () => {
  return (
    <div>
        <div className="header">
        <div id="Navbar">
        <div class="home hello">
            <p id="hello">idealab MEC</p>
        </div>
        <div class="home"><a href="" class="navtext">Home</a> <a href="" class="navtext nav-link">Facilities</a> <a
                href="" class="navtext nav-link">Events</a> <a href="" class="navtext nav-link">Team</a> <a href=""
                class="navtext nav-link">Contact</a></div>
        <div class="buttons-nav home"> <a href="" class="access">Request Access</a></div>
        <div class="logocollege"><a href="https://www.mec.ac.in" target="_blank"><img src="logo.png" alt="MEC Logo"
                    class="logos"></img></a></div>
    </div>
        </div>
    </div>
  )
}

export default Header