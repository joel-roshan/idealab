import React from 'react'
import { FiPhoneCall } from 'react-icons/fi';
function Contactsevents(props) {
    var phone1;
     phone1 = props.phone;
  return (
    <div className='contact-card'> 
        <div className="name-position">
            <div className="name">
                {props.name}
            </div>
            <div className="position">
                {props.position}
            </div>
        </div>
        <div className="phone-icon">
            
            <div className="contact-icons">
                <a href={"tel:"+ phone1}><FiPhoneCall/>                {props.phone} </a>
            </div>
        </div>
            
    </div>
  )
  
}

export default Contactsevents