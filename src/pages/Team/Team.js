import React from 'react'
import Header from '../../components/Header'
import ProfileCard from '../../components/ProfileCard'
import './Team.css'
import Footer from '../../components/Footer'


const Team = () => {
  return (
    <div>
        <Header />
        <div className='team'>
        <div className='team-head'>
          <h2 id="team-txt">Team</h2>
        </div>

        <div className='faculties'>
          <h3 id='team-sub-head'>Faculties</h3>
        </div>

        <div className='team-hold-multi-inside'>
        <div><ProfileCard
            name="Cat 1"
            img ="https://png.pngtree.com/png-clipart/20190520/original/pngtree-melancholy-cat-hand-drawn-avatar-design-paintedcatavatarpretty-cat-png-image_4078730.jpg"
          /></div>
          <div><ProfileCard 
            name="John Appleseed"
            img="https://www.getillustrations.com/photos/pack/3d-avatar-male_lg.png"
          /></div><div><ProfileCard
          name="cat"
          img ="https://png.pngtree.com/png-clipart/20190520/original/pngtree-melancholy-cat-hand-drawn-avatar-design-paintedcatavatarpretty-cat-png-image_4078730.jpg"
        /></div>
        <div><ProfileCard 
          name="John Appleseed"
          img="https://www.getillustrations.com/photos/pack/3d-avatar-male_lg.png"
        /></div>
        </div>

        <div className='student '>
          <h3 id='team-sub-head'>Student in charges</h3>
        </div>

        <div className='team-hold-multi team-hold-multi-inside'>
          <div><ProfileCard
            name="cat"
            img ="https://png.pngtree.com/png-clipart/20190520/original/pngtree-melancholy-cat-hand-drawn-avatar-design-paintedcatavatarpretty-cat-png-image_4078730.jpg"
          /></div>
          <div><ProfileCard 
            name="John Appleseed"
            img="https://www.getillustrations.com/photos/pack/3d-avatar-male_lg.png"
          /></div>
          <div><ProfileCard
            name="cat"
            img ="https://png.pngtree.com/png-clipart/20190520/original/pngtree-melancholy-cat-hand-drawn-avatar-design-paintedcatavatarpretty-cat-png-image_4078730.jpg"
          /></div>
          <div><ProfileCard 
            name="John Appleseed"
            img="https://www.getillustrations.com/photos/pack/3d-avatar-male_lg.png"
          /></div>
        </div>
      </div>
      <hr className="carouselrule" />
      <Footer />
    </div>
  )
}

export default Team