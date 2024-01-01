import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SellerRegister from './scenes/Register'

function App() {
  return (
    <div className="bg-red-700">
      <BrowserRouter>
      <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
        {/* <Navbar/> */}
      </div>
      <Routes>
        <Route path="/registeruser" element={<SellerRegister/>}/>
        {/* <Route path="/registerseller" element={}/> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
