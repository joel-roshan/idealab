import React from 'react'
import Header from '../../components/Header'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Header />
      <div class="carousel">
        <div class="announcement" data-tilt data-tilt-glare data-tilt-max-glare="0.8">
          <h2 class="head-announce">from the lab</h2>
          <p class="announce">announcement 1</p>
          <p class="announce">announcement 2</p>
          <p class="announce">announcement 3</p>
          <p class="announce">announcement 4</p>
        </div>
        <div class="image"><img src={require('../asset/car.jpg')} alt="" class="car" /></div>
      </div>
      <hr class="carouselrule" />

    </div>
  )
}

export default Home