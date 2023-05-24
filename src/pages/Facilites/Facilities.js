import React,{ useState , useEffect } from 'react'
import FacilitiesCard from '../../components/FacilitiesCard'
import Header from '../../components/Header'
import './Facilities.css'
import Footer from '../../components/Footer'
import Axios from 'axios';

const Facilities = () => {

  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    getfacilities();
  }, []);


  const getfacilities = () => {
    Axios.get("https://idealabbackend-production.up.railway.app/api/list_equipments/").then(
      (res) => {
        setFacilities(res.data);
      }
    )
    .catch((err) => console.log(err));
  }
  return (
    <div>
    <div id='facilities-body'>
        <Header />
        <div className='heading'>
          <h2 id= "event-heading">We have</h2>
        </div>
        <div className="facilities-grid">
        {facilities.map((event) => (
            <FacilitiesCard
            img = "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSIaEsVq96A9ef5hNyMFNWuK4_SSYVR5DITgz2ry6cUrAvoxnWJwxOdPaJbFWR1rrZ4PzLufC4uhf-9b3w9ng2PEn7c7UnqdtKhTA6o2yfsLRo6HD5SL5nNdt_MIacyotn9drc&usqp=CAc"
            tittle={event.name}
            des={event.description}
            />
        ))}
        </div>

    </div>
    <hr className="carouselrule" />
        <Footer />
    </div>
  )
}

export default Facilities