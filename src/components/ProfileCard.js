import React, {Component} from 'react'
import './ProfileCard.css'

export class ProfileCard extends Component {
    render() { 
        return (
        <div>
            <div className='profile-Holder' data-tilt data-tilt-scale="1.1" >
                <div className='profilepic'>
                    <img id="profilepicture" src='https://www.getillustrations.com/photos/pack/3d-avatar-male_lg.png' />
                </div>
                <div className='description-team'>
                    <p>John Appleseed</p>
                </div>
            </div>
        </div>
    )
}
}

export default ProfileCard