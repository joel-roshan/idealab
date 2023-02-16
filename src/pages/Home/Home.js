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
import Footer from '../../components/Footer'







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
            <p className="about-content" >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis beatae dolore
              sint ab blanditiis repellat rerum tempore ipsa, quasi sapiente. Sed labore, illum distinctio ad
              earum inventore nobis dolor cumque!</p>
          </div>
          <div className="about-image-hold"><img src={car} alt="about pic" className="about-image" /></div>
        </div>
      </div>
      <hr className="carouselrule" />
      <div className='event'>
        <div className='event-head'>
          <h2 id="event-txt-head">Events</h2>
        </div>
        <section id='event-wrapper'>
          <div id='event-hold-multi'>
            <div id='filler'></div>
            <div><EventCard
              date="22-12-2222"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwn2MAEL-OI7TvmRJjUwQb_GtBcRvYGelTCw&usqp=CAU"
              des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod....."
            /></div>
            <div><EventCard
              date="22-12-2222"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwn2MAEL-OI7TvmRJjUwQb_GtBcRvYGelTCw&usqp=CAU"
              des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod....."
            /></div><div><EventCard
              date="22-12-2222"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwn2MAEL-OI7TvmRJjUwQb_GtBcRvYGelTCw&usqp=CAU"
              des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod....."
            /></div><div><EventCard
              date="22-12-2222"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwn2MAEL-OI7TvmRJjUwQb_GtBcRvYGelTCw&usqp=CAU"
              des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod....."
            /></div>
            <div><EventCard
              date="22-12-2222"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwn2MAEL-OI7TvmRJjUwQb_GtBcRvYGelTCw&usqp=CAU"
              des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod....."
            /></div>
            <div><EventCard
              date="22-12-2222"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwn2MAEL-OI7TvmRJjUwQb_GtBcRvYGelTCw&usqp=CAU"
              des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod....."
            /></div>
            <div><EventCard
              date="22-12-2222"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwn2MAEL-OI7TvmRJjUwQb_GtBcRvYGelTCw&usqp=CAU"
              des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod....."
            /></div>
            <div><EventCard
              date="22-12-2222"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwn2MAEL-OI7TvmRJjUwQb_GtBcRvYGelTCw&usqp=CAU"
              des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod....."
            /></div>
          </div>
        </section>
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
          <div><ProfileCard
            name="cat"
            img="https://png.pngtree.com/png-clipart/20190520/original/pngtree-melancholy-cat-hand-drawn-avatar-design-paintedcatavatarpretty-cat-png-image_4078730.jpg"
          /></div>
          <div><ProfileCard
            name="John Appleseed"
            img="https://www.getillustrations.com/photos/pack/3d-avatar-male_lg.png"
          /></div><div><ProfileCard
            name="cat"
            img="https://png.pngtree.com/png-clipart/20190520/original/pngtree-melancholy-cat-hand-drawn-avatar-design-paintedcatavatarpretty-cat-png-image_4078730.jpg"
          /></div>
          <div><ProfileCard
            name="John Appleseed"
            img="https://www.getillustrations.com/photos/pack/3d-avatar-male_lg.png"
          /></div>
        </div>

        <div className='student'>
          <h3 id='student-txt'>Student in charges</h3>
        </div>

        <div className='team-hold-multi'>
          <div><ProfileCard
            name="cat"
            img="https://png.pngtree.com/png-clipart/20190520/original/pngtree-melancholy-cat-hand-drawn-avatar-design-paintedcatavatarpretty-cat-png-image_4078730.jpg"
          /></div>
          <div><ProfileCard
            name="John Appleseed"
            img="https://www.getillustrations.com/photos/pack/3d-avatar-male_lg.png"
          /></div>
          <div><ProfileCard
            name="cat"
            img="https://png.pngtree.com/png-clipart/20190520/original/pngtree-melancholy-cat-hand-drawn-avatar-design-paintedcatavatarpretty-cat-png-image_4078730.jpg"
          /></div>
          <div><ProfileCard
            name="John Appleseed"
            img="https://www.getillustrations.com/photos/pack/3d-avatar-male_lg.png"
          /></div>
        </div>
      </div>
      <hr className="carouselrule" />
      <div className='equipments'>
        <div className='equipment-heading'><h3 id='equipment-head'>We have</h3></div>
        <div className='equipment-holder'>
          <FacilitiesCard
            title="3D Printer"
            img="https://www.stratasys.co.in/siteassets/3d-printers/printer-catalog/stereolitography/neo-series-printers/neoheader450.png?v=48e1d3&width=548&mode=crop"
            des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...."
          />
          <FacilitiesCard
            title="3D Printer"
            img="https://www.stratasys.co.in/siteassets/3d-printers/printer-catalog/stereolitography/neo-series-printers/neoheader450.png?v=48e1d3&width=548&mode=crop"
            des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...."
          />
          <FacilitiesCard
            title="3D Printer"
            img="https://www.stratasys.co.in/siteassets/3d-printers/printer-catalog/stereolitography/neo-series-printers/neoheader450.png?v=48e1d3&width=548&mode=crop"
            des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...."
          />
          <FacilitiesCard
            title="3D Printer"
            img="https://www.stratasys.co.in/siteassets/3d-printers/printer-catalog/stereolitography/neo-series-printers/neoheader450.png?v=48e1d3&width=548&mode=crop"
            des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...."
          />
        </div>

      </div>
      <hr className="carouselrule" />
      <div className='grid'>
      <h1 id='gallery-head'>Snapshots</h1>
<div id="gallery" class="container-fluid">  
  <img src="https://source.unsplash.com/1600x1200?female,portrait" class="img-responsive"/>
  <img src="https://source.unsplash.com/1024x768?female,portrait" class="img-responsive"/>
   <img src="https://source.unsplash.com/1366x768?female,portrait" class="img-responsive"></img>
  <img src="https://source.unsplash.com/1920x1080?female,portrait" class="img-responsive"/>
  <img src="https://source.unsplash.com/640x360?female,portrait" class="img-responsive"/>
<img src="https://source.unsplash.com/320x640?female,portrait" class="img-responsive"/>
  <img src="https://source.unsplash.com/1200x1600?female,portrait" class="card img-responsive"/>
  <img src="https://source.unsplash.com/800x600?female,portrait" class="img-responsive"/>
  <img src="https://source.unsplash.com/600x800?female,portrait" class="img-responsive"/>
  <img src="https://source.unsplash.com/400x600?female,portrait" class="img-responsive"/>
  <img src="https://source.unsplash.com/600x400?female,portrait" class="img-responsive"/>
<img src="https://source.unsplash.com/1100x1600?female,portrait" class="img-responsive"/>
<img src="https://source.unsplash.com/1600x1100?female,portrait" class="img-responsive"/>
<img src="https://source.unsplash.com/992x768?female,portrait" class="img-responsive"/>
<img src="https://source.unsplash.com/768x992?female,portrait" class="img-responsive"/>

</div>

<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <div class="modal-content">
      <div class="modal-body">
      </div>
    </div>

  </div></div>
</div>
<hr className="carouselrule" />
<Footer/>

      {Addscript(
        './tilt.js')}
      {AddLibrary(
        './scrollbar.js')}
      {AddLibrary(
        './scroll.js')}

    </div>
  )
}

export default Home