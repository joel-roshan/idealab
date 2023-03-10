import React, { useState } from 'react'
import "./Header.css"
import logo from "../asset/logo.png"
import { Link } from 'react-router-dom'



const Header = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <div className="header">

      <div className="hello" > 
        <a id="hello" href="/">IDEALab</a>
      </div>
      <a href="#" className="toggle-button" onClick={() => setShowMediaIcons(!showMediaIcons)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>

      <div className={showMediaIcons ? "navbigdiv mobnavbigdiv" : "navbigdiv"
      }>

        <div className="home">
          <Link to="/" className="navtext">home</Link>
          <Link to="/facilities" className="navtext ">facilities</Link>
          <Link to="/events" className="navtext ">events</Link>
          <Link to="/team" className="navtext ">team</Link>
          
        </div>

        <div className="nav2">
          <div className="btnnav" data-tilt data-tilt-glare data-tilt-max-glare="0.2">
            <Link to='/request' className='access'>Book Facility</Link>
          </div>

          <div className="logocollege">
            <a href="https://www.mec.ac.in" target="_blank">
              <img src={logo} alt="MEC Logo" className="logos" />
            </a>
          </div>

        </div>


        <a href="#" className="toggle-button" onClick={() => setShowMediaIcons(!showMediaIcons)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>

      </div>


    </div>


  )
}

export default Header