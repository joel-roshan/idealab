import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import './Contact.css'


const Contact = () => {
  return (
    <div>
      <Header />
      <div id='contact-details'>
        <h2>Contact Details</h2>
        <p>Model Engineering College<br />
          Thrikkakara, Kochi<br />
          Kerala, PIN: 682021<br />
          Contact: hodcs@mec.ac.in<br />
          Phone: 0484 2307127</p>
      </div>
      <hr className="carouselrule" />
      <Footer />
    </div>
  )
}

export default Contact