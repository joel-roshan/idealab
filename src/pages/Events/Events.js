import React from 'react'
import Eventcardinside from '../../components/Eventcardinside'
import Header from '../../components/Header'
import './Events.css'



const Events = () => {
  return (
    <div id='event-body'>
        <Header />
        <div className='heading'>
          <h2 id= "event-heading">What's Happening</h2>
        </div>
        <div className="main-event">
          <Eventcardinside />
          <Eventcardinside />
          <Eventcardinside />
          <Eventcardinside />
          <Eventcardinside />
          <Eventcardinside />
          <Eventcardinside />
          <Eventcardinside />
          <Eventcardinside />
        </div>
    </div>
  )
}

export default Events