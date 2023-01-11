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
        <div class="image"><img src='' alt="" class="car" /></div>
      </div>
      <hr class="carouselrule" />
      <div class="about" id ="about">
        <div class="about-txt-hold">
          <h2 class="about-txt">About idea Lab</h2>
        </div>

        <div class="about-content-image">
          <div class="about-content-hold">
            <p class="about-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis beatae dolore
              sint ab blanditiis repellat rerum tempore ipsa, quasi sapiente. Sed labore, illum distinctio ad
              earum
              inventore nobis dolor cumque!</p>
          </div>
          <div class="about-image-hold"><img src="car.jpg" alt="about pic" class="about-image" /></div>
        </div>
      </div>

    </div>
  )
}

export default Home