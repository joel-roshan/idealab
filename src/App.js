
import './App.css';
import { Route , Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Request from './pages/Request/Request';




function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/request' element={<Request />} />
      </Routes>
    </div>
  );
}

export default App;
