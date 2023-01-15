import React from 'react'
import Header from '../../components/Header'
import './Request.css'

const Request = () => {
  return (
    <div><Header />
      <div className="container">
        <div className="message">
          <h2 >
            Request access to an equipment 
          </h2>
          <p>
            Fill out these details
          </p>
        </div> 
        <div className="input-container">
          <div className="box"> 
            <input className='input-box' type="text" placeholder='Name *' />
          </div>
          <div className="box"> 
            <input className='input-box' type="text" placeholder='Phone No. *' />
          </div> 
          <div className="box"> 
            <input className='input-box' type="text" placeholder='Email *' />
          </div>
          <div className="box"> 
            <input className='input-box' type="text" placeholder='Class *' />
          </div> 
          <div className="box1"> 
            <input className='sub-box' type="text" placeholder='Explain briefly what equipment you need an what you will be using it for *' />
          </div>
        </div>
        <div className="sub-btn">
          <button className='btnsub'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Request