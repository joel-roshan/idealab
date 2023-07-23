import React, {Component} from 'react'
import './ProfileCard.css'

function ProfileCard(props2) {
        return (
        
            <div className='profile-Holder' data-tilt data-tilt-scale="1.1" >
                <div className='profilepic'>
                    <img id="profilepicture" src={props2.img} />
                </div>
                <div className='description-team'>
                    <p>{props2.name}</p>
                </div>
            </div>
        
    )
}

export default ProfileCard