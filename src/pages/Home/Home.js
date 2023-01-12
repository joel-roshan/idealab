import React from 'react'
import Header from '../../components/Header'
import './Home.css'
import car from "../../asset/car.jpg"
import EventCard from '../../components/EventCard';
import ProfileCard from '../../components/ProfileCard';
import FacilitiesCard from '../../components/FacilitiesCard';

export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement('script');
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}

const Home = () => {
  return (
    <div>
      <Header />
      <div className="carousel">
        <div class="announcement" data-tilt data-tilt-glare data-tilt-max-glare="0.8">
          <h2 className="head-announce">from the lab</h2>
          <p className="announce">announcement 1</p>
          <p className="announce">announcement 2</p>
          <p className="announce">announcement 3</p>
          <p className="announce">announcement 4</p>
        </div>

        <div className="image"><img src={car} alt="" className="car" /></div>
      </div>
      <hr className="carouselrule" />
      <div className="about" id="about">
        <div className="about-txt-hold">
          <h2 className="about-txt">About idea Lab</h2>
        </div>

        <div className="about-content-image">
          <div className="about-content-hold">
            <p className="about-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis beatae dolore
              sint ab blanditiis repellat rerum tempore ipsa, quasi sapiente. Sed labore, illum distinctio ad
              earum
              inventore nobis dolor cumque!</p>
          </div>
          <div className="about-image-hold"><img src={car} alt="about pic" className="about-image" /></div>
        </div>
      </div>
      <hr className="carouselrule" />
      <div className='event'>
        <div className='event-head'>
          <h2 id = "event-txt-head">Events</h2>
        </div>
        <div className='event-hold-multi'>
          <div><EventCard /></div>
          <div><EventCard /></div>
          <div><EventCard /></div>
          <div><EventCard /></div>
        </div>
      </div>
      <hr className="carouselrule" />
      <div className='team'>
        <div className='team-head'>
          <h2 id="team-txt">Team</h2>
        </div>

        <div className='faculties'>
          <h3 id='faculties-txt'>Faculties</h3>
        </div>

        <div className='team-hold-multi'>
          <div><ProfileCard /></div>
          <div><ProfileCard /></div>
          <div><ProfileCard /></div>
          <div><ProfileCard /></div>
        </div>

        <div className='student'>
          <h3 id='student-txt'>Student in charges</h3>
        </div>

        <div className='team-hold-multi'>
          <div><ProfileCard /></div>
          <div><ProfileCard /></div>
          <div><ProfileCard /></div>
          <div><ProfileCard /></div>
        </div>
      </div>
      <hr className="carouselrule" />
      <div className='equipments'>
        <div className='equipment-heading'><h3 id='equipment-head'>We have</h3></div>
        <div className='equipment-holder'>
        <FacilitiesCard />
        <FacilitiesCard />
        <FacilitiesCard />
        <FacilitiesCard /> 
        </div>

      </div>
      {AddLibrary(
        './tilt.js')}

    </div>
  )
}

export default Home