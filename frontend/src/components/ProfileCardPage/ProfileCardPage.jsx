import React from 'react'
import './ProfileCardPage.css'
import { AiFillPhone } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai'
function ProfileCardPage(props)
{
  var phoneno;
  phoneno=props.phone;
  return (
    <>
      {/* <div className="profile-holder">
        <div className="profile-imgholder">
          <img src={kundra} alt="" />
        </div>
        <div className="profile-content">
          <div className="name-designation">

          </div>
          <div className="profile-icons">
            
          </div>
        </div>

      </div> */}
       <div class="container">
        <div class="shape">
            <div class="image"><img src={props.img} alt="" /></div>
        </div>
        <h3>{props.name}</h3>
        <h3 class="title">Web Designer</h3>
        <div class="icons">
        <a href={"tel:" + phoneno}>
            <AiFillPhone /> 
          </a>
          <a href={props.linkedin}><AiFillLinkedin/></a>
        </div>
    </div>
    </>
  )
}

export default ProfileCardPage
