import React,{Component} from 'react'
import "./FacilitiesCardHome.css"

function FacilitiesCardHome(props3){
        return (
            <div><div className='facilities-Holder'>
                <div className='facilities-thumbnail'>
                    <img id="facilities-thumbnail-image" src={props3.img} />
                </div>
                <div className='facilities-title'>
                    <p id='facilities-title-text'>{props3.title}</p>
                </div>
                <div className='facility-description'>
                    <p id='facility-description-text'>{props3.des}</p>
                </div>
            </div></div>
        )
    }


export default FacilitiesCardHome