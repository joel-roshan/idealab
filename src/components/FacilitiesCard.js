import React from 'react'
import "./FacilitiesCard.css"

const FacilitiesCard = () => {
    return (
        <div><div className='facilities-Holder' data-tilt data-tilt-scale="1.1" >
            <div className='facilities-thumbnail'>
                <img id="facilities-thumbnail-image" src='https://www.stratasys.co.in/siteassets/3d-printers/printer-catalog/stereolitography/neo-series-printers/neoheader450.png?v=48e1d3&width=548&mode=crop' />
            </div>
            <div className='facilities-title'>
                <p id='facilities-title-text'>3D Printer</p>
            </div>
            <div className='facility-description'>
                <p id='facility-description-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.....</p>
            </div>
        </div></div>
    )
}

export default FacilitiesCard