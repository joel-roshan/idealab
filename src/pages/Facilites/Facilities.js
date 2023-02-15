import React from 'react'
import FacilitiesCard from '../../components/FacilitiesCard'
import Header from '../../components/Header'
import './Facilities.css'

const Facilities = () => {
  return (
    <div id='facilities-body'>
        <Header />
        <div className='heading'>
          <h2 id= "event-heading">We have</h2>
        </div>
        <div className="facilities-grid">
        <FacilitiesCard title = "3D Printer"
            img = "https://www.stratasys.co.in/siteassets/3d-printers/printer-catalog/stereolitography/neo-series-printers/neoheader450.png?v=48e1d3&width=548&mode=crop"
            des = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...."
          />
        <FacilitiesCard title = "3D Printer"
            img = "https://www.stratasys.co.in/siteassets/3d-printers/printer-catalog/stereolitography/neo-series-printers/neoheader450.png?v=48e1d3&width=548&mode=crop"
            des = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...."
          />
        <FacilitiesCard title = "3D Printer"
            img = "https://www.stratasys.co.in/siteassets/3d-printers/printer-catalog/stereolitography/neo-series-printers/neoheader450.png?v=48e1d3&width=548&mode=crop"
            des = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...."
          />
        <FacilitiesCard title = "3D Printer"
            img = "https://www.stratasys.co.in/siteassets/3d-printers/printer-catalog/stereolitography/neo-series-printers/neoheader450.png?v=48e1d3&width=548&mode=crop"
            des = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...."
          />
        <FacilitiesCard title = "3D Printer"
            img = "https://www.stratasys.co.in/siteassets/3d-printers/printer-catalog/stereolitography/neo-series-printers/neoheader450.png?v=48e1d3&width=548&mode=crop"
            des = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...."
          />
        <FacilitiesCard title = "3D Printer"
            img = "https://www.stratasys.co.in/siteassets/3d-printers/printer-catalog/stereolitography/neo-series-printers/neoheader450.png?v=48e1d3&width=548&mode=crop"
            des = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...."
          />
        <FacilitiesCard/>
        <FacilitiesCard/>
        <FacilitiesCard/>

        </div>
    </div>
  )
}

export default Facilities