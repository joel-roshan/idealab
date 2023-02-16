
import './App.css';
import { Route , Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Request from './pages/Request/Request';
import Facilities from './pages/Facilites/Facilities';
import Events from './pages/Events/Events';
import Team from './pages/Team/Team';
import Contact from './pages/Contact/Contact';
import { Credits } from './pages/Credit/Credits';


function App() {
  return (
    <div id='container'>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/request' element={<Request />} />
        <Route path='/facilities' element = {<Facilities />} />
        <Route path='/events' element = {<Events />} />
        <Route path='/team' element = {<Team />} />
        <Route path='/contact' element = {<Contact/>} />
        <Route path='/credit' element = {<Credits />} />
      </Routes>
    </div>
  );
}

export default App;
