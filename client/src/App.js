import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SellerRegister from './scenes/Register'
import Login from './scenes/Login';
import Home from './scenes/Home';

function App() {
  return (
    <div className="bg-black">
      <BrowserRouter>
        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
          {/* <Navbar/> */}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<SellerRegister />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/registerseller" element={}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
