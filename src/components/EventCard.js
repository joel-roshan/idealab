import React, { Component } from 'react'
import './EventCard.css'

export class EventCard extends Component {
    render() {
        return (
            <div>
                <div className='event-Holder' data-tilt data-tilt-scale="1.1" >
                    <div className='event-thumbnail'>
                        <img id = "event-thumbnail-image"src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwn2MAEL-OI7TvmRJjUwQb_GtBcRvYGelTCw&usqp=CAU'/>                        
                    </div>
                    <div className='date'>
                        <p id='event-posted'>04/03/2022</p>
                    </div>
                    <div className='description'>
                        <p id='event-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.....</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventCard