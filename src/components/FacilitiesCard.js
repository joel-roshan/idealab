import React from 'react'
import "./EventCard.css"

const FacilitiesCard = () => {
    return (<div className='event-Holder' data-tilt data-tilt-scale="1.1" >
        <div className='thumbnail-facility-holder'>
            <img id="thumbnail-facility" src='https://img.freepik.com/premium-vector/cnc-machine-operator-3d-design_18660-333.jpg?w=2000' />
        </div>
        <div className='equipment-title-holder'>
            <p id='equipment-title'>CNC machine</p>
        </div>
        <div className='description'>
            <p id='event-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.....</p>
        </div>
    </div>
    )
}

export default FacilitiesCard