import React from 'react'
import Header from '../../components/Header'
import './Home.css'
import car from "../../asset/car.jpg"
import pic1 from "../../asset/pic1.jpg"
import pic2 from "../../asset/pic2.jpg"
import pic3 from "../../asset/pic3.jpg"
import pic4 from "../../asset/pic4.jpg"
import EventCard from '../../components/EventCard';
import ProfileCard from '../../components/ProfileCard';
import FacilitiesCard from '../../components/FacilitiesCard';


export function AddLibrary(urlOfTheLibrary) {
    const script = document.createElement('script');
    script.src = urlOfTheLibrary;
    script.async = true;
    document.body.appendChild(script);
}
export function Addscript(urlOfTheLibrary) {
  if (window.innerWidth > 720) {
    const script = document.createElement('script');
    script.src = urlOfTheLibrary;
    script.async = true;
    document.body.appendChild(script);
  }
}
const Home = () => {
  return (
    <div>
      <Header />
      <div id="progressBar"></div>
      <div className="carousel">
        <div className="announcement" data-tilt data-tilt-glare data-tilt-max-glare="0.8">
          <h2 className="head-announce">From the lab</h2>
          <p className="announce">announcement 1</p>
          <p className="announce">announcement 2</p>
          <p className="announce">announcement 3</p>
          <p className="announce">announcement 4</p>
        </div>

        <div className="image"><img src={car} alt="" className="car" /></div>
      </div>
      <hr className="carouselrule" />
      <div className="about">
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
          <h2 id="event-txt-head">Events</h2>
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
      <hr className="carouselrule" />
      <div class="grid image-grid">

        <div className='team-head'>
          <h2 id="team-txt">SnapShots</h2>
        </div>
        <div className='image-grid-holder'><div class="grid-block">
          <div class="tile">
            <a class="tile-link" href="#">
              <img class="tile-img tile-img1" src={pic1} alt="Image" />
            </a>
          </div>
        </div>

          <div class="grid-block">
            <div class="tile">
              <a class="tile-link" href="#">
                <img class="tile-img tile-img2" src={pic2} alt="Image" />
              </a>
            </div>
          </div>

          <div class="grid-block">
            <div class="tile">
              <a class="tile-link" href="#">
                <img class="tile-img tile-img3" src={pic3} alt="Image" />
              </a>
            </div>
          </div>

          <div class="grid-block">
            <div class="tile">
              <a class="tile-link" href="#">
                <img class="tile-img tile-img4" src={pic4} alt="Image" />
              </a>
            </div>
          </div>

          <div class="grid-block">
            <div class="tile">
              <a class="tile-link" href="#">
                <img class="tile-img tile-img5" src="https://lh3.googleusercontent.com/pw/ACtC-3ckl0QrFbuW3W6VJ88rW0TeCZYumT9H7ZzN1dW6nrxOcf6mxEYT79iai43_T8i9AbiViFkpJBqVtS6d7loh-IgUwviFhdnkg1U-BNgeBPvstSBHCqWokHbx3EIHTkZFh3QkaTykBxZH7BqYvni2ukTL=w1384-h791-no" alt="Image" />
              </a>
            </div>
          </div>

          <div class="grid-block">
            <div class="tile">
              <a class="tile-link" href="#">
                <img class="tile-img tile-img6" src="https://lh3.googleusercontent.com/pw/ACtC-3csXE_23DqssKWd76nUGNa5re7em4ySmZEif2L_jxJBpIV0pV3qHYXQope682nX2Qs04nhMHVZlNNwbUGzz6CWjaywX5VaH5TX2Wrh0iocAk5aRrN2ud7H55mGYdR-z-QEyK5ckiZ4BGZLiSpXe-TmD=w1384-h791-no" alt="Image" />
              </a>
            </div>
          </div>

          <div class="grid-block">
            <div class="tile">
              <a class="tile-link" href="#">
                <img class="tile-img tile-img7" src="https://lh3.googleusercontent.com/pw/ACtC-3fbpkwsUjaB8Cv6JFW_Z5E_7WjTwR3hEfafXoDmSsxBN_I_TKHLw3ngMCcOhYVv0KrzdJpjBfRzmTPVUikRZpyy53lb10ENbvWxrP-Hf83Y1KXc2RG0zLXoXqQjaT7NP9bBKEY7iv2I8sRIUJxCU9ql=w1703-h973-no" alt="Image" />
              </a>
            </div>
          </div>

          <div class="grid-block">
            <div class="tile">
              <a class="tile-link" href="#">
                <img class="tile-img tile-img8" src="https://lh3.googleusercontent.com/pw/ACtC-3cCwp7dKtvwMA8uf_Y3OTxZz-CiYRpay0fSZhfqYXCeDWBBfQERYnB7DzDCbsyyzdzoOU7_9BbW3WR5VaY9YPD3syn3VgZDxj6-2qTOwDw_HDlnLd92LlvCZIEr8oDKVt4AU7q-oJNHE6O9sRhGAVMi=w1384-h791-no" alt="Image" />
              </a>
            </div>
          </div>

          <div class="grid-block">
            <div class="tile">
              <a class="tile-link" href="#">
                <img class="tile-img tile-img9" src="https://lh3.googleusercontent.com/pw/ACtC-3ffctj4lOMbhO6QA2a-9o24LTDFytAw4WAnxkpZr3fCDQHPyXTXeXqaI7KrD2ktnpXyfzGKvsax_oekoUGojWEGc9Ghte4ycSxgx6ZydR3LsnJlXO5zKwpoZYIBCIlYxxpq2PNcc9irUdA7P68_rdSY=w1384-h791-no" alt="Image" />
              </a>
            </div>
          </div>

          <div class="grid-block">
            <div class="tile">
              <a class="tile-link" href="#">
                <img class="tile-img tile-img10" src="https://lh3.googleusercontent.com/pw/ACtC-3dM37DnDx6OrPA4-VazUuGM5p9grWJtW8SLNQ9vo3xZlGTHw8wt6NXShF3umpCjoaM6XUyvIDl8una8MAd4z-hU23Fuz9_AjCkTpQ4YV3k5C0cXPzAq70WhaKHAEFHKcDXGVqAZVl5HgOSr9hSbHrLr=w1384-h791-no" alt="Image" />
              </a>
            </div>
          </div></div>


      </div>
      {Addscript(
        './tilt.js')}
        {AddLibrary(
        './scrollbar.js')}

    </div>
  )
}

export default Home