import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';
import Home from './pages/Home/Home';
import GamePage from './pages/Games/Game';
import AboutPage from './pages/AboutUs/AboutPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CareersPage from './pages/Careers/Careers';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home  />} />
          <Route path="/games" element={<GamePage  />} />
          <Route path='/careers' element={<CareersPage />}/>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
