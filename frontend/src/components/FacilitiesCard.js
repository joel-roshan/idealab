
import React, { useState } from 'react';
import "./FacilitiesCard.css"

function FacilitiesCard(props3){
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
          {showModal && (
        <div className="modal1">
            <div onClick={toggleModal} className="overlay1"></div>
            <div className="modal-box1">  
          <div className="modal-content1">
          <div className="modal-logo1">IDEALab</div>
            
            <p id='modal-description'>{props3.des}</p>
            <button className="close-modal1 " onClick={toggleModal}>
                {/* <AiOutlineClose size={24} /> */}X
              </button>
          </div>
        </div>
        </div>
      )}
    <div className="facilities-Holder">
      <h2>{props3.title}</h2>
      <img src={props3.img} alt={props3.title} />
      <div className="description">
        {props3.des.length > 150 ? props3.des.substring(0, 150) + '...' : props3.des}
        {props3.des.length > 150 && (
          <button onClick={toggleModal} className="view-more-button">
            View More
          </button>
        )}
      </div>
      
    </div>
    </>
  );
};

export default FacilitiesCard;
